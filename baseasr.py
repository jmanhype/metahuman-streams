"""Base class for Automatic Speech Recognition (ASR) processing.

This module provides the foundation for ASR implementations used in the
metahuman streaming system. It handles audio frame queuing, buffering,
and feature extraction.
"""

import time
import numpy as np
from typing import Optional, Tuple, Any
import queue
from queue import Queue
import multiprocessing as mp


class BaseASR:
    """Base ASR class for audio processing and feature extraction.

    Attributes:
        opt: Configuration options
        parent: Optional parent object for callbacks
        fps: Frames per second (default 50, meaning 20ms per frame)
        sample_rate: Audio sample rate in Hz (16000)
        chunk: Number of samples per chunk
        queue: Queue for incoming audio frames
        output_queue: Multiprocessing queue for output audio
        batch_size: Batch size for processing
        frames: Buffer for audio frames
        stride_left_size: Left stride size for context window
        stride_right_size: Right stride size for context window
        feat_queue: Queue for extracted features
    """

    def __init__(self, opt: Any, parent: Optional[Any] = None) -> None:
        """Initialize the BaseASR instance.

        Args:
            opt: Configuration object with processing parameters
            parent: Optional parent object (e.g., BaseReal instance)
        """
        self.opt = opt
        self.parent = parent

        self.fps: int = opt.fps  # 20 ms per frame
        self.sample_rate: int = 16000
        self.chunk: int = self.sample_rate // self.fps  # 320 samples per chunk (20ms * 16000 / 1000)
        self.queue: Queue = Queue()
        self.output_queue: mp.Queue = mp.Queue()

        self.batch_size: int = opt.batch_size

        self.frames: list = []
        self.stride_left_size: int = opt.l
        self.stride_right_size: int = opt.r
        self.feat_queue: mp.Queue = mp.Queue(2)

    def pause_talk(self) -> None:
        """Clear the audio queue to stop current audio processing."""
        self.queue.queue.clear()

    def put_audio_frame(self, audio_chunk: np.ndarray) -> None:
        """Add an audio frame to the processing queue.

        Args:
            audio_chunk: Audio data as numpy array (16kHz, 20ms PCM)
        """
        self.queue.put(audio_chunk)

    def get_audio_frame(self) -> Tuple[np.ndarray, int]:
        """Retrieve the next audio frame from the queue.

        Returns:
            Tuple containing:
                - frame: Audio frame as numpy array
                - type: Frame type (0=user input, 1=silence, >1=custom audio)
        """
        try:
            frame = self.queue.get(block=True, timeout=0.01)
            frame_type = 0
        except queue.Empty:
            if self.parent and self.parent.curr_state > 1:  # Play custom audio
                frame = self.parent.get_audio_stream(self.parent.curr_state)
                frame_type = self.parent.curr_state
            else:
                frame = np.zeros(self.chunk, dtype=np.float32)
                frame_type = 1

        return frame, frame_type

    def get_audio_out(self) -> Tuple[np.ndarray, int]:
        """Get original audio PCM data for NeRF processing.

        Returns:
            Tuple of (audio_frame, frame_type)
        """
        return self.output_queue.get()

    def warm_up(self) -> None:
        """Warm up the ASR by pre-filling buffers with audio frames."""
        for _ in range(self.stride_left_size + self.stride_right_size):
            audio_frame, frame_type = self.get_audio_frame()
            self.frames.append(audio_frame)
            self.output_queue.put((audio_frame, frame_type))
        for _ in range(self.stride_left_size):
            self.output_queue.get()

    def run_step(self) -> None:
        """Process a single step of ASR. Override in subclasses."""
        pass

    def get_next_feat(self, block: bool, timeout: Optional[float]) -> Any:
        """Get the next feature from the feature queue.

        Args:
            block: Whether to block waiting for features
            timeout: Maximum time to wait (in seconds)

        Returns:
            Feature data from the queue
        """
        return self.feat_queue.get(block, timeout)