// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowRightAlt } from "react-icons/md";

// Import Swiper styles
import "swiper/css";

import { Navigation } from "swiper/modules";
import { SwiperButtonNext, SwiperButtonPrev } from "./../../SwiperBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const CarCarousel = ({ tab }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="w-screen lg:w-[800px] relative">
      <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        navigation
        onSlideChange={(swiper) => {
          //console.log//("Slide changed to index:", swiper.activeIndex);
          setActiveIndex(swiper.activeIndex); // Update active index on slide change
        }}
      >
        {tab.map((item) => (
          <SwiperSlide key={item.id} className=" flex items-center flex-col">
            <img loading="lazy" src={item.img} className="h-[300px]" />
          </SwiperSlide>
        ))}
        <div className="text-center">
          <motion.h2
            key={activeIndex} // Key should change for re-animation
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold pt-3"
          >
            {tab[activeIndex]?.name}
          </motion.h2>
          {/* <div className="bg-red-500"> */}
          <Link
            to={`/car-detail/${tab[activeIndex]?.no}`}
            className="mt-2 inline-block border border-black px-4 py-2 text-black rounded hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
          >
            EXPLORE
            <MdArrowRightAlt className="inline-block ms-10 text-3xl" />
          </Link>
          {/* </div> */}
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] left-0  z-10 hidden lg:block">
          <SwiperButtonPrev />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] right-0 z-10 hidden lg:block">
          <SwiperButtonNext />
        </div>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
