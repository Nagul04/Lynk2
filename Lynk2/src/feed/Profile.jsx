import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className='prof'> 
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-picture">
          <img src="profile-pic-url" alt="Profile" />
        </div>
        <div className="profile-info">
          <h1 className="username">@username</h1>
          <p className="bio">This is a short bio about the user.</p>
        </div>
        <button className="edit-profile-btn">Edit Profile</button>
      </div>
      <div className="profile-stats">
        <div className="stat">
          <span className="stat-number">150</span>
          <span className="stat-label">Posts</span>
        </div>
        <div className="stat">
          <span className="stat-number">1.2k</span>
          <span className="stat-label">Followers</span>
        </div>
        <div className="stat">
          <span className="stat-number">200</span>
          <span className="stat-label">Following</span>
        </div>
      </div>
      <div className="profile-content">
        <h3 className="content-title">Posts</h3>
        <div className="posts-grid">
          <div className="post-item">Post 1</div>
          <div className="post-item">Post 2</div>
          <div className="post-item">Post 3</div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Profile;
