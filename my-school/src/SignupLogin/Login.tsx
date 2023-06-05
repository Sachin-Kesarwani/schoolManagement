import React, { useState } from 'react';
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleForgotPassword = () => {
    // Handle "Forgot Password" logic here
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
          <a className='forgot' href="#" style={{float:"left"}} onClick={handleForgotPassword}>
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
