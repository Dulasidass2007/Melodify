import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem('userEmail', email);
      navigate('/');
    } else {
      alert('Please enter email and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Melodify Login</h1>
        
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit">Log In</button>
        </form>

        <p>Don't have an account? <a href="#signup">Sign up</a></p>
      </div>
    </div>
  );
}

export default Login;
