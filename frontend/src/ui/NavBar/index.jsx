import { Link } from "react-router-dom";
import logo from '../../assets/icon_logo.svg';

export default function NavBar() {
  return (
    <nav className="flex-no-wrap shadow-dark-mild relative flex w-full items-center justify-between border-t-8 border-[#007AFF] bg-[#000E29]">
      
      <Link className="mb-4 text-[#BBA] lg:mb-0 lg:pe-2" to="/crash">
      <img src={logo} alt="Logo" />
      </Link>
    </nav>
  );
}
