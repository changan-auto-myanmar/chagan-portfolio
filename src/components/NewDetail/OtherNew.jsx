import React from "react";
import ContentTap from "../NewAndEvent/ContentTap/ContentTap";

function OtherNew() {
  return (
    <div className="container mx-auto p-6 mt-10">
      <p className="text-[32px] font-bold font-changan">
        Other Interesting News
      </p>
      <div className="mt-10">
        <ContentTap data={false} />
      </div>
    </div>
  );
}

export default OtherNew;
