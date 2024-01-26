import { useState, useEffect } from 'react';
import HomeNavbar from "./components/HomeNavbar";
import Sidebar from "./components/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const navbarStyles = {
    paddingLeft: showSidebar ? '50px' : '0', 
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {showSidebar && (
          <div className="col-lg-2 col-md-3 col-sm-4">
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>
        )}
        {(!isSmallScreen || !showSidebar) && (
          <div className="col" style={navbarStyles}>
            <HomeNavbar toggleSidebar={toggleSidebar} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
