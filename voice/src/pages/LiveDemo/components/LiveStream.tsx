import React, { useState, useEffect, useRef } from 'react';
import styles from './LiveStream.module.css';
import { BASE_URL } from '../../../constants';

interface LiveStreamProps {
  streamUrl: string;
}

const LiveStream: React.FC<LiveStreamProps> = ({ streamUrl }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string>('');
  const [connectionState, setConnectionState] = useState<string>('');
  const videoRef = useRef<HTMLVideoElement>(null);
  const pcRef = useRef<RTCPeerConnection | null>(null);

  const startStreaming = async () => {
    const useStun = document.getElementById('use-stun') as HTMLInputElement;
    const config = {
      iceServers: useStun.checked ? [{ urls: ['stun:stun.l.google.com:19302'] }] : [],
    };

    pcRef.current = new RTCPeerConnection(config);

    pcRef.current.addEventListener('connectionstatechange', () => {
      if (pcRef.current) {
        setConnectionState(pcRef.current.connectionState);
        console.log('Connection state changed:', pcRef.current.connectionState);
      }
    });

    pcRef.current.addEventListener('track', (evt) => {
      if (evt.track.kind === 'video' && videoRef.current) {
        videoRef.current.srcObject = evt.streams[0];
      }
    });

    try {
      // Add transceivers for audio and video
      pcRef.current.addTransceiver('audio', { direction: 'recvonly' });
      pcRef.current.addTransceiver('video', { direction: 'recvonly' });

      const offer = await pcRef.current.createOffer();
      console.log('Created offer:', offer);
      await pcRef.current.setLocalDescription(offer);
      
      console.log('Sending offer to server:', {
        sdp: pcRef.current.localDescription?.sdp,
        type: pcRef.current.localDescription?.type,
      });

      const response = await fetch(streamUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sdp: pcRef.current.localDescription?.sdp,
          type: pcRef.current.localDescription?.type,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Server error response:', errorText);
        throw new Error(`Failed to send offer: ${response.status} ${response.statusText}. Server response: ${errorText}`);
      }

      const answer = await response.json();
      console.log('Received answer from server:', answer);

      if (!answer.sdp || !answer.type) {
        throw new Error('Invalid answer received from server');
      }

      await pcRef.current.setRemoteDescription(new RTCSessionDescription(answer));
      console.log('Set remote description successfully');

      setIsLoading(false);
    } catch (error) {
      console.error('Streaming error:', error);
      setError(`Failed to start streaming: ${error instanceof Error ? error.message : String(error)}`);
      setIsLoading(false);
    }
  };

  const stopStreaming = () => {
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }
    setConnectionState('');
    console.log('Streaming stopped');
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(`${BASE_URL}/human`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          text: message,
          type: 'chat',
          interrupt: true,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      console.log('Message sent successfully');
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
      setError('Error sending message');
    }
  };

  if (error) {
    return <div className={styles['error-message']}>{error}</div>;
  }

  return (
    <div className={styles['live-stream-container']}>
      <div className="option">
        <input id="use-stun" type="checkbox" />
        <label htmlFor="use-stun">Use STUN server</label>
      </div>
      <button onClick={startStreaming}>Start</button>
      <button onClick={stopStreaming}>Stop</button>
      {connectionState && <div>Connection state: {connectionState}</div>}
      {error && (
        <div>
          <p className={styles['error-message']}>{error}</p>
          <button onClick={startStreaming}>Retry Connection</button>
        </div>
      )}
      <form className="form-inline" onSubmit={sendMessage}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message here"
          rows={3}
          style={{ width: '600px', height: '50px', color: 'black' }}
        />
        <button type="submit">Send</button>
      </form>
      <div id="media">
        <h2>Media</h2>
        <video ref={videoRef} autoPlay playsInline style={{ width: '600px' }} />
      </div>
    </div>
  );
};

export default LiveStream;
