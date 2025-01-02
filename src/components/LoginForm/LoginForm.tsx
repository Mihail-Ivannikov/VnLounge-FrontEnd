import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GoogleOAuthProvider,
  GoogleLogin,
  CredentialResponse,
} from '@react-oauth/google';
import axios, { AxiosError } from 'axios';
import './LoginForm.css';

interface ErrorResponse {
  message: string;
}

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleGoogleSuccess = async (
    credentialResponse: CredentialResponse
  ) => {
    try {
      const response = await axios.post('/auth/google/callback', {
        token: credentialResponse.credential,
      });

      if (response.status === 200 || response.status === 201) {
        setError('');
        setSuccess('Google login successful!');
        navigate('/');
      } else {
        setError('Google login failed. Please try again.');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Google login error:', axiosError.response || error);
      setError(
        axiosError.response && axiosError.response.data
          ? (axiosError.response.data as ErrorResponse).message
          : 'Google login failed. Please try again.'
      );
    }
  };

  const handleGoogleFailure = () => {
    setError('Google login failed. Please try again.');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    try {
      const response = await axios.post('/auth/login', {
        email,
        password,
      });

      if (response.status === 200 || response.status === 201) {
        setError('');
        setSuccess('Login successful!');
        navigate('/');
      } else {
        setError('Login failed. Please try again.');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      console.error('Login error:', axiosError.response || error);
      setError(
        axiosError.response && axiosError.response.data
          ? (axiosError.response.data as ErrorResponse).message
          : 'Login failed. Please try again.'
      );
    }
  };

  return (
    <GoogleOAuthProvider clientId='678052677214-rj9e6clcn67rmboadknqag04t6ao52t7.apps.googleusercontent.com'>
      <form onSubmit={handleSubmit} className='login-form'>
        <h2>Login</h2>

        <label className='form-label'>
          Email:
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='form-input'
            required
          />
        </label>
        <br />

        <label className='form-label'>
          Password:
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='form-input'
            required
          />
        </label>
        <br />

        {error && <p className='error-message'>{error}</p>}
        {success && <p className='success-message'>{success}</p>}

        <button type='submit' className='submit-button'>
          Login
        </button>

        <div className='google-login'>
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
