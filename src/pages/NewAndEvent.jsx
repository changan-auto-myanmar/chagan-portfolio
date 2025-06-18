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
  // console.log("new", data.data.csrContents[0].csrImages[0].url);
  return (
    <div>
      {data?.data?.csrContents?.length > 0 && (
        <div>
          <NewBanner
            image={data?.data?.csrContents[0]?.csrImages[0].url}
            title={data?.data?.csrContents[0]?.title}
            id={data?.data?.csrContents[0]._id}
          />
          <ContentTap data={data?.data?.csrContents} />
        </div>
      )}
      <YouTube />
      <Footer />
    </div>
  );
}
// import React from 'react';
export default NewAndEvent;
