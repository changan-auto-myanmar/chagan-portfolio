// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Importing motion

import banner from "./../../assets/images/heroBanner.png";
import banner2 from "./../../assets/images/banner2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

function HeroBanner() {
  return (
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      className="relative h-[300px] md:h-screen"
    >
      <SwiperSlide>
        <img src={banner} className="w-full h-full object-cover" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={banner2} className="w-full h-full object-cover" />
      </SwiperSlide>
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 1 }}
        className="absolute bottom-[64px] md:bottom-[64px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px]"
      >
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </motion.div>
      <motion.span
        className="absolute bottom-[64px] md:bottom-[64px] left-0 z-10 ps-3 md:ps-[64px] text-white text-[20px] md:text-[34px] lg:text-[64px] font-changan font-bold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 1 }}
      >
        CHANGAN,
        <br /> Smart Your Future
      </motion.span>
    </Swiper>
  );
}

export default HeroBanner;
