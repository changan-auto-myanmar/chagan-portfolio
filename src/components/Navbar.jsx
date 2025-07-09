import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo/changan-new-logo.png";
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

const navLinks = [
  { to: "/", name: "Home" },
  { to: "/car-model/0", name: "Car Model" },
  { to: "/about", name: "About Us" },
  { to: "/services", name: "Services" },
  { to: "/new", name: "News & Events" },
  { to: "/contact", name: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage the menu toggle

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility
  };

  return (
    <nav className="absolute bg-white py-1 bg-opacity-10 backdrop-blur-sm z-40 w-full">
      <div className="flex flex-wrap items-center justify-between px-1 md:px-10">
        <div>
          <img src={logo} alt="Logo" className="w-[100px] md:w-[120px]" />
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white  rounded-lg lg:hidden hover:text-primary focus:outline-none"
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
            <div className="flex flex-col lg:flex-row">
              {navLinks.map(({ to, name }) => (
                <NavLink
                  key={to} // Using the "to" property as a unique key
                  to={to}
                  className={({ isActive }) =>
                    `text-white hover:scale-95 p-2 ${
                      isActive
                        ? "text-white font-bold opacity-100 hover:opacity-100"
                        : "opacity-80"
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {name}
                </NavLink>
              ))}
            </div>
            <div className="flex gap-4 lg:ps-5 mt-2 lg:mt-0 pb-5 lg:pb-0">
              <a href="https://www.facebook.com/changanmyanmarmotor">
                <FaFacebook className="text-white text-xl" />
              </a>
              <a href="https://www.youtube.com/@ChanganMyanmarMotor">
                <FaYoutube className="text-white text-xl" />
              </a>
              <a href="https://www.tiktok.com/@changan_myanmar">
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
