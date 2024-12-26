import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './LoginForm.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log('Google login successful:', credentialResponse);
    alert('Google login successful!');
  };

  const handleGoogleFailure = () => {
    setError('Google login failed. Please try again.');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    alert('Login successful!');
  };

  return (
    <GoogleOAuthProvider clientId="your-google-client-id">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>

        <label className="form-label">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        <label className="form-label">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-input"
            required
          />
        </label>
        <br />

        {error && <p className="error-message">{error}</p>}

        <button type="submit" className="submit-button">
          Login
        </button>

        <div className="google-login">
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            useOneTap
          />
        </div>
      </form>
    </GoogleOAuthProvider>
  );
};

export default LoginForm;
