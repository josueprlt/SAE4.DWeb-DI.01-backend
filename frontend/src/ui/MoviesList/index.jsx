import React, { useState, useEffect, useRef } from 'react';

async function fetchAllMovies() {
  let response = await fetch("http://localhost:8080/api/movies");
  let data = await response.json();
  return data;
}

export default function MoviesList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies()
      .then(data => setMovies(data))
      .catch(error => console.error('Erreur lors de la récupération des films:', error));
  }, []);

  return (
    <section className='w-full flex flex-wrap gap-2 m-24 mr-0 pb-24'>
      {movies.map(movie => (
        <figure key={movie.id} className="group/card w-60 h-36 cursor-pointer overflow-hidden rounded-xl bg-colorBgBtnCate transition-transform delay-500 hover:h-auto hover:scale-125">
          <section className="flex justify-center items-center w-60 h-36 overflow-hidden">
            <img className="group-hover/card:scale-105 ease-in-out duration-300" src="/film5.jpg" alt="Film" />
          </section>
          <figcaption className="text-colorWhite px-4 py-3">
            <h3>{movie.name}</h3>
            <p>{movie.description}</p>
            {movie.category.map(cat => (
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
