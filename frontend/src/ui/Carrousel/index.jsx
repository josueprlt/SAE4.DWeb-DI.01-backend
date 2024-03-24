import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from "../../components/icons";

export default function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);

  const goToNextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  const goToPrevSlide = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setPrevIndex(currentIndex);
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className='h-sizeSlider overflow-hidden relative'>
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex || index === prevIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <section className='absolute bottom-32 text-colorWhite ml-52'>
                  <h2 className='text-3xl'>test</h2>
                  <p>description</p>
                  <p>categories</p>
                  <button>Visionner</button>
            </section>
            <img src={image} alt={`Slide ${index}`} className="w-screen h-full object-cover" />
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-colorBgBtnCate bg-opacity-50 p-2 rounded-full hover:bg-colorBorderBlue transition-colors z-10"
        onClick={goToPrevSlide}
      >
        <ArrowLeft className="w-14 fill-colorWhite" />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-colorBgBtnCate bg-opacity-50 p-2 rounded-full hover:bg-colorBorderBlue transition-colors z-10"
        onClick={goToNextSlide}
      >
        <ArrowRight className="w-14 fill-colorWhite" />
      </button>
    </div>
  );
};
