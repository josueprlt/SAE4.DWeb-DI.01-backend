import { Link } from "react-router-dom";
import { Logo, Hamburger, Research, Profil, Cross } from "../../components/icons";
import { useState } from 'react';


export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="flex-no-wrap shadow-dark-mild border-colorBorderBlue from-colorBgBody fixed top-0 z-50 flex w-full items-center justify-between border-t-8 bg-gradient-to-b px-2 py-1.5">
        <section>
          <Link to="/">
            <Hamburger className="w-14 fill-white hover:bg-colorBorderBlue" onClick={toggleMenu}/>
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

      {isMenuOpen && (
        <div className="fixed inset-0 bg-colorBgFondBurger bg-opacity-50 z-50">
          <div className="relative flex justify-start w-80 h-full items-center px-8 bg-colorBgBurger">
            <Cross className="absolute top-5 left-5 w-16 fill-colorWhite hover:fill-colorBorderBlue cursor-pointer" onClick={toggleMenu}/>
            <ul className="text-colorWhite">
              <li>Menu Item 1</li>
              <li>Menu Item 2</li>
              <li>Menu Item 3</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
