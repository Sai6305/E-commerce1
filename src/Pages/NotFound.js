// src/Pages/NotFound.js (NEW FILE)
import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'; // Create this CSS file

function NotFound() {
  return (
    <div className="not-found-page">
      <h1>404</h1>
      <p>Page Not Found</p>
      <p>The page you are looking for does not exist.</p>
      <Link to="/" className="home-link-btn">Go to Home</Link>
    </div>
  );
}

export default NotFound;