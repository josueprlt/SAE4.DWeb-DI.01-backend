import Navbar from "../ui/NavBar";
import Carousel from "../ui/Carrousel";
import PaysageCard from "../ui/PaysageCard";
import PortraitCard from "../ui/PortraitCard";
import { Outlet } from "react-router-dom";

async function fetchData() {
  let response = await fetch("http://localhost:8080/api/movie/1");
  let data = await response.json();
  console.log(data);
}

fetchData()

export default function Root() {
  return (
    <>
      <section className="bg-colorBgBody relative h-full">
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
        <PaysageCard/>
        <PortraitCard/>
        <Outlet />
      </section>
    </>
  );
}
