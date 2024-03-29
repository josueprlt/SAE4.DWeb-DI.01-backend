import Navbar from "../ui/NavBar";
import Carousel from "../ui/Carrousel";
import CategoryList from "../ui/CategoryList";
/* import PortraitCard from "../ui/PortraitCard"; */
import { Outlet } from "react-router-dom";
import MoviesList from "../ui/MoviesList";

export default function Root() {
  return (
    <>
      <section className="bg-colorBgBody relative h-auto">
        <Navbar />
        <Carousel
          images={[
            "/slider/film1.jpg",
            "/slider/film2.jpg",
            "/slider/film3.jpeg",
            "/slider/film4.jpg",
            "/slider/film5.jpg",
          ]}
        />

        <CategoryList />

        <MoviesList/>
        
        <Outlet />
      </section>
    </>
  );
}

export async function fetchAllCategories() {
  let response = await fetch("http://localhost:8080/api/categories");
  let data = await response.json();
  return data;
}

export async function fetchAllMovies() {
  let response = await fetch("http://localhost:8080/api/movies");
  let data = await response.json();
  return data;
}

export async function fetchResearch(value) {
  let response = await fetch("http://localhost:8080/api/research/" + value);
  let data = await response.json();
  return data;
}