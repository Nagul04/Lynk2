import React, {useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import homeicon from '../assets/home.svg';
import profileicon from '../assets/profile.svg';
import chaticon from '../assets/chat.svg';
import createicon from '../assets/create.svg';
import settingsicon from '../assets/settings.svg';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [activeList, setActiveList] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  const handleListClick = (index) => {
    setActiveList(index);
  };

  const handleHomeClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setActiveList(0);
  };
  return (
    <div className='navvv'>
      <div className={`navigation ${activeMenu ? 'active' : ''}`}>
        <ul>
          <li
            className={`list ${activeList === 0 ? 'active' : ''}`}
            onClick={handleHomeClick}
          >
            <b></b>
            <b></b>
            <Link to="/" onClick={() => handleListClick(0)}>
              <span className="navicon">
                <img style={{ width: '40px' }} src={homeicon} alt="Home" />
              </span>
              <span className="title">Home</span>
            </Link>
          </li>

          <li
            className={`list ${activeList === 1 ? 'active' : ''}`}
            onClick={() => handleListClick(1)}
          >
            <b></b>
            <b></b>
            <Link to="/profile" onClick={() => handleListClick(1)}>
              <span className="navicon">
                <img style={{ width: '40px' }} src={profileicon} alt="Profile" />
              </span>
              <span className="title">Profile</span>
            </Link>
          </li>

          <li
            className={`list ${activeList === 2 ? 'active' : ''}`}
            onClick={() => handleListClick(2)}
          >
            <b></b>
            <b></b>
            <Link to="/settings" onClick={() => handleListClick(2)}>
              <span className="navicon">
                <img style={{ width: '40px' }} src={settingsicon} alt="Settings" />
              </span>
              <span className="title">Settings</span>
            </Link>
          </li>

          <li
            className={`list ${activeList === 3 ? 'active' : ''}`}
            onClick={() => handleListClick(3)}
          >
            <b></b>
            <b></b>
            <Link to="/create" onClick={() => handleListClick(3)}>
              <span className="navicon">
                <img style={{ width: '40px' }} src={createicon} alt="Create" />
              </span>
              <span className="title">Create</span>
            </Link>
          </li>

          <li
            className={`list ${activeList === 4 ? 'active' : ''}`}
            onClick={() => handleListClick(4)}
          >
            <b></b>
            <b></b>
            <Link to="/message" onClick={() => handleListClick(4)}>
              <span className="navicon">
                <img style={{ width: '40px' }} src={chaticon} alt="Chat" />
              </span>
              <span className="title">Message</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
