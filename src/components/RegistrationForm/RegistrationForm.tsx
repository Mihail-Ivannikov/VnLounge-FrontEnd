import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import axios from 'axios';
import './RegistrationForm.css';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setError('Please complete the CAPTCHA verification.');
      return;
    }

    try {
      const response = await axios.post('/users/register', {
        email,
        username,
        password,
      });

      if (response.status === 201) {
        setSuccess('Registration successful!');
        setError('');
        setUsername('');
        setEmail('');
        setPassword('');
        setCaptchaToken(null);
      } else {
        setError('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='registration-form'>
      <h2>Register</h2>

      <label className='form-label'>
        Username:
        <input
          type='text'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='form-input'
          required
        />
      </label>
      <br />

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

      <div className='captcha'>
        <HCaptcha
          sitekey='d87838da-e8c4-4b44-839a-ae6ad2847008'
          onVerify={handleCaptchaVerify}
        />
      </div>

      {error && <p className='error-message'>{error}</p>}
      {success && <p className='success-message'>{success}</p>}

      <button type='submit' className='submit-button'>
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
