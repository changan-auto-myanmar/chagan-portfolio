// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowRightAlt } from "react-icons/md";
// import { motion } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperButtonNext, SwiperButtonPrev } from "./../../SwiperBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const CarCarousel = ({ tab }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  //console.log//(activeIndex);
  // //console.log//(typeof tab, tab);
  return (
    <div className="w-screen lg:w-[800px] px-10 relative">
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
          <SwiperSlide
            key={item.id}
            className="flex items-center flex-col h-[300px] md:h-[350px]"
          >
            <img src={item.img} className="" />
          </SwiperSlide>
        ))}
        <div className="text-center mt-[-100px] sm:mt-[-80px] md:mt-[-110px]">
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
          <div>
            <Link
              to={`/car-detail/${tab[activeIndex]?.id}`}
              className="mt-2 inline-block border border-black px-4 py-2 text-black rounded hover:bg-white hover:text-black"
            >
              EXPLORE
              <MdArrowRightAlt className="inline-block ms-10 text-3xl" />
            </Link>
          </div>
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
