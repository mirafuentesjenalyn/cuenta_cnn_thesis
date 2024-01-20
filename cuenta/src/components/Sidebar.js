// components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCalendar, FaChartBar } from 'react-icons/fa';
import '../views/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="bus-counting">
        <p>Real-time Bus Passenger Counting System</p>
      </div>
      <ul>
        <li className="dashboard-link">
          <i className="icon"><FaHome /></i>
          <Link to="/">Dashboard</Link>
        </li>
        <li className="calendar-link">
          <i className="icon"><FaCalendar /></i>
          <Link to="/calendar">Calendar</Link>
        </li>
        <li className="performance-link">
          <i className="icon"><FaChartBar /></i>
          <Link to="/performance">Performance</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
