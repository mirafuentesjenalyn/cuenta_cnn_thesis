// components/Navbar.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    // Update the date and time every second
    const intervalId = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(dateTime);

  const formattedTime = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  }).format(dateTime);

  return (
    <nav className="navbar">
      <div className='logo-container'>
      <Link to="/">
        <Logo />
      </Link>
      <div className='date-time'>
        <strong>{formattedDate}</strong> | <span>{formattedTime}</span>
      </div>
      </div>
      {/* Add other navigation links as needed */}
    </nav>
  );
};

export default Navbar;
