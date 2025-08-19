import AboutContent from "../components/About/AboutDetail/AboutContent";
import MissionVision from "../components/About/MissionVision";
import Banner from "../components/Banner";
import aboutimg from "./../assets/images/about/aboutbanner.jpg";
import Footer from "./../components/Footer";
import { useState } from "react";
import SplashScreen from "../components/SplashScreen";

function About() {
  const [isBannerLoaded, setIsBannerLoaded] = useState(false);
  const about = {
    desc: "About Myanmar Arr Thit Man Motor",
    img: aboutimg,
  };
  return (
    <div>
      {!isBannerLoaded && <SplashScreen />}

      <div style={{ display: isBannerLoaded ? "block" : "none" }}>
        <Banner data={about} onBannerLoaded={() => setIsBannerLoaded(true)} />
        <AboutContent />
        <MissionVision />
        <Footer />
      </div>
    </div>
  );
}

export default About;
