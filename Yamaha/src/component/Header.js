import React from "react";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    // navbar
    <header className="fixed shadow-md w-full h-16 px-2 md:px-4 z-50 bg-white">
      <div className="flex items-center h-full justify-between">
        <Link to={""}>
          <div className="h-10">
            <img src={logo} alt="logo" className="h-full" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-7">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={""} className="mt-2">
              Home
            </Link>
            <Link to={"about"} className="mt-2">
              Services
            </Link>
            <Link to={"contacto"} className="mt-2">
              Contact
            </Link>
            <Link to={"login"} className="mt-2">
              Iniciar sesion
            </Link>
            <Link to={"registro"}>
              <button className="bg-red-600 rounded-md p-2  mb-1 text-white">
                Registarse
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* mobile */}
    </header>
  );
};

export default Header;
