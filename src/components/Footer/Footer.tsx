import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        {/* Logo and Site Info */}
        <div className='footer-logo'>
          <h2>VNLounge</h2>
          <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Community Section */}
        <div className='footer-community'>
          <h4>Join Our Community</h4>
          <p>
            Discuss your favorite novels, share reviews, and connect with
            others!
          </p>
        </div>

        {/* Social Media Links */}
        <div className='footer-social'>
          <h4>Follow Us</h4>
          <div className='social-links'>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-twitter'></i>
            </a>
            <a
              href='https://discord.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-discord'></i>
            </a>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
