// components/Dashboard.js
import React, { useEffect, useState } from 'react';

const Dashboard = () => {
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
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to the Dashboard!</p>

      <div>
        <strong>{formattedDate}</strong> | <span>{formattedTime}</span>
      </div>
    </div>
  );
};

export default Dashboard;
