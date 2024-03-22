import React, { useState, useEffect } from 'react';

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="relative h-20">
      <div className="overflow-hidden relative">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={index === currentIndex ? 'slide active' : 'hidden slide'}
            >
              <img src={image} alt={`Slide ${index}`} className="h-auto" />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={goToPrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
        onClick={goToNextSlide}
      >
        &#10095;
      </button>
    </div>
  );
};