import React from 'react';
import './Message.css';

const Message= () => {
  return (
    <div className="message-page">
      <header className="message-header">
        <h1>Messages</h1>
        <button className="new-message-btn">New Message</button>
      </header>
      <div className="message-list">
        <div className="message">
          <div className="message-avatar">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </div>
          <div className="message-content">
            <h2>Maddy</h2>
            <p>Hello! How are you?</p>
            <span className="message-time">2 minutes ago</span>
          </div>
        </div>
        <div className="message">
          <div className="message-avatar">
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </div>
          <div className="message-content">
            <h2>Das</h2>
            <p>Don’t forget our meeting tomorrow!</p>
            <span className="message-time">1 hour ago</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
