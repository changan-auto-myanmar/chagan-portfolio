import CarBanner from "../components/CarDetail/CarBanner";
import CarColorChanger from "../components/CarDetail/CarColorChanger";
import CarDesign from "../components/CarDetail/CarDesign";
import CarGallary from "../components/CarDetail/CarGallary";
import Footer from "../components/Footer";
import CarModelShow from "../components/HomePage/CarModelShow/CarModelShow";
import exterier from "./../assets/images/exterier.png";
import interier from "./../assets/images/interier.png";

function CarDetail() {
  const carDesign = [
    {
      name: "Exterior",
      image: exterier,
      desc: `"CS75 Plus features sleek, integrated LED flashlights that enhance
        visibility and add a modern touch to the vehicle's exterior. These
        lights are designed for optimal brightness and energy efficiency,
        ensuring clear illumination in all conditions."`,
    },
    {
      name: "Interior",
      image: interier,
      desc: `CS75 Plus door handles are sleek and ergonomic, designed for a comfortable grip. Made from premium materials, they seamlessly blend with the car's modern interior, adding both style and functionality.`,
    },
  ];
  return (
    <>
      <CarBanner />
      <CarColorChanger />
      <CarDesign carDesign={carDesign} />
      <CarGallary />
      <CarModelShow />
      <Footer />
    </>
  );
}

export default CarDetail;
