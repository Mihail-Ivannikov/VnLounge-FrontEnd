import React from 'react';
import './Card.css';

interface CardProps {
  name: string;
  imagePath: string;
}

const Card: React.FC<CardProps> = ({ name, imagePath }) => {
  return (
    <div className="card">
      <img src={imagePath} alt={name} className="card-image" />
      <div className="card-content">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Card;
