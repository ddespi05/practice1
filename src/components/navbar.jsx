import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Mini Management</h1>
      <div>
        <a href="#home">Home</a>
        <a href="#login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;