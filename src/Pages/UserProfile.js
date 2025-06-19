// src/Pages/UserProfile.js
import React, { useContext, useState, useEffect } from 'react'; // Import useEffect
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

function UserProfile() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  // Initialize state based on 'user' prop
  const [userName, setUserName] = useState(''); // Initialize with empty string
  const [userEmail, setUserEmail] = useState(''); // Initialize with empty string
  const [isEditing, setIsEditing] = useState(false);

  // Use useEffect to update local state when 'user' from context changes
  useEffect(() => {
    if (user) {
      setUserName(user.name || (user.email ? user.email.split('@')[0] : '')); // Handle cases where email might be missing
      setUserEmail(user.email || '');
    } else {
      // If user becomes null, redirect.
      // Place redirect logic in useEffect to avoid issues during initial render or updates
      navigate('/login');
    }
  }, [user, navigate]); // Depend on 'user' and 'navigate'

  // If user is null, the useEffect will handle the redirect.
  // We return null here to prevent rendering the rest of the component if no user is present.
  if (!user) {
    return null;
  }

  const handleSaveProfile = (e) => {
    e.preventDefault();
    console.log('Saving profile:', { userName, userEmail });
    setIsEditing(false);
    alert('Profile updated! (Demo only)'); // In a real app, integrate with backend and AuthContext's updateUser
  };

  const handleLogout = () => {
    logout();
    // navigate('/') is handled by the useEffect above,
    // which will detect user becoming null and redirect.
    // You can keep navigate('/') here if you want an immediate redirect regardless of context update
    // but the useEffect approach is often more robust for state-driven redirects.
    // For now, let's rely on useEffect to handle the redirect when user becomes null.
    // navigate('/'); // <-- Uncomment this if you want immediate redirect regardless of user state
  };

  return (
    <div className="user-profile-page">
      <h2>My Account</h2>
      <div className="profile-container">
        <div className="profile-details">
          <h3>Personal Information</h3>
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="profile-form">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-actions">
                <button type="submit" className="save-btn">Save Changes</button>
                <button type="button" onClick={() => setIsEditing(false)} className="cancel-btn">Cancel</button>
              </div>
            </form>
          ) : (
            <>
              <p><strong>Name:</strong> {userName}</p>
              <p><strong>Email:</strong> {userEmail}</p>
              <button onClick={() => setIsEditing(true)} className="edit-btn">Edit Profile</button>
            </>
          )}
        </div>

        <div className="order-history-section">
          <h3>Order History (Coming Soon)</h3>
          <p>Your past orders will appear here.</p>
        </div>

        <button onClick={handleLogout} className="logout-btn">Logout</button>
      </div>
    </div>
  );
}

export default UserProfile;