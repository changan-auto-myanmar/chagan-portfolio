import Footer from "../components/Footer";
// import ShowroomList from "../components/HomePage/Showroom/Showroomlist";
import YouTube from "../components/HomePage/Youtube/YouTube";
import ContentTap from "../components/NewAndEvent/ContentTap/ContentTap";
import NewBanner from "../components/NewAndEvent/NewBanner";
import { tabs } from "../components/NewAndEvent/ContentTap/ContentTap";

function NewAndEvent() {
  console.log(tabs[0]);
  return (
    <div>
      <NewBanner image={tabs[0]?.image} title={tabs[0]?.title} />
      <ContentTap data={true} />
      <YouTube />
      <Footer />
    </div>
  );
}
// import React from 'react';
export default NewAndEvent;
