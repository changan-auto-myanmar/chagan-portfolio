import { Link } from "react-router-dom";
import logo from "./../assets/images/logo/navbar-logo.png";
import {
  FaFacebook,
  FaYoutube,
  FaTiktok,
  FaViber,
  FaInstagram,
} from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  // console.log(location);
  return (
    <footer className="bg-primary text-white p-5 sm:p-10 lg:px-0 lg:py-[64px]">
      <div className="lg:flex justify-between lg:w-[1000px] mx-auto">
        {/* Logo and Slogan Section */}
        <Link to="/" className="text-center">
          <img src={logo} alt="Changan Auto Logo" className="w-[230px]" />
          <span className="text-[24px] font-semibold text-center md:text-left">
            Smart, Your Future
          </span>
        </Link>

        {/* Links Section desktop*/}
        <div className="hidden sm:flex sm:space-x-20 sm:pe-10 md:w-full lg:w-auto justify-between mt-10 lg:mt-0">
          <div>
            <h3 className="text-xl font-bold mb-4">Brands</h3>
            <ul className="space-y-5">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/0">CHANGAN</a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/1">DEEPAL</a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a href="/car-model/2">KAICENE</a>
              </li>
            </ul>
          </div>

          <div className="mt-10 sm:mt-0">
            <h3 className="text-xl font-bold mb-4">Other Links</h3>
            <ul className="space-y-5">
              {location.pathname !== "/about" && (
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <Link to="/about" className="">
                    About Us
                  </Link>
                </li>
              )}
              {location.pathname !== "/new" && (
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <Link to="/new" className="">
                    News & Events
                  </Link>
                </li>
              )}
              {location.pathname !== "/services" && (
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <Link to="/services" className="">
                    Services
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <div className="mt-10 sm:mt-0">
            <h3 className="text-xl font-bold mb-4">Visit Us on</h3>
            <ul className="space-y-5 ms-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.facebook.com/changanmyanmarmotor"
                  target="_blank"
                  className=""
                >
                  <FaFacebook className="inline-block mr-4" />
                  Facebook
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.youtube.com/@ChanganMyanmarMotor"
                  target="_blank"
                >
                  <FaYoutube className="inline-block mr-4" />
                  YouTube
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.tiktok.com/@changan_myanmar"
                  target="_blank"
                >
                  <FaTiktok className="inline-block mr-4" />
                  TikTok
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href=" https://invite.viber.com/?g2=AQB5apDgxENNrUzcR%2BXGS2T4fziVsPpXwkuYrvUQeNtjOZS5U8UOCkpy9J6AFqFG"
                  target="_blank"
                >
                  <FaViber className="inline-block mr-4" />
                  Viber
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.instagram.com/changanmyanmarmotor"
                  target="_blank"
                >
                  <FaInstagram className="inline-block mr-4" />
                  Instragam
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Links Section mobile*/}
        <div className="sm:hidden sm:flex sm:space-x-20 sm:pe-10 md:w-full lg:w-auto justify-between mt-10 lg:mt-0">
          <div className="flex justify-between">
            <div>
              <h3 className="text-xl font-bold mb-4">Brands</h3>
              <ul className="space-y-5">
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <a href="/car-model/0">CHANGAN</a>
                </li>
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <a href="/car-model/2">KAICHEN</a>
                </li>
                <li className="hover:-translate-x-1 transition-transform duration-300">
                  <a href="/car-model/1">DEEPAL</a>
                </li>
              </ul>
            </div>

            <div className="">
              <h3 className="text-xl font-bold mb-4">Other Links</h3>
              <ul className="space-y-5">
                {location.pathname !== "/about" && (
                  <li className="hover:-translate-x-1 transition-transform duration-300">
                    <Link to="/about" className="">
                      About Us
                    </Link>
                  </li>
                )}
                {location.pathname !== "/new" && (
                  <li className="hover:-translate-x-1 transition-transform duration-300">
                    <Link to="/new" className="">
                      News & Events
                    </Link>
                  </li>
                )}
                {location.pathname !== "/services" && (
                  <li className="hover:-translate-x-1 transition-transform duration-300">
                    <Link to="/services" className="">
                      Services
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="mt-10 sm:mt-0">
            <h3 className="text-xl font-bold mb-4">Visit Us on</h3>
            <ul className="space-y-5 ms-2">
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.facebook.com/changanmyanmarmotor"
                  target="_blank"
                  className=""
                >
                  <FaFacebook className="inline-block mr-4" />
                  Facebook
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.youtube.com/@ChanganMyanmarMotor"
                  target="_blank"
                >
                  <FaYoutube className="inline-block mr-4" />
                  YouTube
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.tiktok.com/@changan_myanmar"
                  target="_blank"
                >
                  <FaTiktok className="inline-block mr-4" />
                  TikTok
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href=" https://invite.viber.com/?g2=AQB5apDgxENNrUzcR%2BXGS2T4fziVsPpXwkuYrvUQeNtjOZS5U8UOCkpy9J6AFqFG"
                  target="_blank"
                >
                  <FaViber className="inline-block mr-4" />
                  Viber
                </a>
              </li>
              <li className="hover:-translate-x-1 transition-transform duration-300">
                <a
                  href="https://www.instagram.com/changanmyanmarmotor"
                  target="_blank"
                >
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
