import React from 'react';

const LoginBox = () => {
  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <input type="text" placeholder="Username" style={styles.input} />
      <input type="password" placeholder="Password" style={styles.input} />
      <button style={styles.button}>Login</button>
      <div style={styles.or}>or</div>
      <button style={styles.googleButton}>Login with Google</button>
      <div style={styles.links}>
        <a href="/signup" style={styles.link}>Sign Up</a>
        <a href="/forgot-password" style={styles.link}>Forgot Password</a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    width: '300px',
    margin: '0 auto',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  button: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  or: {
    margin: '20px 0',
  },
  googleButton: {
    width: '100%',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: '#db4437',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
  links: {
    marginTop: '20px',
  },
  link: {
    margin: '0 10px',
    color: '#007bff',
    textDecoration: 'none',
  },
};

export default LoginBox;
