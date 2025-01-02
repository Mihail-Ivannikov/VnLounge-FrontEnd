import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Novel from '../components/Novel/Novel';
import Sidebar from '../components/Sidebar/Sidebar';
import './NovelPage.css';

interface Novel {
  id: number;
  image_url: string; // Updated to match API property
  torrent_url: string; // Updated to match API property
  title: string;
  date: string;
  description: string;
  rating: number;
  genre: string;
  type: string;
  duration: string;
  author: string;
}

const NovelPage: React.FC = () => {
  const { name: id } = useParams<{ name: string }>();
  const [novel, setNovel] = useState<Novel | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNovel = async () => {
      try {
        const response = await fetch(`/visual-novels/${id}`);

        if (!response.ok) {
          throw new Error('Novel not found');
        }
        const data = await response.json();
        setNovel(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unexpected error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNovel();
    }
  }, [id]);

  if (loading) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>Loading...</h1>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>{error}</h1>
        </div>
        <Footer />
      </>
    );
  }

  if (!novel) {
    return (
      <>
        <Header />
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
          <h1>Novel Not Found</h1>
        </div>
        <Footer />
      </>
    );
  }

  const leftSidebarData = [
    {
      title: 'Genres',
      items: [
        'Action',
        'Romance',
        'Fantasy',
        'Mystery',
        'Horror',
        'Sci-Fi',
        'Slice of Life',
        'Drama',
        'Comedy',
        'Thriller',
        'Historical',
      ],
    },
    {
      title: 'Categories',
      items: [
        'Kinetic Novels',
        'Branching Novels',
        'Dating Simulation',
        'Mystery/Detective Novels',
        'Otome Games',
        "BL (Boys' Love)",
        "GL (Girls' Love)",
        'Eroge (Adult Visual Novels)',
        'Adventure Visual Novels',
        'Horror Visual Novels',
        'Slice-of-Life Visual Novels',
        'Fantasy Visual Novels',
        'Comedy Visual Novels',
      ],
    },
  ];

  const rightSidebarData = [
    {
      title: 'Top Rated',
      items: [
        'Visual Novel A',
        'Visual Novel B',
        'Visual Novel C',
        'Visual Novel D',
        'Visual Novel E',
      ],
    },
    {
      title: 'Newest Releases',
      items: [
        'New Release 1',
        'New Release 2',
        'New Release 3',
        'New Release 4',
      ],
    },
    {
      title: 'Most Popular',
      items: ['Popular VN 1', 'Popular VN 2', 'Popular VN 3', 'Popular VN 4'],
    },
    {
      title: 'Recommendations',
      items: [
        'Recommended VN 1',
        'Recommended VN 2',
        'Recommended VN 3',
        'Recommended VN 4',
      ],
    },
  ];

  const serverPath = 'http://localhost:8000';

  return (
    <>
      <Header />
      <div className='novel-page-content'>
        <Sidebar titles={leftSidebarData} />

        <Novel
          imagePath={serverPath + novel.image_url} // Updated property usage
          title={novel.title}
          date={novel.date}
          description={novel.description}
          rating={novel.rating}
          genre={novel.genre}
          type={novel.type}
          duration={novel.duration}
          author={novel.author}
          downloadLink={serverPath + novel.torrent_url} // Updated property usage
        />
        <Sidebar titles={rightSidebarData} />
      </div>

      <Footer />
    </>
  );
};

export default NovelPage;
