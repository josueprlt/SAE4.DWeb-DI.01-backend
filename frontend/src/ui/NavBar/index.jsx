import { Link } from "react-router-dom";

import { Hamburger, Profil, Research, Logo } from "../../components/icons";

export default function NavBar() {
  return (
    <nav className="flex-no-wrap px-3 shadow-dark-mild relative flex w-full items-center justify-between border-t-8 border-colorBorderBlue bg-gradient-to-b from-[#0000007a]">

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
  );
}
