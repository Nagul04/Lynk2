import React from 'react';
import './loginbox.css';
import { Link } from 'react-router-dom';

const LoginBox = () => {
  return (
    <div className="login-container">
        <div className='logocontainer'><img src="https://github.com/Neeladas03/Lynk2/blob/main/Lynk2/src/assets/Logo1.jpg?raw=true" alt="Logo" className="logo" loading='lazy' /> </div>
      <input type="text" placeholder="Username" className="input" />
      <input type="password" placeholder="Password" className="input" />
      <Link to="/feed"><button className='button1'>Login</button></Link>
      <div className="or">or</div>
      <button className="google-button">Login with Google</button>
      <div className="links">
        <Link to="/signup" className='link1'>Signup</Link>
        <Link to="/forgot-password" className='link1'>Forgot Password</Link>
      </div>
    </div>
  );
};

export default LoginBox;

