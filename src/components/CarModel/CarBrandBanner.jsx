// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { EffectFade } from "swiper/modules";

import changan from "./../../assets/images/brandoverview/changan.png";
import deepel from "./../../assets/images/brandoverview/deepal.jpg";
import kaisen from "./../../assets/images/brandoverview/kaicheng.png";
import { tabs } from "../HomePage/CarModelShow/TabModel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import CarCarousel from "../HomePage/CarModelShow/CarCarousel";
import { useState } from "react";
import BrandOverview from "./BrandOverview";
import { useParams } from "react-router-dom";

function CarBrandBanner() {
  console.log("carModel", tabs);
  const { id } = useParams();
  const [activeSlideId, setActiveSlideId] = useState(id);
  // console.log("active", typeof activeSlideId);
  const carModelarray = [
    {
      id: 1,
      name: "CHANGAN Car Model",
      img: changan,
    },
    {
      id: 2,
      name: "KAICENE Car Model",
      img: kaisen,
    },
    {
      id: 3,
      name: "DEEPAL Car Model",
      img: deepel,
    },
  ];

  // console.log(tabs);

  const handleSlideChange = (swiper) => {
    setActiveSlideId(swiper.activeIndex);
    console.log("Active Slide ID:", swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
        loop={false}
        modules={[EffectFade]}
        effect="fade"
        className="relative h-[300px] md:h-[500px] lg:h-screen overflow-hidden"
        initialSlide={activeSlideId}
        slidesPerView={3}
        onSlideChange={handleSlideChange}
      >
        {carModelarray.map((item) => (
          <SwiperSlide key={item.id}>
            {/* <div className="brightness-50 bg-black h-full"> */}
            <img src={item.img} className="w-full h-full object-cover" />
            {/* </div> */}
            <p
              className="absolute bottom-[34px] md:bottom-[64px] left-0 z-10 ps-3 md:ps-[64px] text-white text-[20px] md:text-5xl font-changan font-bold hidden lg:block"
              style={{
                textShadow: " 2px 2px 4px #0B457F",
              }}
            >
              {item.name}
            </p>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[34px] md:bottom-[64px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block">
          <button className={activeSlideId === 0 ? "opacity-50" : ""}>
            <SwiperButtonPrev />
          </button>
          <button className={activeSlideId === 2 ? "opacity-50" : ""}>
            <SwiperButtonNext />
          </button>
        </div>
      </Swiper>
      {/* car carousel */}
      <div className="flex justify-center">
        {tabs.map(
          (tab) =>
            tab.id == activeSlideId * 1 + 1 && (
              <CarCarousel key={tab.id} tab={tab.content} />
            )
        )}

        {/* <p>{activeSlideId}</p> */}
      </div>
      {/* brand Overview */}
      <div className="mt-5">
        <BrandOverview id={activeSlideId} />
      </div>
    </div>
  );
}

export default CarBrandBanner;
