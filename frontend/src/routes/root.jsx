import Navbar from "../ui/NavBar";
import Carousel from "../ui/Carrousel";
import PaysageCard from "../ui/PaysageCard";
import { Outlet } from "react-router-dom";

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
        <Outlet />
      </section>
    </>
  );
}
