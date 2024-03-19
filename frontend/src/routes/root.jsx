import Navbar from '../ui/NavBar';
import Button from '../ui/Button';
import { Outlet } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <section>
        <Navbar />
        <Button intent="free">Test</Button>
        <Outlet />
      </section>
    </>
  );
}