import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleHomeClick = (e) => {
    e.preventDefault(); 
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="navbar">
            <div className="navbar-item">
              <div className='navlogo'><img src="https://github.com/Neeladas03/Lynk2/blob/main/Lynk2/public/Logo1-removebg-preview1.png?raw=true" alt="logo" />
              </div>
      </div>
      <div className="navbar-item">
          <img src="https://img.icons8.com/ios-filled/50/000000/home.png" alt="Home" onClick={handleHomeClick}/>
          <span>Home</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/search.png" alt="Search" />
        <span>Search</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/instagram-reel.png" alt="Reels" />
        <span>Reels</span>
      </div>
      <div className="navbar-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNgy5zzljtPWr6uY54RUq9Hv6CsEQekr11Q&s" alt="Profile" />
        <span>Create</span>
      </div>
      <div className="navbar-item">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtrOKTap1Qkf3qa54qEI_9vm-nzRsEZ2Yuvw&s" alt="Profile" />
        <span>Settings</span>
      </div>
      <div className="navbar-item">
        <img src="https://img.icons8.com/ios-filled/50/000000/user.png" alt="Profile" />
        <span>Profile</span>
      </div>
    </nav>
  );
};

export default Navbar;
