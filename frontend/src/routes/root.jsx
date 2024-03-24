import Navbar from '../ui/NavBar';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section className='relative bg-colorBgBody h-full'>
        <Navbar />
        <Outlet />
      </section>
    </>
  );
}