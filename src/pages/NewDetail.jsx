import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NewDetailBanner from "../components/NewDetail/NewDetailBanner";
import NewDetailContent from "../components/NewDetail/NewDetailContent";
import OtherNew from "../components/NewDetail/OtherNew";
import { useQuery } from "@tanstack/react-query";
import getNewDetail from "../api/home/getnewdetail";
import { useEffect } from "react";

function NewDetail() {
  const { id } = useParams();
  const { data, refetch } = useQuery({
    queryKey: ["news", id], // Include id in the query key to refetch when it changes
    queryFn: () => getNewDetail(id),
    enabled: !!id, // Ensure the query is only run if id is defined
  });

  // console.log("newDetail", data.data.csrContent);

  // Optionally, you can use a side effect to manually refetch if needed
  useEffect(() => {
    if (id) {
      refetch();
    }
  }, [id, refetch]);

  return (
    <div>
      <NewDetailBanner
        image={data?.data?.csrContent?.csrImages[0].url}
        title={data?.data?.csrContent?.title}
        date={data?.data?.csrContent?.createdAt}
      />
      <NewDetailContent desc={data?.data?.csrContent?.textBody} />
      <OtherNew />
      <Footer />
    </div>
  );
}

export default NewDetail;
