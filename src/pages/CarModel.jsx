import { useState } from "react";
import CarBrandBanner from "../components/CarModel/CarBrandBanner";
import Footer from "../components/Footer";
import SplashScreen from "../components/SplashScreen";

function CarModel() {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  console.log(isBannerLoaded);
  return (
    <div>
      {!isBannerLoaded && <SplashScreen />}

      <div style={{ display: isBannerLoaded ? "block" : "none" }}>
        <CarBrandBanner onBannerLoaded={() => setIsBannerLoaded(true)} />
        <Footer />
      </div>
    </div>
  );
}

export default CarModel;
