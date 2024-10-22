import Footer from "../components/Footer";
// import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import YouTube from "../components/HomePage/Youtube/YouTube";
import ContentTap from "../components/NewAndEvent/ContentTap/ContentTap";
import NewBanner from "../components/NewAndEvent/NewBanner";

function NewAndEvent() {
  return (
    <div>
      <NewBanner />
      <ContentTap data={true} />
      <YouTube />
      <Footer />
    </div>
  );
}

export default NewAndEvent;
