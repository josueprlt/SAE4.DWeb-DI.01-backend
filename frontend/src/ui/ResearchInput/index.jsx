import React, { useState } from "react";
import { Research } from "../../components/icons";
import { fetchResearch } from "../../routes/root";
import PaysageCard from "../PaysageCard";


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
        <PaysageCard mov={data}/>
      </section>
    </>
  );
}

export default ResearchInput;
