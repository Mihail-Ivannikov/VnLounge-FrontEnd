import React, { useRef, useEffect } from 'react';
import './Slider.css';

interface Item {
  title: string;
  imgPath: string;
}

interface SliderData {
  title: string;
  items: Item[];
}

const ITEM_WIDTH = 200;
const GAP_WIDTH = 10;
const SCROLL_DURATION = 500;

const Slider: React.FC<SliderData> = ({ title, items }) => {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);

  const smoothScroll = (targetScrollLeft: number) => {
    if (viewportRef.current) {
      const startScrollLeft = viewportRef.current.scrollLeft;
      const distance = targetScrollLeft - startScrollLeft;
      const startTime = performance.now();

      const animateScroll = (time: number) => {
        const timeFraction = (time - startTime) / SCROLL_DURATION;
        if (timeFraction < 1) {
          const scrollValue = startScrollLeft + distance * timeFraction;
          if (viewportRef.current) {
            viewportRef.current.scrollLeft = scrollValue;
          }
          requestAnimationFrame(animateScroll);
        } else {
          if (viewportRef.current) {
            viewportRef.current.scrollLeft = targetScrollLeft;
          }
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const handleNext = () => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth;
      const scrollAmount =
        Math.floor(viewportWidth / (ITEM_WIDTH + GAP_WIDTH)) *
        (ITEM_WIDTH + GAP_WIDTH);
      const targetScrollLeft = viewportRef.current.scrollLeft + scrollAmount;
      smoothScroll(targetScrollLeft);
    }
  };

  const handlePrev = () => {
    if (viewportRef.current) {
      const viewportWidth = viewportRef.current.offsetWidth;
      const scrollAmount =
        Math.floor(viewportWidth / (ITEM_WIDTH + GAP_WIDTH)) *
        (ITEM_WIDTH + GAP_WIDTH);
      const targetScrollLeft = viewportRef.current.scrollLeft - scrollAmount;
      smoothScroll(targetScrollLeft);
    }
  };

  const handleResize = () => {
    if (sliderRef.current && viewportRef.current) {
      const sliderWidth = sliderRef.current.offsetWidth;
      const maxItems = Math.floor(sliderWidth / (ITEM_WIDTH + GAP_WIDTH));
      const adjustedWidth = maxItems * (ITEM_WIDTH + GAP_WIDTH) - GAP_WIDTH;

      viewportRef.current.style.width = `${adjustedWidth}px`;
    }
  };

  useEffect(() => {
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='slider-wrapper'>
      <h2 className='slider-title'>{title}</h2>
      <div className='slider' ref={sliderRef}>
        <div className='slider-viewport' ref={viewportRef}>
          {items.map((item, index) => (
            <div key={index} className='slider-item'>
              <a href={`/${item.title}`}>
                <img
                  className='slider-image'
                  src={item.imgPath}
                  alt={item.title}
                />
                <h2 className='slider-label'>{item.title}</h2>
              </a>
            </div>
          ))}
        </div>
        <button className='slider-button next-button' onClick={handleNext}>
          {'>'}
        </button>
        <button className='slider-button prev-button' onClick={handlePrev}>
          {'<'}
        </button>
      </div>
    </div>
  );
};

export default Slider;
