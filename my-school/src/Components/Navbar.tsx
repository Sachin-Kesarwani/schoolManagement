import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Contact</a>
        <Link to="/login"> <button className="login-btn">Login</button></Link>
    <Link to="/signup"> <button className="signup-btn">Signup</button></Link>
       
      </div>
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
