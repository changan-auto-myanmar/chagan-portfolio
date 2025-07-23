import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../assets/images/logo/navbar-logo.png";
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
    <nav className="py-1 bg-primary w-full">
      <div className="flex flex-wrap items-center justify-between px-1 md:px-5">
        <div className="py-3 lg:py-0">
          <img src={logo} alt="Logo" className="w-[150px] md:w-[290px]" />
        </div>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-white  rounded-lg lg:hidden hover:scale-105 focus:outline-none"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          {!isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#fff"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
          )}
        </button>

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:block lg:w-auto transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-5 lg:py-0">
            <div className="flex flex-col lg:flex-row ">
              {navLinks.map(({ to, name }) => (
                <NavLink
                  key={to} // Using the "to" property as a unique key
                  to={to}
                  className={({ isActive }) =>
                    `text-white text-[14px] hover:scale-95 hover:opacity-100 p-2 transition-all duration-300 ease-in-out ${
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
            <div className="flex gap-5 p-2 lg:p-0">
              <a
                href="https://www.facebook.com/changanmyanmarmotor"
                target="_blank"
              >
                <FaFacebook className="text-white text-xl hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.youtube.com/@ChanganMyanmarMotor"
                target="_blank"
              >
                <FaYoutube className="text-white text-xl hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
              <a href="https://www.tiktok.com/@changan_myanmar" target="_blank">
                <FaTiktok className="text-white text-xl hover:scale-105 transition-all duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
