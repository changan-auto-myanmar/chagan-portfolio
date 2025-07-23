import AboutChangan from "../components/HomePage/AboutChangan";
import ServiceShow from "../components/HomePage/ServiceShow";
import HeroBanner from "../components/HomePage/HeroBanner";
import YouTube from "../components/HomePage/Youtube/YouTube";
import NewEvent from "../components/HomePage/New&Event/NewEvent";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import Footer from "../components/Footer";
import CarBrand from "../components/HomePage/CarModelShow/CarBrand";
import { FaFacebookMessenger } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <div className="fixed bottom-5 right-10 z-10">
        <a
          href="https://m.me/100830611622590"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white px-3 md:px-5 py-3 rounded-lg"
        >
          <FaFacebookMessenger color="#0866FF" size={24} />
          <span className="text-primary font-medium hidden md:block">
            Contact Support
          </span>
        </a>
      </div>
      <HeroBanner />
      <CarBrand />
      <AboutChangan />
      <ServiceShow />
      <YouTube />
      <NewEvent />
      <ShowroomList />
      <Footer />
    </div>
  );
};

export default Home;
