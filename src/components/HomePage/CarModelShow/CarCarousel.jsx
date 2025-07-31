// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowRightAlt } from "react-icons/md";

// Import Swiper styles
import "swiper/css";

import { Navigation, Pagination } from "swiper/modules";
import { SwiperButtonNext, SwiperButtonPrev } from "./../../SwiperBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const CarCarousel = ({ tab }) => {
  // console.log("tab", tab);
  const [activeIndex, setActiveIndex] = useState(0);
  // console.log
  return (
    <div className="w-screen lg:w-[800px] md:px-5 relative">
      <Swiper
        // loop={true}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        className="car-carouselss"
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex); // Update active index on slide change
        }}
      >
        {tab.map((item) => (
          <SwiperSlide key={item._id} className="flex items-center flex-col">
            <img
              loading="lazy"
              src={item?.mockup?.url}
              className="mx-auto w-[400px] sm:w-auto h-auto sm:h-[350px]"
            />
          </SwiperSlide>
        ))}
        <div className="text-center">
          <motion.h2
            key={activeIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-semibold pt-3"
          >
            {tab[activeIndex]?.car_name}
          </motion.h2>
          <Link
            to={`/car-detail/${tab[activeIndex]?._id}`}
            className="mt-2 inline-block border border-black px-4 py-2 text-black rounded hover:bg-black hover:text-white cursor-pointer transition-colors duration-300"
          >
            EXPLORE
            <MdArrowRightAlt className="inline-block ms-10 text-3xl" />
          </Link>
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] left-0  z-10 hidden md:block">
          <SwiperButtonPrev activeSlideId={activeIndex} />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] right-0 z-10 hidden md:block">
          <SwiperButtonNext activeSlideId={activeIndex} total={tab.length} />
        </div>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
