import { Link } from "react-router-dom";
import { Logo, Hamburger, Research, Profil } from "../../components/icons";

/* export async function fetchApiData() {
  let answer = await fetch("http://localhost:8080/api/movie/1");
  let data = await answer.json();
  return data;
}

let data = fetchApiData();
console.log(data); */

export default function NavBar() {

  return (
    <>
      <nav className="flex-no-wrap shadow-dark-mild border-colorBorderBlue from-colorBgBody fixed top-0 z-50 flex w-full items-center justify-between border-t-8 bg-gradient-to-b px-2 py-1.5">
        <section>
          <Link to="/">
            <Hamburger className="w-14 fill-white hover:bg-colorBorderBlue" />
          </Link>
        </section>

        <Link to="/">
          <Logo className="w-20" />
        </Link>

        <section className="flex">
          <Link to="/research">
            <Research className="w-14 fill-white hover:bg-colorBorderBlue" />
          </Link>
          <Link to="/profil">
            <Profil className="w-14 fill-white hover:bg-colorBorderBlue" />
          </Link>
        </section>
      </nav>
    </>
  );
}
