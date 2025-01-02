/* eslint-disable react/prop-types */

import React, { useState, useEffect } from 'react';
import './BannerSlider.css'; // Add custom styles here

type SliderProps = {
  props: {
    name: string;
    image1: string;
    image2: string;
    image3: string;
    description: string;
  }[];
};

function BannerSlider({ props }: SliderProps) {
  const [hideDescription, setHideDescription] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    setHideDescription(true); // Optionally hide description
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [props.length]);

  // Scroll to current item
  useEffect(() => {
    const sliderViewport = document.querySelector('.banner-slider-viewport');
    if (sliderViewport) {
      sliderViewport.scrollTo({
        left: sliderViewport.clientWidth * currentIndex,
        behavior: 'smooth',
      });
    }
  }, [currentIndex]);

  return (
    <div className='banner-slider'>
      <div
        className='banner-slider-viewport'
        onScroll={() => setHideDescription(true)}
      >
        {props.map((item, index) => (
          <div
            key={index}
            className='banner-slider-item'
            onClick={() => setHideDescription((h) => !h)}
          >
            <div className='banner-slider-header'>
              <h2>{item.name}</h2>
            </div>
            <img
              className='banner-slider-big-image'
              src={item.image1}
              alt={`${item.name} Image 1`}
            />
            <img
              className='banner-slider-small-image banner-upper-image'
              src={item.image2}
              alt={`${item.name} Image 2`}
            />
            <img
              className='banner-slider-small-image banner-lower-image'
              src={item.image3}
              alt={`${item.name} Image 3`}
            />

            <div
              className='banner-slider-description'
              style={{ display: `${hideDescription ? 'none' : 'block'}` }}
            >
              <p className='banner-slider-text'>{item.description}</p>
              <a className='banner-slider-button' href={`/${item.name}`}>
                Watch!
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='banner-slider-dots'>
        {props.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default BannerSlider;
