import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
//import SearchBar from '../SearchBar/SearchBar';
import HeaderMenu from '../HeaderMenu/HeaderMenu';
import SearchBar from '../SearchBar/SearchBar';

const Header: React.FC = () => {
  const upperMenuItems = ['Home', 'News', 'Visual Novels', 'Discussion'];
  const lowerMenuItems = [
    'New',
    'Recommended',
    'Popular',
    'Categories',
    'Genres',
  ];

  return (
    <header>
      {/* Upper Header */}
      <div className="upper-header">
        <Logo />
        <div className="upper-header-dark-part"></div>

        <HeaderMenu items={upperMenuItems} id="upper-menu" />
        <div className="auth-buttons">
          <a className="register-button auth-button" href="/Register">
            Register
          </a>
          <a className="login-button auth-button" href="/LogIn">
            Log In
          </a>
        </div>
      </div>

      {/* Lower Header */}
      <div className="lower-header">
        {/*<SearchBar />*/}
        <SearchBar />
        <HeaderMenu items={lowerMenuItems} id="lower-menu" />
      </div>
    </header>
  );
};

export default Header;
