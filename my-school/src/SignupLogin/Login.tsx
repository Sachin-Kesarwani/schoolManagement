import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file
import { useAppDispatch } from '../Redux/Store';
import { UserLogin } from '../Redux/AuthRedux/action';
import Cookies from "js-cookie"
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
let dispatch=useAppDispatch()
let navigate=useNavigate()
  const handleSubmit = (e:any) => {
    e.preventDefault();
    dispatch(UserLogin({email,password})).then(()=>{
      // const cookieValue = Cookies.get('SchooleManagementAdminData');

// Parse the value if it's stored as a JSON string
// const parsedValue = cookieValue ? JSON.parse(cookieValue) : null;

    })
 
  };

  const handleForgotPassword = () => {
    // Handle "Forgot Password" logic here
    navigate("/forgetpasswordform")
  };

  return (
    <div className="container">
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
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
        <div className="form-footer">
          <button type="submit">Log In</button>
          <a className='forgot' href="#" style={{float:"left",color:"blue"}} onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
