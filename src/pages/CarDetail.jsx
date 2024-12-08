import CarBanner from "../components/CarDetail/CarBanner";
import CarColorChanger from "../components/CarDetail/CarColorChanger";
import CarDesign from "../components/CarDetail/CarDesign";
import CarGallary from "../components/CarDetail/CarGallary";
import Footer from "../components/Footer";
import CarModelShow from "../components/HomePage/CarModelShow/CarModelShow";
import { carData } from "../components/HomePage/CarModelShow/TabModel";
import { useParams } from "react-router-dom";

function CarDetail() {
  console.log(carData, "detail");
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <CarBanner carData={carData} />
      <CarColorChanger carData={carData[id]?.color} name={carData[id]?.name} />
      <CarDesign carData={carData} />
      <CarGallary carData={carData} />
      <CarModelShow />
      <Footer />
    </>
  );
}

export default CarDetail;
