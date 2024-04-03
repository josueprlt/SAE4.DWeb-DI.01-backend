import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarRetour from "../ui/NavBarRetour";
import { Outlet } from "react-router-dom";
import { fetchByMovie } from "../main";

function FilmAffichage() {
    const { movieId } = useParams();
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        fetchByMovie(movieId)
            .then((data) => {
                setMovies(data);
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération du film:", error)
            );
    }, [movieId]);

    if (!movies) {
        return (
            <>
                <div className="text-white w-screen h-screen pt-20 text-center">Loading...</div>
            </>
        );
    }

    return (
        <>
        <section>
        {movies.map((movie) => (
            <iframe src={movie.linkYt}
                    title={"Trailer du film "+movie.name}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
            </iframe>
        ))}
        </section>
        </>
    );
}

function FilmPresentation() {
}

export default function Film() {

    return (
        <>
            <section className="bg-colorBgBody relative h-auto overflow-hidden">
                <NavbarRetour />
                <FilmPresentation />
                <Outlet />
            </section>
        </>
    );
}