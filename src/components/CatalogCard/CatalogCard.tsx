import React from 'react';
import './CatalogCard.css';

interface CatalogCardProps {
  imagePath: string;
  title: string;
  date: string;
  description: string;
  rating: number;
  genre: string;
  type: string;
  duration: string;
  author: string;
}

const CatalogCard: React.FC<CatalogCardProps> = ({
  imagePath,
  title,
  date,
  description,
  rating,
  genre,
  type,
  duration,
  author,
}) => {
  return (
    <div className="catalog-card">
      {/* Image and Text Section */}
      <div className="catalog-header">
        <img src={imagePath} alt={title} className="catalog-image" />

        <div className="catalog-text">
          <h4>{title}</h4>
          <p>
            <strong>Date:</strong> {date}
          </p>
          <p>
            <strong>Author:</strong> {author}
          </p>
          <p>
            <strong>Genre:</strong> {genre}
          </p>
          <p>
            <strong>Type:</strong> {type}
          </p>
          <p>
            <strong>Duration:</strong> {duration}
          </p>
          <p>
            <strong>Rating:</strong> {rating}
          </p>
        </div>
      </div>

      {/* Description Section */}
      <p>
        <strong>Description:</strong> {description}
      </p>

      {/* Tags and Read Button Section */}
      <div className="tags-and-button">
        <div className="tags">
          <span>
            <strong></strong> {genre}
          </span>
          <span>
            <strong>/</strong> {author}
          </span>
          <span>
            <strong>/</strong> {type}
          </span>
        </div>
        <a href={`/novels/${title}`} className="read-button">
          Read
        </a>
      </div>
    </div>
  );
};

export default CatalogCard;
