import React from 'react';
import Navbar from './Navbar';
import Stories from './Stories';
import InfiniteScrollComponent from './InfiniteScrollComponent';
import './Feed.css';

const Feed = () => {
  return (
    <div className="app">
      <div className="content">
          <div className='logo2container'><img src="https://github.com/Neeladas03/Lynk2/blob/main/Lynk2/src/assets/Logo1.jpg?raw=true" alt="Logo" className="logo2" loading='lazy' /> </div>
        <Navbar/>
        <Stories/>
        <InfiniteScrollComponent/>
      </div>
    </div>
  );
};

export default Feed;