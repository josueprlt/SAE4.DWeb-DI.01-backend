import React, { useState, useEffect } from "react";
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
    <>
      <div className="relative h-sizeSlider overflow-hidden">
        <div className="flex">
          {images.map((image, index) => (
            <div
              key={index}
              className={`slide absolute left-0 top-0 h-full w-full transition-opacity duration-500 ${
                index === currentIndex || index === prevIndex
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="h-full w-screen object-cover"
              />

              <section className="from-colorBgBody absolute bottom-0 w-full bg-gradient-to-t">
                <figure className="flex flex-col text-center items-center mb-28 text-colorWhite">
                  <figcaption>
                    <h2 className="text-3xl font-bold">Slide numéro {index}</h2>
                    <p className="font-semibold">description</p>
                  </figcaption>

                  <button className="bg-colorBgBtn hover:bg-colorBgBtnHover flex items-center justify-center gap-3 rounded-full px-5 py-2">
                    <Play className="fill-colorWhite w-3" />
                    <span className="text-lg font-semibold">Visionner</span>
                  </button>
                </figure>
              </section>
            </div>
          ))}
        </div>

        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={goToPrevSlide}
        >
          <ArrowLeft className="fill-colorWhite w-14" />
        </button>
        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={goToNextSlide}
        >
          <ArrowRight className="fill-colorWhite w-14" />
        </button>
      </div>
    </>
  );
}
