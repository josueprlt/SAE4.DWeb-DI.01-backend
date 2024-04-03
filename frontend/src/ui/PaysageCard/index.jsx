import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "../../components/icons";

export default function PaysageCard({ movies }) {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (containerRef.current) {
        setScrollPosition(containerRef.current.scrollLeft);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft - 800,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: containerRef.current.scrollLeft + 800,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      {scrollPosition > 0 && (
        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute left-28 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={scrollLeft}
        >
          <ArrowLeft className="fill-colorWhite w-14" />
        </button>
      )}

      {scrollPosition < containerRef.current?.scrollWidth - containerRef.current?.clientWidth && (
        <button
          className="bg-colorBgBtnCate hover:bg-colorBorderBlue absolute right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-opacity-50 p-2 transition-colors"
          onClick={scrollRight}
        >
          <ArrowRight className="fill-colorWhite w-14" />
        </button>
      )}

      <section
        ref={containerRef}
        className="m-24 mr-0 px-12 flex flex-nowrap items-center gap-2 h-96 overflow-x-auto"
      >
        {movies.map((movie) => (
          <figure
            key={movie.id}
            className="group/card h-44 w-80 min-w-80 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125"
            onClick={() => window.location.href = `http://localhost:8090/film/${movie.id}`}
          >
            <section className="flex h-44 w-80 items-center justify-center overflow-hidden">
              <img
                className="w-full h-full duration-300 ease-in-out group-hover/card:scale-105 object-cover"
                src={movie.img}
                alt="Film"
              />
            </section>
            <figcaption className="px-4 py-3 text-colorWhite">
              <h3>{movie.name}</h3>
              <p>{movie.description.substring(0, 50)}...</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </div>
  );
}