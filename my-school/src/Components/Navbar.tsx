import React, { useState,useContext } from 'react';
import '../Styles/Navbar.css';
import { Link } from 'react-router-dom';
import AdminLogin from '../Admin/AdminLogin';
import { context } from '../Context/Context';
import AccountDropdown from '../UserDashboard/DropDown';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
   let access={position:"Admin"}
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
let {authorized}=useContext(context)
console.log(authorized)
  return (
    <nav className="navbar" style={{ position: "sticky", top: 0, width: '100%', backgroundColor: 'black', padding: '10px', zIndex: 2 }}>
      <div className="logo">TEACHME</div>
      <div className={`menu ${isOpen ? 'show' : ''}`}>

        <Link to={'/'}>
        Home
        </Link>
        <Link to={'/about'}>
        About
        </Link>
        <Link to={'/services'}>
        Services
        </Link>
        <Link to={'/contact'}>
        Contact
        </Link>
        {
          (access.position==="Manager"||access.position==="Admin")&&<AdminLogin/>
        }
      </div>
      {
       authorized?<AccountDropdown/>:  <div >
        <Link to="/login"> <button className="login-btn">Login</button></Link>
        <Link to="/signup"> <button className="signup-btn">Signup</button></Link>
      </div>
      }
    
      <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default Navbar;
