import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../views/calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());
  const [isCircleActive, setIsCircleActive] = useState(false);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    setIsCircleActive(false); // Reset to square when changing the date
  };

  const handleTileClick = () => {
    setIsCircleActive(!isCircleActive);
  };

  return (
    <div className="calendar-container">
        <Link to="/" className="home-click">
        Home
      </Link>
      <Link to="/calendar" className="calendar-click">
         Calendar
      </Link>
      <div className='slash'>
      <h1>/</h1>
      </div>

      <div>
        <Calendar
          className={`custom-calendar ${isCircleActive ? 'react-calendar__tile--circle' : ''}`}
          onChange={handleDateChange}
          value={date}
          onClickDay={handleTileClick}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
