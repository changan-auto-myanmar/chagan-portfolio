import AboutChangan from "../components/HomePage/AboutChangan";
import CarModelShow from "../components/HomePage/CarModelShow/CarModelShow";
import ServiceShow from "../components/HomePage/CarModelShow/ServiceShow";
import HeroBanner from "../components/HomePage/HeroBanner";

const Home = () => {
  return (
    <div>
      <HeroBanner />
      <CarModelShow />
      <ServiceShow />
      <AboutChangan />
    </div>
  );
};

export default Home;
