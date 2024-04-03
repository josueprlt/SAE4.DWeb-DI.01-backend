import { useEffect } from "react";
import { useParams } from "react-router-dom";
import NavbarRetour from "../ui/NavBarRetour";
import { Outlet } from "react-router-dom";

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

      return (
        <>

        </>
      );
}

function FilmPresentation() {
    let data = FilmAffichage();
    
}

export default function Film() {

  return (
    <>
      <section className="bg-colorBgBody relative h-auto overflow-hidden">
        <NavbarRetour />
        <Outlet />
      </section>
    </>
  );
}