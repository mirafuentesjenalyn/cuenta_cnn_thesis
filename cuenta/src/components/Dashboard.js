import React, { useState, useRef, useEffect } from 'react';
import '../views/dashboard.css'; // Import the CSS file

// Function to create a black video track
function createBlackVideoTrack() {
  const canvas = Object.assign(document.createElement('canvas'), { width: 640, height: 480 });
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);
  const stream = canvas.captureStream();
  return Object.assign(stream.getVideoTracks()[0], { enabled: false });
}

const Dashboard = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleVideoClick = (index) => { //TODO: fix the bug where video feed doesnt go back to its original size immediately
    setActiveVideo((prevActive) => (prevActive === index ? null : index));
    videoRefs.forEach((ref, i) => {
      if (ref.current) {
        // Set the volume to 1 for the active video, and 0 for others
        ref.current.volume = i === index ? 1 : 0;
        // If the clicked video is the active video, request full screen
        if (i === index) {
          ref.current.classList.add('full-screen');
          if (ref.current.requestFullscreen) {
            ref.current.requestFullscreen();
            setIsFullScreen(true);
          } else if (ref.current.mozRequestFullScreen) { // Firefox
            ref.current.mozRequestFullScreen();
            setIsFullScreen(true);
          } else if (ref.current.webkitRequestFullscreen) { // Chrome, Safari and Opera
            ref.current.webkitRequestFullscreen();
            setIsFullScreen(true);
          } else if (ref.current.msRequestFullscreen) { // IE/Edge
            ref.current.msRequestFullscreen();
            setIsFullScreen(true);
          }
        }
      }
    });
  };

  useEffect(() => {
    const initializeCamera = async (index) => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        if (videoDevices[index]) { // If a camera is available for this index
          const stream = await navigator.mediaDevices.getUserMedia({ video: { deviceId: videoDevices[index].deviceId } });
          if (videoRefs[index].current) {
            videoRefs[index].current.srcObject = stream;
            videoRefs[index].current.play().catch((error) => console.error('Error auto-playing video:', error));
          }
        } else { // Display a black screen if no camera is available
          const blackStream = new MediaStream([createBlackVideoTrack()]);
          if (videoRefs[index].current) {
            videoRefs[index].current.srcObject = blackStream;
          }
        }
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
        // Remove the full-screen class
        videoRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.classList.remove('full-screen');
          }
        });
      } else {
        // Add the full-screen class
        videoRefs.forEach((ref, i) => {
          if (ref.current && i === activeVideo) {
            ref.current.classList.add('full-screen');
          }
        });
      }
    };
    

    document.addEventListener('fullscreenchange', handleFullScreenChange);

    videoRefs.forEach((_, index) => initializeCamera(index));

    return () => {
      // Cleanup: stop video streams when the component unmounts
      videoRefs.forEach((ref) => {
        if (ref.current && ref.current.srcObject) {
          ref.current.srcObject.getTracks().forEach((track) => track.stop());
        }
      });
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
    };
  }, []); // Empty dependency array to run the effect only once on mount
  
  

  return (
    <div className="dashboard-container">
      <h1>Welcome to Cuenta Dashboard</h1>
      <div className="video-grid">
        {[0, 1].map((row) => (
          <div key={row} className="video-row">
            {[0, 1].map((col) => {
              const index = row * 2 + col;
              return (
                <div
                  key={index}
                  className={`video-element ${activeVideo === index ? 'active' : ''}`}
                  onClick={() => handleVideoClick(index)}
                >
                  <video
                    ref={videoRefs[index]}
                    autoPlay
                    muted
                    className="video-player"
                    width="100%"
                    height="100%"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
