import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import SectionFooter from './components/SectionFooter';


const LayoutRoutes = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <Outlet />
      </div>
      <SectionFooter />
    </>
  );
};

export default LayoutRoutes;
