import React from "react";
import ContentTap from "../NewAndEvent/ContentTap/ContentTap";

function OtherNew() {
  return (
    <div className="lg:w-[1000px] mx-auto p-5 my-[64px]">
      <p className="header-text font-bold font-changan">
        Other Interesting News
      </p>
      <div className="mt-10">
        <ContentTap data={false} />
      </div>
    </div>
  );
}

export default OtherNew;
