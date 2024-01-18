// import React, { useState, useRef, useEffect } from 'react';
// import '../views/dashboard.css'; // Import the CSS file

const Dashboard = () => {
  // const [activeVideo, setActiveVideo] = useState(null);
  // const videoRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  // const handleVideoClick = (index) => {
  //   setActiveVideo((prevActive) => (prevActive === index ? null : index));
  //   videoRefs.forEach((ref, i) => {
  //     if (ref.current) {
  //       // Set the volume to 1 for the active video, and 0 for others
  //       ref.current.volume = i === index ? 1 : 0;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   const initializeCamera = async (index) => {
  //     try {
  //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  //       if (videoRefs[index].current) {
  //         videoRefs[index].current.srcObject = stream;
  //         videoRefs[index].current.play().catch((error) => console.error('Error auto-playing video:', error));
  //       }
  //     } catch (error) {
  //       console.error('Error accessing camera:', error);
  //     }
  //   };

  //   videoRefs.forEach((_, index) => initializeCamera(index));

  //   return () => {
  //     // Cleanup: stop video streams when the component unmounts
  //     videoRefs.forEach((ref) => {
  //       if (ref.current && ref.current.srcObject) {
  //         ref.current.srcObject.getTracks().forEach((track) => track.stop());
  //       }
  //     });
  //   };
  // }, []); // Empty dependency array to run the effect only once on mount

  // return (
  //   <div className="dashboard-container">
  //     <h1>Welcome to Cuenta Dashboard</h1>
  //     <div className="video-grid">
  //       {[0, 1].map((row) => (
  //         <div key={row} className="video-row">
  //           {[0, 1].map((col) => {
  //             const index = row * 2 + col;
  //             return (
  //               <div
  //                 key={index}
  //                 className={`video-element ${activeVideo === index ? 'active' : ''}`}
  //                 onClick={() => handleVideoClick(index)}
  //               >
  //                 <video
  //                   ref={videoRefs[index]}
  //                   autoPlay
  //                   muted
  //                   className="video-player"
  //                   width="100%"
  //                   height="100%"
  //                 />
  //               </div>
  //             );
  //           })}
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default Dashboard;
