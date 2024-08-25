// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { MdArrowRightAlt } from "react-icons/md";

// Import Swiper styles
import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperButtonNext, SwiperButtonPrev } from "./../../SwiperBtn";

const CarCarousel = ({ tab }) => {
  // console.log(typeof tab, tab);
  return (
    <div className="w-[800px] relative">
      <Swiper slidesPerView={1} modules={[Navigation]} navigation>
        {tab.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex items-center flex-col h-[350px]"
          >
            <img src={item.img} className="" />
            <div className="text-center absolute bottom-0">
              <h2 className="text-xl font-semibold pt-3">{item.name}</h2>
              <a
                href="#"
                className="mt-2 inline-block border border-black px-4 py-2 text-black rounded hover:bg-white hover:text-black"
              >
                EXPLORE
                <MdArrowRightAlt className="inline-block ms-10 text-3xl" />
              </a>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute top-[50%] translate-y-[-50%] left-0  z-10">
          <SwiperButtonPrev />
        </div>
        <div className="absolute top-[50%] translate-y-[-50%] right-0 z-10">
          <SwiperButtonNext />
        </div>
      </Swiper>
    </div>
  );
};

export default CarCarousel;
