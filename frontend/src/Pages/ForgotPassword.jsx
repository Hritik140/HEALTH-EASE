import React, { useState } from 'react';
import axios from 'axios';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/forgot-password', { email });
      setMsg('✅ Check your email for the reset link.');
    } catch (err) {
      setMsg('❌ Error: ' + (err.response?.data || 'Something went wrong.'));
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      paddingTop: '60px',
      backgroundColor: '#f0f0f0',
    }}>
      <h2 style={{ marginBottom: '20px' }}>Forgot Password</h2>
      <form onSubmit={handleSubmit} style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{
            padding: '10px',
            width: '250px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <button type="submit" style={{
          padding: '10px 20px',
          backgroundColor: '#007BFF',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}>
          Send Link
        </button>
      </form>
      <p style={{ marginTop: '20px', color: msg.startsWith('✅') ? 'green' : 'red' }}>{msg}</p>
    </div>
  );
}

export default ForgotPassword;
