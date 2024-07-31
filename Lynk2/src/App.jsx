import React from 'react';
import Navbar from './components/Navbar';
import PhoneSlideshow from './components/PhoneSlideshow';
import LoginBox from './components/LoginBox';

const App = () => {
  return (
    <div>
      <Navbar />
      <div style={styles.mainContent}>
        <div style={styles.leftSide}>
          <PhoneSlideshow />
        </div>
        <div style={styles.rightSide}>
          <LoginBox />
        </div>
      </div>
    </div>
  );
};

const styles = {
  mainContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    height: 'calc(100vh - 60px)', 
  },
  leftSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
  rightSide: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
  },
};

export default App;
