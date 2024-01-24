// src/components/RegistrationForm.js
import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = ({ onRegister }) => {
  const [registrationData, setRegistrationData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    onRegister(registrationData);
  };

  return (
    <div className="form-container">
      <div>
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={registrationData.username}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={registrationData.password}
          onChange={handleInputChange}
        />
        <button onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
};

export default RegistrationForm;
