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
        className="relative h-[300px] md:h-[500px"
        onSlideChange={handleSlideChange}
      >
        {carModelarray.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="brightness-50 bg-black">
              <img src={item.img} className="w-full h-[500px]" />
            </div>
            <p className="absolute bottom-[64px] left-0 z-10 ps-3 md:ps-[64px] text-white text-[20px] md:text-[34px] lg:text-[64px] font-changan font-bold">
              {item.name}
            </p>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[64px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block">
          <SwiperButtonPrev />
          <SwiperButtonNext />
        </div>
      </Swiper>
      <div className="container flex justify-center">
        {tabs.map(
          (tab) =>
            tab.id == activeSlideId + 1 && (
              <CarCarousel key={tab.id} tab={tab.content} />
            )
        )}
      </div>
    </div>
  );
}

export default CarBrandBanner;
