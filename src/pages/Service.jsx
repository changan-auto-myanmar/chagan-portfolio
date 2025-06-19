import Banner from "../components/Banner";
import serviceimg from "./../assets/images/services/servicebanner.jpg";
import Footer from "../components/Footer";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import ServiceList from "../components/ServicePage/ServicesList";

function Service() {
  const services = {
    desc: "Offered Services",
    img: serviceimg,
  };
  return (
    <>
      <Banner data={services} />
      <ServiceList />
      <ShowroomList />
      <Footer />
    </>
  );
}

export default Service;
