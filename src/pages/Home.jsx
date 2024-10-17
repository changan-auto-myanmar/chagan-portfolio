import AboutChangan from "../components/HomePage/AboutChangan";
import ServiceShow from "../components/HomePage/ServiceShow";
import HeroBanner from "../components/HomePage/HeroBanner";
import YouTube from "../components/HomePage/Youtube/YouTube";
import NewEvent from "../components/HomePage/New&Event/NewEvent";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import Footer from "../components/Footer";
import CarBrand from "../components/HomePage/CarModelShow/CarBrand";

const Home = () => {
  return (
    <div>
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
