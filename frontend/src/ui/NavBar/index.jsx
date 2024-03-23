import { Link } from "react-router-dom";
import Carrousel from '../Carrousel';
import { Hamburger, Profil, Research, Logo } from "../../components/icons";


async function fetchApiData(idmovie) {
  let answer = await fetch('http://localhost:8080/api/movie/'+idmovie);
  let data = await answer.json();
  return data;
}

export default function NavBar() {

  let data = fetchApiData('1');
  console.log(data);

  return (
    <>
      <nav className="fixed top-0 z-50 w-full px-3 shadow-dark-mild flex items-center justify-between border-t-8 border-colorBorderBlue bg-gradient-to-b from-[#0000007a]">

        <Link className="my-1.5" to="/">
          <Hamburger className="w-12 fill-white hover:bg-colorBorderBlue"></Hamburger>
        </Link>

        <Link className="my-1.5" to="/">
          <Logo className="w-20 fill-white"></Logo>
        </Link>

        <section className="flex">
          <Link className="my-1.5" to="/">
            <Research className="w-12 fill-white hover:bg-colorBorderBlue"></Research>
          </Link>

          <Link className="my-1.5" to="/">
            <Profil className="w-12 fill-white hover:bg-colorBorderBlue"></Profil>
          </Link>
        </section>

      </nav>
      <Carrousel
        images={[
          "/slider/film1.jpg",
          "/slider/film2.jpg",
          "/slider/film3.jpeg",
          "/slider/film4.jpg",
          "/slider/film5.jpg",
        ]}

      />
    </>
  );
}
