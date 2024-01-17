import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Calendar from './components/Calendar';
import Performance from './components/Performance';
import Login from './components/Login'; // Import the Login component
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <Router>
      <Navbar loggedIn={loggedIn} onLogout={handleLogout} />
      <div style={{ padding: '20px' }}></div>
      <div style={{ display: 'flex' }}>
        {loggedIn && <Sidebar />} {/* Show Sidebar only when logged in */}
        <div style={{ marginLeft: '200px', padding: '20px', width: '100%' }}>
        <Routes>
          {loggedIn ? (
            <>
              {/* Render routes only when logged in */}
              <Route path="/" element={<Dashboard />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/performance" element={<Performance />} />
              {/* Add more routes as needed */}
            </>
          ) : (
            <Route
              path="/"
              element={<Login onLogin={handleLogin} />}
            />
          )}
        </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
