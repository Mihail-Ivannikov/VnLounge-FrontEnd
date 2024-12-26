import React from 'react';
import './NewsList.css';

interface NewsItemProps {
  imagePath: string;
  date: string;
  text: string;
  title: string;
}

interface NewsListProps {
  newsItems: NewsItemProps[];
}

const NewsList: React.FC<NewsListProps> = ({ newsItems }) => {
  return (
    <div className="news-wrapper" id="News">
      <h2 className="news-block-title">News</h2>
      <div className="news-container">
        {newsItems.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.imagePath} alt={news.title} className="news-image" />
            <div className="news-content">
              <h2 className="news-title">{news.title}</h2>
              <p className="news-date">{news.date}</p>
              <p className="news-text">{news.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsList;
