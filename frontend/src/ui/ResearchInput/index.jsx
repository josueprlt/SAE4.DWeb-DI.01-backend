import React, { useState } from 'react';
import { Research } from "../../components/icons";

async function fetchResearch(value) {
    let response = await fetch("http://localhost:8080/api/research/" + value);
    let data = await response.json();
    return data;
}

function ResearchInput() {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        handleSearch();
    };

    const handleSearch = async () => {
        try {
            const data = await fetchResearch(inputValue);
            // Faites quelque chose avec les données récupérées
            console.log(data);
        } catch (error) {
            console.error('Erreur lors de la recherche :', error);
        }
    };

    return (
        <section className="flex justify-center w-full py-32">
            <div className="relative w-96">
                <Research className="absolute w-10 fill-colorWhite" />
                <input 
                    type="text" 
                    placeholder="Rechercher un film, une série" 
                    className="w-full p-2 pl-16 rounded border border-gray-300 focus:border-blue-500 bg-gray-700 text-white" 
                    value={inputValue} 
                    onChange={handleInputChange}
                />
            </div>
        </section>
    );
}

export default ResearchInput;



/* async function fetchResearch({ value }) {
    let response = await fetch("http://localhost:8080/api/research/" + value);
    let data = await response.json();
    return data;
}

function ResearchInput() {

    return (
        <section className="flex justify-center w-full py-32">
            <div className="relative w-96">
                <Research className="absolute w-10 fill-colorWhite" />
                <input type="text" placeholder="Rechercher un film, une série" className="w-full p-2 pl-10 rounded border border-colorBorderResearch focus:border-colorBorderBlue bg-colorBgBtnCate text-colorWhite" />
            </div>
        </section>
    );
}


export default function ResultResearch() {
    const [research, setResearch] = useState([]);

    useEffect(() => {
        fetchResearch()
            .then(data => setResearch(data))
            .catch(error => console.error('Erreur lors de la récupération des films:', error));
    }, []);

    return (
        <ResearchInput/>
        
    );
} */