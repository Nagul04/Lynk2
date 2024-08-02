import React, { useState } from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Password reset link sent to ${email}`);
  };

  return (
    <div className="fp-container">
      <h1>Forgot Password</h1>
      <p>Enter your email address or username and we’ll send you a link to reset your password.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email address or username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      <p className="back-login">
        <a href="/">Back to Login</a>
      </p>
    </div>
  );
};

export default ForgotPassword;
