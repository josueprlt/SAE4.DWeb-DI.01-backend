import Navbar from '../ui/NavBar';
import Button from '../ui/Button';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section className='relative bg-colorBgBody h-full'>
        <Navbar />
        <Button intent="free">Test</Button>
        <Outlet />
      </section>
    </>
  );
}