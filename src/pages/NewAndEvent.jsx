import { useQuery } from "@tanstack/react-query";
import Footer from "../components/Footer";
// import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import YouTube from "../components/HomePage/Youtube/YouTube";
import ContentTap from "../components/NewAndEvent/ContentTap/ContentTap";
import NewBanner from "../components/NewAndEvent/NewBanner";
import getNews from "../api/home/getnews";
// import { tabs } from "../components/NewAndEvent/ContentTap/ContentTap";

function NewAndEvent() {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews, // Don't refetch when window regains focus
  });
  // console.log(data);
  return (
    <div>
      {data?.data?.CSR?.length > 0 && (
        <div>
          <NewBanner
            image={data?.data?.CSR[0]?.images[0].filepath}
            title={data?.data?.CSR[0]?.title}
            id={data?.data?.CSR[0]._id}
          />
          <ContentTap data={data?.data?.CSR} />
        </div>
      )}
      <YouTube />
      <Footer />
    </div>
  );
}
// import React from 'react';
export default NewAndEvent;
