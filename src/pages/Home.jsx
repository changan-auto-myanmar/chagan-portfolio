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
        <button className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg">
          Contact Us
        </button>
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
