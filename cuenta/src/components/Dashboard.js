import { useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import '../views/dashboard.css';

const Dashboard = () => {
  const videoRef = useRef(null);

  const cleanupCamera = useCallback(() => {
    // Cleanup: Stop the camera when the component unmounts
    const tracks = videoRef.current?.srcObject?.getTracks();
    tracks?.forEach((track) => track.stop());
  }, []);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return cleanupCamera;
  }, [cleanupCamera]);

  return (
    <div className={`dashboard-container dashboard-background`}>
      <Link to="/" className="home-click">
        Home
      </Link>
      <Link to="/" className="dashboard-click">
        Dashboard
      </Link>
      <div className="slash">
        <h1>/</h1>
      </div>
      <div className="camera-container">
        <video ref={videoRef} autoPlay playsInline muted />
      </div>
    </div>
  );
};

export default Dashboard;
