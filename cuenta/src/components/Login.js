import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../views/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for hardcoded username and password
    if (username === 'admin' && password === 'admin') {
      // Authentication successful, call the onLogin callback and redirect to the dashboard
      onLogin();
      navigate('/');
    } else {
      // Authentication failed
      console.log('Login failed');
    }
  };

  return (
    <div className="container">
      <section id="content">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div>
            <input
              type="text"
              placeholder="Username"
              required=""
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              required=""
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <input type="submit" value="Log in" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default Login;
