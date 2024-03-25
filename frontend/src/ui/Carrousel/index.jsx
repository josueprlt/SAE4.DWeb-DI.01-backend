import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Play } from "../../components/icons";

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
            className={`slide absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentIndex || index === prevIndex ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <img src={image} alt={`Slide ${index}`} className="w-screen h-full object-cover" />
            
            <section className='absolute bottom-0 w-full bg-gradient-to-t from-colorBgBody'>
              <figure className='text-colorWhite ml-52 mb-28'>
                <figcaption>
                  <h2 className='text-3xl'>Slide numéro {index}</h2>
                  <p>description</p>
                </figcaption>

                <button className='flex justify-center items-center gap-3 px-5 py-2 rounded-full bg-colorBgBtn hover:bg-colorBgBtnHover'>
                  <Play className="w-3 fill-colorWhite"/>
                  <span className='font-semibold text-lg'>Visionner</span>
                </button>
              </figure>
            </section>
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
