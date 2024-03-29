import React, { useState, useEffect, useRef } from "react";
import { fetchAllMovies } from "../../routes/root";

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies()
      .then((data) => setMovies(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error),
      );
  }, []);

  return (
    <section className="m-24 mr-0 flex w-full flex-wrap gap-2 pb-24">
      {movies.map((movie) => (
        <figure
          key={movie.id}
          className="group/card h-36 w-60 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125"
        >
          <section className="flex h-36 w-60 items-center justify-center overflow-hidden">
            <img
              className="duration-300 ease-in-out group-hover/card:scale-105"
              src={movie.img}
              alt="Film"
            />
          </section>
          <figcaption className="px-4 py-3 text-colorWhite">
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            {movie.category.map((cat) => (
              <li key={cat.id}>
                {cat.id}: {cat.name}
              </li>
            ))}
          </figcaption>
        </figure>
      ))}
    </section>
  );
}
