import { Link } from "react-router-dom";
import { Logo, Hamburger, Research, Profil } from "../../components/Icons";

export default function NavBar() {
  return (
    <>
    <nav className="flex-no-wrap shadow-dark-mild relative flex w-full items-center justify-between border-t-8 border-clrBodyBorderTop bg-gradient-to-b from-clrButtonCatBg px-2 py-1.5">
      
      <section>
        <Link to="/">
          <Hamburger className="w-14 fill-white hover:bg-clrBodyBorderTop"/>
        </Link>
      </section>

      <Link to="/">
        <Logo className="w-20"/>
      </Link>

      <section className="flex">
        <Link to="/research">
          <Research className="w-14 fill-white hover:bg-clrBodyBorderTop"/>
        </Link>
        <Link to="/profil">
          <Profil className="w-14 fill-white hover:bg-clrBodyBorderTop"/>
        </Link>
      </section>
    </nav>
    </>
  );
}
