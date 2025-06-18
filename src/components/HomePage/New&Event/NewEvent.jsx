import { MdArrowRightAlt } from "react-icons/md";

// import { tabs } from "./../../NewAndEvent/ContentTap/ContentTap";
import Content from "../../NewAndEvent/ContentTap/Content";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";
import { Link } from "react-router-dom";
import getNews from "../../../api/home/getnews";
import { useQuery } from "@tanstack/react-query";

function YouTube() {
  const { data } = useQuery({
    queryKey: ["news"],
    queryFn: getNews,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });
  // console.log("new", data.data.csrContents);
  const swiperRef = useRef(null);
  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };
  // console.log(tabs);
  return (
    <div className="mt-10 p-5 sm:p-10 lg:p-0 lg:py-[64px] lg:w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: Title */}
        <div className="text-left">
          <h2 className="header-text font-bold text-black font-changan">
            Our Latest News of CHANGAN
          </h2>
        </div>

        {/* Right Column: Description and Button */}
        <div className="col-span-2 md:ps-10">
          <p className="mb-10 body-text mt-5 md:mt-0 font-semibold">
            Stay up to date with the latest news and updates from CHANGAN. From
            new model releases to exciting innovations, find all the details
            here.
          </p>
          <div className="flex justify-between">
            <Link
              to="/new"
              className="inline-flex items-center px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 "
            >
              <span className="mr-10 font-semibold">All News & Events</span>
              <MdArrowRightAlt className="text-3xl text-primary" />
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
          {data?.data?.csrContents?.length > 0 &&
            data?.data?.csrContents?.map((tab, index) => (
              <SwiperSlide key={index} className="xs:w-full sm:w-1/2 lg:w-1/3">
                <Content tab={tab} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
}

export default YouTube;
