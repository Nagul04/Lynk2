import React, { useState } from 'react';
import './SignUp.css';


const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

       console.log('Form submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className='logo1container'><img loading="lazy" src="https://github.com/Neeladas03/Lynk2/blob/main/Lynk2/src/assets/Logo1.jpg?raw=true" alt="Logo" className="logo1" /> </div>
      <p className='caption'>Sign up to see photos and videos <br/>
      from your friends</p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder='User Name '
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            placeholder='Email'
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          placeholder='Password'
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
          placeholder='Confirm Password'
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit" className='sup'>
          <a href='/' className='atag'>Sign Up</a>
          </button>
      </form>
    </div>
  );
};

export default SignUp;