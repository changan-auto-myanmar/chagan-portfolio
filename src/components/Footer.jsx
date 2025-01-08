import { Link } from "react-router-dom";
import logo from "./../assets/images/navbar-logo.png";
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaViber,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-primary text-white p-5 sm:p-10 lg:px-0 lg:py-[64px]">
      <div className="lg:flex justify-between lg:w-[1000px] mx-auto">
        {/* Logo and Slogan Section */}
        <Link to="/" className="mb-8 md:mb-0 md:flex-2 md:w-[350px]">
          <img src={logo} alt="Changan Auto Logo" />
          <span className="text-[24px] font-semibold text-center md:text-left">
            Smart, Your Future
          </span>
        </Link>

        {/* Links Section */}
        <div className="sm:flex sm:space-x-20 sm:pe-10 md:w-full lg:w-auto justify-between mt-10 lg:mt-0">
          <div>
            <h3 className="text-xl font-bold mb-4">Brands</h3>
            <ul className="space-y-5">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/0">CHANGAN</a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/1">KAICHENG</a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/2">DEEPAL</a>
              </li>
            </ul>
          </div>

          <div className="mt-10 sm:mt-0">
            <h3 className="text-xl font-bold mb-4">Other Links</h3>
            <ul className="space-y-5">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <Link to="/about" className="">
                  About Us
                </Link>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <Link to="/new" className="">
                  News & Events
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-10 sm:mt-0">
            <h3 className="text-xl font-bold mb-4">Visit Us on</h3>
            <ul className="space-y-5 ms-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.facebook.com/changanmyanmarmotor "
                  className=""
                >
                  <FaFacebook className="inline-block mr-4" />
                  Facebook
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="https://www.youtube.com/@ChanganMyanmarMotor">
                  <FaYoutube className="inline-block mr-4" />
                  YouTube
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="https://www.tiktok.com/@changan_myanmar">
                  <FaTiktok className="inline-block mr-4" />
                  TikTok
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href=" https://invite.viber.com/?g2=AQB5apDgxENNrUzcR%2BXGS2T4fziVsPpXwkuYrvUQeNtjOZS5U8UOCkpy9J6AFqFG">
                  <FaViber className="inline-block mr-4" />
                  Viber
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="https://www.instagram.com/changanmyanmarmotor">
                  <FaInstagram className="inline-block mr-4" />
                  Instragam
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
