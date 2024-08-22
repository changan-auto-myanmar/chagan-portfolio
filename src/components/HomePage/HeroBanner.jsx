// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { EffectFade } from "swiper/modules";

import banner from "./../../assets/images/heroBanner.png";
import banner2 from "./../../assets/images/banner2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

function HeroBanner() {
  return (
    <Swiper modules={[EffectFade]} effect="fade" className="relative">
      <SwiperSlide>
        <img src={banner} className="w-full h-[500px]" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} className="w-full h-[500px]" />
      </SwiperSlide>
      <div className="absolute bottom-[64px] right-0 z-10 pe-[64px] space-x-[24px]">
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </div>
      <p className="absolute bottom-[64px] left-0 z-10 ps-[64px] text-white text-[64px] font-changan font-bold">
        CHANGAN,
        <br /> Smart Your Future
      </p>
    </Swiper>
  );
}

export default HeroBanner;
