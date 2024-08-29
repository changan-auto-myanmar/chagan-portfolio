import Banner from "../components/Banner";
import ServicesList from "../components/ServicePage/ServicesList";
import serviceimg from "./../assets/images/services.png";
import NewEvent from "../components/HomePage/New&Event/NewEvent";
import Footer from "../components/Footer";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";

function Service() {
  const services = {
    desc: "CHANGAN Offered Services",
    img: serviceimg,
  };
  return (
    <>
      <Banner data={services} />
      <ServicesList />
      <NewEvent />
      <ShowroomList />
      <Footer />
    </>
  );
}

export default Service;
