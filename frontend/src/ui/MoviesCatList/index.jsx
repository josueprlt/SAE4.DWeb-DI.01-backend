import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchByCategory } from "../../main";
import PaysageCard from "../PaysageCard";

export default function MoviesCatList() { 
  const { categoryId } = useParams();
  const [movCat, setMovCategory] = useState();


  useEffect(() => {
    fetchByCategory(categoryId)
      .then((data) => setMovCategory(data))
      .catch((error) =>
        console.error("Erreur lors de la récupération des films:", error),
      );
    }, []);


    if (!movCat) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {movCat.movies && (
          <PaysageCard mov={movCat.movies} />
        )}
      </div>
    );
}
