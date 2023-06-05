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
      <div className="logo">TEACHME</div>
      <div className={`menu ${isOpen ? 'show' : ''}`}>
        <a href="#"  className="fromLeft">Home</a>
        <a href="#"  className="fromLeft">About</a>
        <a href="#" className="fromLeft">Services</a>
        <a href="#" className="fromLeft">Contact</a>
      </div>
      <div>
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
