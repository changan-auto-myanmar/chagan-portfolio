import { useSwiper } from "swiper/react";
import { IoMdArrowDropright } from "react-icons/io";
import { IoMdArrowDropleft } from "react-icons/io";
import PropTypes from "prop-types";

export const SwiperButtonNext = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-4 px-4 rounded "
      onClick={() => swiper.slideNext()}
    >
      {children ? children : <IoMdArrowDropright className="text-3xl" />}
    </button>
  );
};

export const SwiperButtonPrev = ({ children }) => {
  const swiper = useSwiper();
  return (
    <button
      className="bg-white hover:bg-gray-900 hover:text-white text-black font-bold py-4 px-4 rounded "
      onClick={() => swiper.slidePrev()}
    >
      {children ? children : <IoMdArrowDropleft className="text-3xl" />}
    </button>
  );
};

SwiperButtonNext.propTypes = {
  children: PropTypes.node.isRequired,
};

SwiperButtonPrev.propTypes = {
  children: PropTypes.node.isRequired,
};
