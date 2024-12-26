import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  titles: {
    title: string;
    items: string[];
  }[];
}

const Sidebar: React.FC<SidebarProps> = ({ titles }) => {
  return (
    <div className="sidebar">
      {titles.map((section, index) => (
        <div key={index} className="sidebar-section">
          <h3 className="sidebar-title">{section.title}</h3>
          <ul className="sidebar-list">
            {section.items.map((item, subIndex) => (
              <li key={subIndex} className="sidebar-item">
                | <a href={`/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
