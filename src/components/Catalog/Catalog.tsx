import React, { useState, useEffect } from 'react';
import CatalogCard from '../CatalogCard/CatalogCard';
import './Catalog.css';

interface Novel {
  id: number;
  imagePath: string;
  title: string;
  date: string;
  description: string;
  rating: number;
  genre: string;
  type: string;
  duration: number;
  author: string;
}

const Catalog: React.FC = () => {
  const [novels, setNovels] = useState<Novel[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);
  const itemsPerPage = 8;

  // Fetch data from API
  useEffect(() => {
    const fetchNovels = async () => {
      try {
        const response = await fetch('/visual-novels'); // Proxy simplifies the base URL

        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        const serverPath = 'http://localhost:8000';
        const mappedNovels = data.map((novel: any) => ({
          id: novel.id,
          imagePath: serverPath + novel.image_url,
          title: novel.title,
          date: novel.date,
          description: novel.description,
          rating: novel.rating,
          genre: novel.genre,
          type: novel.type,
          duration: novel.duration,
          author: novel.author,
        }));

        setNovels(mappedNovels);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred.');
      }
    };

    fetchNovels();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNovels = novels.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(novels.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!novels.length && !error) {
    return <div className="loading-message">Loading novels...</div>;
  }

  return (
    <div className="catalog-container">
      {currentNovels.map((novel) => (
        <CatalogCard key={novel.id} {...novel} />
      ))}

      <div className="pagination">
        {/* First Page Button */}
        <button
          className="catalog-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          {'<<'}
        </button>

        {/* Previous Button */}
        <button
          className="catalog-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          {'<'}
        </button>

        {/* Page Number Buttons */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`catalog-button ${currentPage === index + 1 ? 'active' : ''}`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          className="catalog-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          {'>'}
        </button>

        {/* Last Page Button */}
        <button
          className="catalog-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          {'>>'}
        </button>
      </div>
    </div>
  );
};

export default Catalog;
