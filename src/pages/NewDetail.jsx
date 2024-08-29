import Footer from "../components/Footer";
import NewDetailBanner from "../components/NewDetail/NewDetailBanner";
import NewDetailContent from "../components/NewDetail/NewDetailContent";
import OtherNew from "../components/NewDetail/OtherNew";

function NewDetail() {
  return (
    <div>
      <NewDetailBanner />
      <NewDetailContent />
      <OtherNew data={false} />
      <Footer />
    </div>
  );
}

export default NewDetail;
