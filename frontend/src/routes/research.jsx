import Navbar from "../ui/NavBar";
import ResearchInput from "../ui/ResearchInput";
import MoviesList from "../ui/MoviesList";
import { Outlet } from "react-router-dom";


export default function Research() {
  return (
    <>
      <section className="bg-colorBgBody relative h-auto">
        <Navbar />
        <ResearchInput />

        <MoviesList/>
        <Outlet/>
      </section>
    </>
  );
}