import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Novel from '../components/Novel/Novel';
import novelsData from '../data/novels.json'; // Assume JSON data is available
import Sidebar from '../components/Sidebar/Sidebar';
import './NovelPage.css';

const NovelPage: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // Get the novel name from URL params

  // Find the novel data by name
  const novel = novelsData.find((n) => n.title === name);
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

  return (
    <>
      <Header />
      <div className="novel-page-content">
        <Sidebar titles={leftSidebarData} />

        <Novel
          imagePath={novel.imagePath}
          title={novel.title}
          date={novel.date}
          description={novel.description}
          rating={novel.rating}
          genre={novel.genre}
          type={novel.type}
          duration={novel.duration}
          author={novel.author}
          downloadLink={novel.downloadLink}
        />
        <Sidebar titles={rightSidebarData} />
      </div>

      <Footer />
    </>
  );
};

export default NovelPage;
