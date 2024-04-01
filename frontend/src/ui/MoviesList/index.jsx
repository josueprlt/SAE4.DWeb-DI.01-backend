import React, { useState, useEffect } from "react";
import { fetchAllMovies } from "../../main";
import PaysageCard from "../PaysageCard";

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
      <PaysageCard mov={movies}/>
    </section>
  );
}
