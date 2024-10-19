import AboutContent from "../components/About/AboutDetail/AboutContent";
import MissionVision from "../components/About/MissionVision";
import Banner from "../components/Banner";
import aboutimg from "./../assets/images/about/aboutarrthitman.png";
import Footer from "./../components/Footer";

function About() {
  const about = {
    desc: "About Myanmar Arr Thit Man Motor",
    img: aboutimg,
  };
  return (
    <div>
      <Banner data={about} />
      <AboutContent />
      <MissionVision />
      <Footer />
    </div>
  );
}

export default About;
