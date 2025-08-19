import AboutChangan from "../components/HomePage/AboutChangan";
import ServiceShow from "../components/HomePage/ServiceShow";
import HeroBanner from "../components/HomePage/HeroBanner";
import YouTube from "../components/HomePage/Youtube/YouTube";
import NewEvent from "../components/HomePage/New&Event/NewEvent";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import Footer from "../components/Footer";
import CarBrand from "../components/HomePage/CarModelShow/CarBrand";
import { FaFacebookMessenger } from "react-icons/fa";
import { useState } from "react";

const Home = () => {
  const [isBannerLoaded, setIsBannerLoaded] = useState(true);
  return (
    <div>
      {!isBannerLoaded && <SplashScreen />}

      <div style={{ display: isBannerLoaded ? "block" : "none" }}>
        <div className="fixed bottom-5 right-10 z-10">
          <a
            href="https://m.me/100830611622590"
            target="_blank"
            rel="noopener noreferrer "
            className="flex items-center text-primary gap-2 bg-white px-3 md:px-5 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
          >
            <FaFacebookMessenger color="#0866FF" size={24} />
            <span className="font-medium hidden md:block">Contact Support</span>
          </a>
        </div>
        <HeroBanner onBannerLoaded={() => setIsBannerLoaded(true)} />
        <CarBrand />
        <AboutChangan />
        <ServiceShow />
        <YouTube />
        <NewEvent />
        <ShowroomList />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
