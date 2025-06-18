import { useSwiper } from "swiper/react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";

export const SwiperButtonNext = ({ children, activeSlideId, total }) => {
  // console.log("activeSlideId", activeSlideId);
  // console.log("total", total);
  const swiper = useSwiper();

  return (
    <button
      className={`bg-white hover:bg-gray-900 border border-gray-300 shadow shadow-gray-500 text-black font-bold p-2 md:p-4 rounded ${
        activeSlideId === total - 1
          ? "opacity-50"
          : "hover:text-white active:scale-90"
      } `}
      onClick={() => swiper.slideNext()}
    >
      {children ? children : <IoMdArrowDropright className="text-3xl" />}
    </button>
  );
};

export const SwiperButtonPrev = ({ children, activeSlideId }) => {
  const swiper = useSwiper();
  // console.log("activeSlideId", activeSlideId);
  return (
    <button
      className={`bg-white hover:bg-gray-900 border border-gray-300 shadow shadow-gray-500 text-black font-bold p-2 md:p-4 rounded ${
        activeSlideId == 0 ? "opacity-50" : "hover:text-white active:scale-90"
      } `}
      onClick={() => swiper.slidePrev()}
    >
      {children ? children : <IoMdArrowDropleft className="text-3xl" />}
    </button>
  );
};
