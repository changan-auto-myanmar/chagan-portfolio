import { Link, useNavigate } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";

const Footer = () => {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(`car-model/${path}`);
  };
  return (
    <footer className="bg-blue-900 text-white p-5 lg:p-20 ">
      <div className="flex flex-col md:flex-row justify-between">
        {/* Logo and Slogan Section */}
        <Link to="/" className="mb-8 md:mb-0 md:flex-2 md:w-[350px]">
          <img src={logo} alt="Changan Auto Logo" />
          <span className="text-[24px] font-semibold text-center md:text-left">
            Smart Your Future
          </span>
        </Link>

        {/* Links Section */}
        <div className="flex md:flex-row justify-between md:space-x-5 lg:space-x-40">
          <div>
            <h3 className="text-lg font-semibold mb-4">Brands</h3>
            <ul className="space-y-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <button onClick={() => handleClick(0)}>CHANGAN</button>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <button onClick={() => handleClick(1)}>DEEPAL</button>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <button onClick={() => handleClick(2)}>KAICENE</button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Other Links</h3>
            <ul className="space-y-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <Link to="/about" className="">
                  About Changan
                </Link>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <Link to="/new" className="">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Visit Us on</h3>
            <ul className="space-y-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="#" className="">
                  Facebook
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="#">YouTube</a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="#">TikTok</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
