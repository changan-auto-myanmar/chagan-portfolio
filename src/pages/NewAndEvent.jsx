import Footer from "../components/Footer";
import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import ContentTap from "../components/NewAndEvent/ContentTap/ContentTap";
import NewBanner from "../components/NewAndEvent/NewBanner";

function NewAndEvent() {
  return (
    <div>
      <NewBanner />
      <ContentTap data={true} />
      <ShowroomList />
      <Footer />
    </div>
  );
}

export default NewAndEvent;
