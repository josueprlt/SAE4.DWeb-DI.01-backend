import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarRetour from "../ui/NavBarRetour";
import { Outlet } from "react-router-dom";
import { fetchByMovie } from "../main";

function FilmAffichage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetchByMovie(movieId)
            .then((data) => {
                setMovie(data);
            })
            .catch((error) =>
                console.error("Erreur lors de la récupération du film:", error)
            );
    }, [movieId]);

    if (!movie) {
        return (
            <>
                <div className="text-white w-screen h-screen pt-20 text-center">Loading...</div>
            </>
        );
    } else {
        console.log(movie);

        return (
            <>
                <section className="p-24 text-colorWhite">
                    <iframe className="w-full aspect-video" src={movie.linkYt}
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    >
                    </iframe>

                    <article className="flex items-center gap-5 py-10">
                        <div className="w-28 h-28 overflow-hidden">
                            <img className="w-full h-full object-cover" src={movie.img} alt={"image du film " + movie.name} />
                        </div>

                        <section className="flex flex-col h-full justify-between gap-4">
                            <h2 className="text-2xl font-bold">{movie.name}</h2>
                            <div className="flex gap-2 text-lg">
                                <p>{movie.dateDeb}</p>
                                <p>-</p>
                                <p>{movie.realisateur}</p>
                                <p>-</p>
                                <ul className="flex gap-1">
                                    {movie.category.map(cat => (
                                        <li className="p-2 bg-colorBgGray text-colorBgBody uppercase text-xs font-bold rounded">{cat.name}</li>
                                    ))}
                                </ul>
                            </div>
                        </section>

                    </article>
                    <section className="flex justify-between gap-10">
                        <p className="max-w-96">{movie.description}</p>
                        <p>Vidéo disponible jusqu'au : {movie.dateFin}</p>
                    </section>
                </section>
            </>
        );
    }

}


export default function Film() {

    return (
        <>
            <section className="bg-colorBgBody relative h-auto overflow-hidden">
                <NavbarRetour />
                <FilmAffichage />
                <Outlet />
            </section>
        </>
    );
}