import { useEffect } from "react";
import CarBanner from "../components/CarDetail/CarBanner";
import CarColorChanger from "../components/CarDetail/CarColorChanger";
import CarDesign from "../components/CarDetail/CarDesign";
import CarGallary from "../components/CarDetail/CarGallary";
import Footer from "../components/Footer";
import CarModelShow from "../components/HomePage/CarModelShow/CarModelShow";
// import { carData } from "../components/HomePage/CarModelShow/TabModel";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getcarDetail from "../api/home/getcardetail";

function CarDetail() {
  const { id } = useParams();
  const { data, refetch } = useQuery({
    queryKey: ["car", id], // Include id in the query key to refetch when it changes
    queryFn: () => getcarDetail(id),
    enabled: !!id, // Ensure the query is only run if id is defined
  });
  // Optionally, you can use a side effect to manually refetch if needed
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  return (
    <>
      {data?.data?.showcase && (
        <div>
          <CarBanner
            image={data?.data?.showcase?.car_banner?.filepath}
            sologram={data?.data?.showcase?.car_banner?.car_slogan || ""}
            name={data?.data?.showcase?.car_name || ""}
            pdf={data?.data?.showcase?.car_porche.filepath || ""}
          />
          <CarColorChanger
            carData={data?.data?.showcase?.car_color || []}
            name={data?.data?.showcase?.car_name || ""}
          />
          <CarDesign
            exterier={data?.data?.showcase?.car_exterior}
            interier={data?.data?.showcase?.car_interior}
          />
          <CarGallary gallery={data?.data?.showcase?.gallery || []} />
          <CarModelShow />
        </div>
      )}
      <Footer />
    </>
  );
}

export default CarDetail;
