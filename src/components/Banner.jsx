// src/components/Banner.jsx

import React from "react";

function Banner({ data, onBannerLoaded }) {
  // Add onBannerLoaded prop
  return (
    <div className="w-full h-[400px] md:h-[450px] lg:h-[calc(100vh-80px)] relative bg-primary">
      <div className="w-full h-full">
        {/* Add the onLoad event handler to the img tag */}
        <img
          src={data.img}
          className="w-full h-full object-cover"
          onLoad={onBannerLoaded} // This function will be called once the image loads
        />
      </div>
      <div className="absolute bottom-[64px] left-0 z-10 w-full mx-auto">
        <div className="lg:w-[1000px] mx-auto px-5 sm:px-10 lg:p-0">
          <p
            className=" text-white text-[20px] md:text-[32px] lg:text-[48px] font-changan font-bold"
            style={{
              textShadow: "4px 4px 8px #000",
            }}
          >
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
