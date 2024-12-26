import React from 'react';
import './Novel.css';

interface NovelProps {
  imagePath: string;
  title: string;
  date: string;
  description: string;
  rating: number;
  genre: string;
  type: string;
  duration: string;
  author: string;
  downloadLink: string; // For the download functionality
}

const Novel: React.FC<NovelProps> = ({
  imagePath,
  title,
  date,
  description,
  rating,
  genre,
  type,
  duration,
  author,
  downloadLink,
}) => {
  console.log(downloadLink);
  return (
    <div className="novel">
      {/* Header Section */}
      <div className="novel-header">
        <img src={imagePath} alt={title} className="novel-image" />

        <div className="novel-text">
          <h1>{title}</h1>
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
      <p className="novel-description">
        <strong>Description:</strong> {description}
      </p>

      {/* Download Button */}
      <div className="novel-download-section">
        <a href={downloadLink} download className="novel-download-button">
          Download Novel
        </a>
      </div>
    </div>
  );
};

export default Novel;
