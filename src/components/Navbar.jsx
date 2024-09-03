import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";
import { FaFacebook, FaYoutube, FaViber } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="bg-gray-800">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div>
          <img src={logo} alt="Logo" />
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
          } w-full lg:block lg:w-auto pb-5 transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <div className="space-x-4 flex flex-col lg:flex-row items-center ">
            <Link
              to="/"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/car-model"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              Car Model
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              About CHANGAN
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link
              to="/new"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              New & Event
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white p-2"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
            <div className="flex gap-4 lg:ps-5 mt-2 lg:mt-0">
              <a href="#">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a href="#">
                <FaViber className="text-white text-xl" />
              </a>
              <a href="#">
                <FaYoutube className="text-white text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
