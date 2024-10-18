import { MdArrowRightAlt } from "react-icons/md";

import { tabs } from "./../../NewAndEvent/ContentTap/ContentTap";
import Content from "../../NewAndEvent/ContentTap/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";

function YouTube() {
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  console.log(tabs);
  return (
    <div className="p-5 lg:p-20 lg:pb-5">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: Title */}
        <div className="text-left">
          <h2 className="header-text font-bold text-black font-changan">
            Our Latest News of CHANGAN
          </h2>
        </div>

        {/* Right Column: Description and Button */}
        <div className="col-span-2">
          <p className=" mb-10 body-text mt-5 md:mt-0">
            As one of the top four automobile groups in China and the top
            selling domestic Chinese automotive brand, Changan Automobile boasts
            an industrial history stretching back 157 years.
          </p>
          <div className="flex justify-between">
            <Link
              to="/new"
              className="inline-flex items-center px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 "
            >
              <span className="mr-10">All News & Events</span>
              <MdArrowRightAlt className="text-3xl" />
            </Link>

            <div className="flex space-x-4 hidden md:block">
              <button
                className="bg-white hover:bg-gray-900 shadow shadow-gray-500 hover:text-white text-black font-bold py-4 px-4 rounded "
                onClick={handlePrev}
              >
                <IoMdArrowDropleft className="text-3xl" />
              </button>
              <button
                className="bg-white hover:bg-gray-900 shadow shadow-gray-500 hover:text-white text-black font-bold py-4 px-4 rounded "
                onClick={handleNext}
              >
                <IoMdArrowDropright className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 w-full">
        <Swiper spaceBetween={30} slidesPerView={"auto"} ref={swiperRef}>
          {tabs.map((tab, index) => (
            <SwiperSlide key={index} className="w-full md:w-1/3">
              <Content tab={tab} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default YouTube;
