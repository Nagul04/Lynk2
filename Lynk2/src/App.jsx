import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Feed from './feed/Feed';
import Profile from './feed/Profile';
import Settingg from './feed/Settingg';
import Message from './feed/Message';

const ExternalApp = React.lazy(() => import('D:/Lynk2/create/src/App'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="feed" element={<Feed />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settingg />} />
        <Route path="create" element={
          <Suspense fallback={<div>Loading...</div>}>
            <ExternalApp />
          </Suspense>
        } />
        <Route path='message' element={<Message/>}/>
      </Routes>
    </Router>
  );
};

export default App;
