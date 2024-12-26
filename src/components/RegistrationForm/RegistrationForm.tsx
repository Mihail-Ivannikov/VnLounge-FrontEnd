import React, { useState } from 'react';
import HCaptcha from '@hcaptcha/react-hcaptcha'; // Correct default import
import './RegistrationForm.css'; // Importing external CSS file for styles

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [error, setError] = useState('');

  const handleCaptchaVerify = (token: string) => {
    setCaptchaToken(token);
    setError('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!captchaToken) {
      setError('Please complete the CAPTCHA verification.');
      return;
    }

    // Simulate successful registration process
    alert('Registration successful!');

    // Reset form and CAPTCHA
    setUsername('');
    setEmail('');
    setPassword('');
    setCaptchaToken(null);
  };

  return (
    <form onSubmit={handleSubmit} className="registration-form">
      <h2>Register</h2>

      <label className="form-label">
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
          required
        />
      </label>
      <br />

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

      <HCaptcha
        sitekey="your-hcaptcha-site-key"
        onVerify={handleCaptchaVerify}
        className="captcha"
      />

      {error && <p className="error-message">{error}</p>}

      <button type="submit" className="submit-button">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
