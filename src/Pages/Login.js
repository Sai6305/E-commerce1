import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './Auth.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    if (email && password && !user) {
      const username = email.split('@')[0];
      login({ name: username, email });
      navigate('/');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="email" placeholder="Email"
          value={email} onChange={e => setEmail(e.target.value)} disabled={user} required />
        <input type="password" placeholder="Password"
          value={password} onChange={e => setPassword(e.target.value)} disabled={user} required />
        <button type="submit" disabled={user}>{user ? 'Logged In' : 'Login'}</button>
      </form>
    </div>
  );
}

export default Login;
