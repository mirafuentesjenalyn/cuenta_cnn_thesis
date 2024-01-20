import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../views/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'admin') {
      onLogin();
      navigate('/');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div className="login-container">
      <section className="login-content" id="content">
        <form onSubmit={handleSubmit}>
          <div className="logo-container">
            <img src="/logo/logo_dark.png" alt="Icon" className="icon-image" />
              <h1>Login to Cuenta</h1>
          </div>

          {loginError && <p className="login-error">Login failed. Please check your credentials.</p>}
          
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
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              required=""
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                onChange={() => setShowPassword(!showPassword)}
              />{' '}
              Show Password
            </label>
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
