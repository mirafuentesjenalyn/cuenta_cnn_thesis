// components/Performance.js
import React from 'react';
import { Link } from 'react-router-dom'; 
import '../views/performance.css'

const Performance = () => {
  return (
    <div className="performance-container">
      <Link to="/" className="home-click">
        Home
      </Link>
      <Link to="/performance" className="performance-click">
         Performance
      </Link>
      <div className='slash'>
      <h1>/</h1>
      </div>

      {/* Add your performance-related content or charts here */}
    </div>
  );
};

export default Performance;
