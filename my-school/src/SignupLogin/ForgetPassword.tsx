import React, { useState } from 'react';
import './Form.css';

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform form submission logic here
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Update Password</h2>
        <div className="input-group">
          {/* <label htmlFor="email">Email:</label> */}
          <input
            type="email"
            id="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="newPassword">New Password:</label> */}
          <input
            type="password"
            id="newPassword"
            placeholder='Enter Your New Password'
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="confirmPassword">Confirm Password:</label> */}
          <input
            type="password"
            placeholder='Confirm New Password'
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button className='button' type="submit">Update</button>
      </form>
    </div>
  );
};

export default ForgetPasswordForm;
