import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/changanLogo.webp";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="absolute bg-white p-5   bg-opacity-10 backdrop-blur-sm z-10 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div>
          <img src={logo} alt="Logo" className="w-8 md:w-14" />
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <div className="space-x-4 flex flex-col lg:flex-row items-center ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-white hover:text-white hover:opacity-100 p-2 ${
                  isActive ? "text-white font-bold opacity-100" : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/car-model/0"
              className={({ isActive }) =>
                `text-white hover:text-white p-2 ${
                  isActive
                    ? "text-white font-bold hover:opacity-100 opacity-100"
                    : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              Car Model
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-white hover:text-white p-2 ${
                  isActive
                    ? "text-white font-bold hover:opacity-100 opacity-100"
                    : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-white hover:text-white p-2 ${
                  isActive
                    ? "text-white font-bold hover:opacity-100 opacity-100"
                    : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              Services
            </NavLink>
            <NavLink
              to="/new"
              className={({ isActive }) =>
                `text-white hover:text-white p-2 ${
                  isActive
                    ? "text-white font-bold hover:opacity-100 opacity-100"
                    : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              New & Event
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-white hover:opacity-100 hover:text-white p-2 ${
                  isActive ? "text-white font-bold opacity-100" : "opacity-80"
                }`
              }
              onClick={toggleMenu}
            >
              Contact Us
            </NavLink>
            <div className="flex gap-4 lg:ps-5 mt-2 lg:mt-0 pb-5 lg:pb-0">
              <a href="#">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a href="#">
                <FaYoutube className="text-white text-xl" />
              </a>
              <a href="#">
                <FaTiktok className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
