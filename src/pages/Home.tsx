import Header from '../components/Header/Header';
import React from 'react';

import Sidebar from '../components/Sidebar/Sidebar';
import BannerSlider from '../components/BannerSlider/BannerSlider';
import Slider from '../components/Slider/Slider';
import './Home.css';
import NovelsGrid from '../components/NovelsGrid/NovelsGrid';
import Card from '../components/Card/Card';
import NewsList from '../components/NewsList/NewsList';
import Catalog from '../components/Catalog/Catalog';
import Footer from '../components/Footer/Footer';
import '../stubData/data';

function Home() {
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

    {
      title: 'Tags',
      items: [
        'Completed',
        'Ongoing',
        'English',
        'Japanese',
        'Voice Acting',
        'Multiple Endings',
        'Free to Play',
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

  const bannerData = [
    {
      name: 'Angel Beats',
      image1:
        '/src/assets/images/RecommendedBanner/AngelBeats/AngelBeats-1.png',
      image2:
        '/src/assets/images/RecommendedBanner/AngelBeats/AngelBeats-2.png',
      image3:
        '/src/assets/images/RecommendedBanner/AngelBeats/AngelBeats-3.png',
      description:
        'Angel Beats! is set in the environment of a high school in the afterlife, a type of limbo for people who have experienced trauma or hardships in life and must overcome them before passing on and being reincarnated. The story follows Yuzuru Otonashi, a boy with amnesia who ends up in the afterlife.',
    },
    {
      name: 'Steins;Gate',
      image1:
        '/src/assets/images/RecommendedBanner/SteinsGate/StainsGate-1.png',
      image2:
        '/src/assets/images/RecommendedBanner/SteinsGate/SteinsGate-2.png',
      image3:
        '/src/assets/images/RecommendedBanner/SteinsGate/SteinsGate-3.png',
      description:
        'Angel Beats! is set in the environment of a high school in the afterlife, a type of limbo for people who have experienced trauma or hardships in life and must overcome them before passing on and being reincarnated. The story follows Yuzuru Otonashi, a boy with amnesia who ends up in the afterlife.',
    },
    {
      name: 'Fate',
      image1: '/src/assets/images/RecommendedBanner/Fate/Fate-1.png',
      image2: '/src/assets/images/RecommendedBanner/Fate/Fate-2.jpg',
      image3: '/src/assets/images/RecommendedBanner/Fate/Fate-3.jpg',
      description:
        'Angel Beats! is set in the environment of a high school in the afterlife, a type of limbo for people who have experienced trauma or hardships in life and must overcome them before passing on and being reincarnated. The story follows Yuzuru Otonashi, a boy with amnesia who ends up in the afterlife.',
    },
  ];

  const genresSliderData = [
    {
      title: 'Action',
      imgPath: '/src/assets/images/Genres/Action.png',
    },
    {
      title: 'Romance',
      imgPath: '/src/assets/images/Genres/Romance.png',
    },
    {
      title: 'Sci-Fi',
      imgPath: '/src/assets/images/Genres/Sci-Fi.png',
    },
    {
      title: 'Fantasy',
      imgPath: '/src/assets/images/Genres/Fantasy.png',
    },
    {
      title: 'Slice of Life',
      imgPath: '/src/assets/images/Genres/SliceOfLIfe.png',
    },
    {
      title: 'Comedy',
      imgPath: '/src/assets/images/Genres/Comedy.png',
    },
    {
      title: 'Historical',
      imgPath: '/src/assets/images/Genres/Historical.png',
    },
    {
      title: 'Thriller',
      imgPath: '/src/assets/images/Genres/Thriller.png',
    },
    {
      title: 'Horror',
      imgPath: '/src/assets/images/Genres/Horror.png',
    },
  ];

  const animes = [
    {
      id: '1',
      name: 'Steins Gate',
      imagePath: '/src/assets/images/TopRated/Steins.jpg',
    },
    {
      id: '2',
      name: 'Clannad',
      imagePath: '/src/assets/images/TopRated/Clannad.jpg',
    },
    {
      id: '3',
      name: 'Dragonronpa',
      imagePath: '/src/assets/images/TopRated/Dragonronpa.png',
    },
    {
      id: '4',
      name: 'The House in Fata Morgana',
      imagePath: '/src/assets/images/TopRated/House.jpg',
    },
    {
      id: '5',
      name: 'Fate',
      imagePath: '/src/assets/images/TopRated/Fate.jpg',
    },
    {
      id: '6',
      name: 'When They Cry',
      imagePath: '/src/assets/images/TopRated/Higurashi.jpg',
    },
  ];

  const newsData = [
    {
      imagePath: '/src/assets/images/News/news1.jpg', // Placeholder for image path
      date: '2024-11-30',
      text: 'Spike Chunsoft has officially confirmed the release of the fan-favorite visual novel "Anonymous;Code" on Steam, set for 2024. Fans of the Science Adventure series can look forward to an intricate, hacker-themed narrative.',
      title: 'Anonymous;Code Announced for Steam in 2024',
    },
    {
      imagePath: '/src/assets/images/News/news2.jpg', // Placeholder for image path
      date: '2024-11-28',
      text: 'The classic visual novel "Steins;Gate" celebrates its 15th anniversary with a new collector’s edition release, including exclusive art and behind-the-scenes content, delighting long-time fans of the series.',
      title: 'Steins;Gate 15th Anniversary Edition Released',
    },
    {
      imagePath: '/src/assets/images/News/news3.jpg', // Placeholder for image path
      date: '2024-11-25',
      text: 'Frontwing has revealed a new project titled "Ginka," an original fantasy visual novel. Set to release in Spring 2024, it promises an emotional tale with beautifully crafted visuals and a compelling story.',
      title: 'Frontwing Announces New Visual Novel "Ginka"',
    },
    {
      imagePath: '/src/assets/images/News/news4.jpg', // Placeholder for image path
      date: '2024-11-22',
      text: 'The critically acclaimed visual novel "The House in Fata Morgana" has been added to Xbox Game Pass, making it more accessible to a wider audience. Known for its gothic atmosphere, it is one of the highest-rated visual novels.',
      title: 'The House in Fata Morgana Joins Xbox Game Pass',
    },
  ];

  return (
    <>
      <Header />
      <div className='main'>
        <Sidebar titles={leftSidebarData} />
        <div className='content'>
          <BannerSlider props={bannerData} />
          <NewsList newsItems={newsData} />
          <Slider title='Genres' items={genresSliderData} />
          <NovelsGrid
            data={animes} // Pass your data here
            CardComponent={Card} // Pass the custom card component
            gridTemplateColumns='repeat(4, 1fr)' // Customize the grid layout
            gap='15px' // Customize the gap between items
          />
          <Catalog />
        </div>
        <Sidebar titles={rightSidebarData} />
      </div>
      <Footer />
    </>
  );
}

export default Home;
