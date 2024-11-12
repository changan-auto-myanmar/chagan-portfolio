import CarBanner from "../components/CarDetail/CarBanner";
import CarColorChanger from "../components/CarDetail/CarColorChanger";
import CarDesign from "../components/CarDetail/CarDesign";
import CarGallary from "../components/CarDetail/CarGallary";
import Footer from "../components/Footer";
import CarModelShow from "../components/HomePage/CarModelShow/CarModelShow";
import { carData } from "../components/HomePage/CarModelShow/TabModel";
// import { useParams } from "react-router-dom";

function CarDetail() {
  return (
    <>
      <CarBanner carData={carData} />
      <CarColorChanger />
      <CarDesign carData={carData} />
      <CarGallary carData={carData} />
      <CarModelShow />
      <Footer />
    </>
  );
}

export default CarDetail;
