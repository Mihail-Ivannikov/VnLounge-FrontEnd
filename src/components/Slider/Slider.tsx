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

const ITEM_WIDTH = 200; // Width of each slider-item in px
const GAP_WIDTH = 10; // Gap between items in px
const SCROLL_DURATION = 500; // Duration of the scroll animation in milliseconds

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
          viewportRef.current.scrollLeft = scrollValue;
          requestAnimationFrame(animateScroll);
        } else {
          viewportRef.current.scrollLeft = targetScrollLeft;
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
      const sliderWidth = sliderRef.current.offsetWidth; // Reference the slider width
      const maxItems = Math.floor(sliderWidth / (ITEM_WIDTH + GAP_WIDTH)); // Calculate max items fitting in the slider
      const adjustedWidth = maxItems * (ITEM_WIDTH + GAP_WIDTH) - GAP_WIDTH; // Compute viewport width

      viewportRef.current.style.width = `${adjustedWidth}px`; // Set the calculated width
    }
  };

  useEffect(() => {
    handleResize(); // Initial calculation

    window.addEventListener('resize', handleResize); // Recalculate on window resize
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
