// src/Components/Notification.js (NEW FILE)
import React from 'react';
import './Notification.css'; // Create this CSS file

const Notification = ({ message, type }) => {
  // type can be 'success', 'error', 'info'
  return (
    <div className={`notification ${type}`}>
      {message}
    </div>
  );
};

export default Notification;