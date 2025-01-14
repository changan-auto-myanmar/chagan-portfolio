import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NewDetailBanner from "../components/NewDetail/NewDetailBanner";
import NewDetailContent from "../components/NewDetail/NewDetailContent";
import OtherNew from "../components/NewDetail/OtherNew";
import { tabs } from "../components/NewAndEvent/ContentTap/ContentTap";

function NewDetail() {
  const { id } = useParams();
  const news = tabs.find((tab) => tab.id === id);
  console.log(news.image);
  return (
    <div>
      <NewDetailBanner
        image={news?.image}
        title={news?.title}
        date={news?.date}
      />
      <NewDetailContent desc={news.desc} />
      <OtherNew data={false} />
      <Footer />
    </div>
  );
}

export default NewDetail;
