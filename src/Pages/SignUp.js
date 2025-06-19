import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import './Auth.css';

function SignUp() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSubmit = e => {
    e.preventDefault();
    if (!user) {
      alert(`Signed up as ${form.name}`);
      navigate('/login');
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full Name" 
          value={form.name} onChange={handleChange} disabled={user} required />
        <input name="email" type="email" placeholder="Email" 
          value={form.email} onChange={handleChange} disabled={user} required />
        <input name="password" type="password" placeholder="Password" 
          value={form.password} onChange={handleChange} disabled={user} required />
        <button type="submit" disabled={user}>{user ? 'Signed Up' : 'Sign Up'}</button>
      </form>
    </div>
  );
}

export default SignUp;
