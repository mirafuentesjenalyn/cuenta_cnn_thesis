// components/Calendar.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div>
      <h1>Calendar</h1>
      <p>Welcome to the Calendar!</p>

      <div style={{ maxWidth: '300px' }}>
        <Calendar onChange={handleDateChange} value={date} />
      </div>
    </div>
  );
};

export default CalendarComponent;
