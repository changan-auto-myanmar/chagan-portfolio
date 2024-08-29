import { Link } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaViber } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img src={logo} />
        </div>
        <div className="space-x-4 flex">
          <Link to="/" className="text-gray-300 hover:text-white">
            Home
          </Link>
          <Link to="/car-model" className="text-gray-300 hover:text-white">
            Car Model
          </Link>
          <Link to="/about" className="text-gray-300 hover:text-white">
            About CHANGAN
          </Link>
          <Link to="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link to="/new" className="text-gray-300 hover:text-white">
            New & Event
          </Link>
          <Link to="/contact" className="text-gray-300 hover:text-white">
            Contact Us
          </Link>
          <div className="flex gap-4 ps-5">
            <FaFacebook className="text-white text-xl" />
            <FaYoutube className="text-white text-2xl" />
            <FaViber className="text-white text-xl" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
