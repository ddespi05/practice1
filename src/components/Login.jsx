import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" required />
          </div>
          <button type="submit" className="login-btn">Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Login;