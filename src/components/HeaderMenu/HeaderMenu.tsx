import React from 'react';
import './HederMenu.css'; // Reuse Header styles or add custom ones

interface HeaderMenuProps {
  items: string[];
  id: string;
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ items, id }) => {
  return (
    <nav className="menu" id={id}>
      {items.map((item, index) => (
        <a
          href={`/${item === 'Home' ? '' : item}`}
          key={index}
          className="menu-item"
        >
          {item.toUpperCase()}
        </a>
      ))}
    </nav>
  );
};

export default HeaderMenu;
