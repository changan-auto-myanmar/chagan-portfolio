// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { EffectFade } from "swiper/modules";

import changan from "./../../assets/images/changan-banner.jpg";
import deepel from "./../../assets/images/deepal-banner.jpg";
import kaisen from "./../../assets/images/kaicheng-banner.png";
import { tabs } from "../HomePage/CarModelShow/TabModel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import CarCarousel from "../HomePage/CarModelShow/CarCarousel";
import { useState } from "react";
import BrandOverview from "./BrandOverview";

function CarBrandBanner() {
  const [activeSlideId, setActiveSlideId] = useState(0);
  const carModelarray = [
    {
      id: 1,
      name: "CHANGAN Car Model",
      img: changan,
    },
    {
      id: 2,
      name: "DEEPAL Car Model",
      img: deepel,
    },
    {
      id: 3,
      name: "KAICENE Car Model",
      img: kaisen,
    },
  ];

  console.log(tabs);

  const handleSlideChange = (swiper) => {
    setActiveSlideId(swiper.activeIndex);
    console.log("Active Slide ID:", swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
        modules={[EffectFade]}
        effect="fade"
        className="relative h-[300px] md:h-[500px] lg:h-screen overflow-hidden"
        onSlideChange={handleSlideChange}
      >
        {carModelarray.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="brightness-50 bg-black h-full">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>
            <p className="absolute bottom-[34px] md:bottom-[64px] lg:bottom-[124px] left-0 z-10 ps-3 md:ps-[64px] text-white text-[20px] md:text-[34px] lg:text-[64px] font-changan font-bold hidden lg:block">
              {item.name}
            </p>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[34px] md:bottom-[84px] lg:bottom-[144px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block">
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
      {/* car carousel */}
      <div className="flex justify-center">
        {tabs.map(
          (tab) =>
            tab.id == activeSlideId + 1 && (
              <CarCarousel key={tab.id} tab={tab.content} />
            )
        )}
      </div>
      {/* brand Overview */}
      <div className="mt-5">
        <BrandOverview id={activeSlideId} />
      </div>
    </div>
  );
}

export default CarBrandBanner;
