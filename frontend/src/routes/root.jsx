import Navbar from '../ui/NavBar';
import Carrousel from '../ui/Carrousel';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section>
        <Navbar />
        <Carrousel 
          images={[
            "/slider/film1.jpg",
            "/slider/film2.jpg",
            "/slider/film3.jpeg",
            "/slider/film4.jpg",
            "/slider/film5.jpg",
          ]}
        />
        <Outlet />
      </section>
    </>
  );
}