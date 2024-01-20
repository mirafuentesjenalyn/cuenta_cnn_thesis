import React, { useState } from 'react';
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
      <h1 className="calendar-heading">Calendar</h1>
      <p className="calendar-text">Welcome to the Calendar!</p>

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
