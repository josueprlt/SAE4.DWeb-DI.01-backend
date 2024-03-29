import React, { useState } from "react";
import { Research } from "../../components/icons";
import { fetchResearch } from "../../routes/root";

function ResearchInput() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    handleSearch();
  };

  const handleSearch = async () => {
    try {
      setData(await fetchResearch(inputValue));
    } catch (error) {
      console.error("Erreur lors de la recherche :", error);
    }
  };

  return (
    <>
      <section className="flex w-full justify-center py-32">
        <div className="relative w-96">
          <Research className="absolute w-10 fill-colorWhite" />
          <input
            type="text"
            placeholder="Rechercher un film, une série"
            className="w-full rounded border border-gray-300 bg-gray-700 p-2 pl-16 text-white focus:border-blue-500"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
      </section>

      <section className="p-24 pr-0 flex w-full flex-wrap gap-2 pb-24">
        {data.map((movie) => (
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
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}

export default ResearchInput;
