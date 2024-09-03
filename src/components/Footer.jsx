import { Link } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Slogan Section */}
        <Link to="/" className="mb-8 md:mb-0 md:flex-2 md:w-[350px]">
          <img src={logo} alt="Changan Auto Logo" />

          <p className="md:mt-4 text-[24px] font-semibold text-center md:text-left">
            Smart, <br />
            Your Future
          </p>
        </Link>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:flex-2 px-5 md:px-[100px]">
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicles</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/car-model" className="hover:underline">
                  Changan
                </Link>
              </li>
              <li>
                <Link to="/car-model" className="hover:underline">
                  DEPILE
                </Link>
              </li>
              <li>
                <Link to="/car-model" className="hover:underline">
                  KACHAN
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
