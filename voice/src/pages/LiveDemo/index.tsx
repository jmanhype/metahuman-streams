import dynamic from 'next/dynamic';
import Header from "../../components/Header";

const LiveStream = dynamic(() => import("./components/LiveStream"), { ssr: false });

const LiveDemo = () => {
  const streamUrl = `http://${window.location.hostname}:8010/offer`;

  console.log('Stream URL in LiveDemo:', streamUrl);

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#121212', color: 'white', padding: '20px' }}>
      <Header />
      <h1>Live Demo Page</h1>
      <div style={{ marginBottom: '20px' }}>
        <h2>Debug: Before LiveStream</h2>
        <p>Stream URL: {streamUrl}</p>
      </div>
      <LiveStream streamUrl={streamUrl} />
      <div style={{ marginTop: '20px' }}>
        <h2>Debug: After LiveStream</h2>
      </div>
    </main>
  )
}

export default LiveDemo