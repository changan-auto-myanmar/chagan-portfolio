import { Link } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="flex flex-col lg:flex-row justify-between px-4 md:px-8">
        {/* Logo and Slogan Section */}
        <Link to="/" className="mb-8 md:mb-0 md:flex-2 md:w-[350px]">
          <img src={logo} alt="Changan Auto Logo" />
          <span className="text-[24px] font-semibold text-center md:text-left">
            Smart Your Future
          </span>
        </Link>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-2 ps-0 lg:ps-8 mt-10 lg:mt-0">
          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/car-model" className="hover:underline">
                  CHANGAN
                </Link>
              </li>
              <li>
                <Link to="/car-model" className="hover:underline">
                  DEEPAL
                </Link>
              </li>
              <li>
                <Link to="/car-model" className="hover:underline">
                  KAICENE
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="hover:underline">
                  After Sales
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Auto Repair
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline">
                  Exclusive Service With Genuine Parts
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:underline">
                  About Changan
                </Link>
              </li>
              <li>
                <Link to="/new" className="hover:underline">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us on</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  YouTube
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Viber
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
