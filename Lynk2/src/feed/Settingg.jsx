import React, { useState } from 'react';
import './Settingg.css';

const Settingg = () => {
  const [activeTab, setActiveTab] = useState('account');

  const renderContent = () => {
    switch (activeTab) {
      case 'account':
        return (
          <div className="tab-content">
            <h2>Account Settings</h2>
            <div className="setting-item">
              <input type="email" placeholder="Enter your new email" />
            </div>
            <div className="setting-item">
              <input type="password" placeholder="Enter new password" />
            </div>
            <button>Save Changes</button>
          </div>
        );
      case 'privacy':
        return (
          <div className="tab-content">
            <h2>Privacy Settings</h2>
            <div className="setting-item">
              <select>
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>
            <button>Save Changes</button>
          </div>
        );
        case 'notifications':
            return (
              <div className="tab-content">
                <h2>Notification Settings</h2>
                <div className="setting-item">
                  <input type="checkbox" id="email-notifications" />
                  <span className="checkbox-label">Email Notifications</span>
                </div>
                <div className="setting-item">
                  <input type="checkbox" id="push-notifications" />
                  <span className="checkbox-label">Push Notifications</span>
                </div>
                <button>Save Changes</button>
              </div>
            );
          
      case 'appearance':
        return (
          <div className="tab-content">
            <h2>Appearance Settings</h2>
            <div className="setting-item">
              <select>
                <option>Light</option>
                <option>Dark</option>
              </select>
            </div>
            <button>Save Changes</button>
          </div>
        );
        case 'security':
            return (
              <div className="tab-content">
                <h2>Security Settings</h2>
                <div className="setting-item">
                  <input type="checkbox" id="two-factor-auth" />
                  <span className="checkbox-label">Enable Two-Factor Authentication</span>
                </div>
                <button>Save Changes</button>
              </div>
            );
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <div className="settings-sidebar">
        <ul>
          <li className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>
            Account
          </li>
          <li className={activeTab === 'privacy' ? 'active' : ''} onClick={() => setActiveTab('privacy')}>
            Privacy
          </li>
          <li className={activeTab === 'notifications' ? 'active' : ''} onClick={() => setActiveTab('notifications')}>
            Notifications
          </li>
          <li className={activeTab === 'appearance' ? 'active' : ''} onClick={() => setActiveTab('appearance')}>
            Appearance
          </li>
          <li className={activeTab === 'security' ? 'active' : ''} onClick={() => setActiveTab('security')}>
            Security
          </li>
        </ul>
      </div>
      <div className="settings-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default Settingg;
