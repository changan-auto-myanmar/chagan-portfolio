// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { EffectFade } from "swiper/modules";
import { motion } from "framer-motion"; // Importing motion
import { useQuery } from "@tanstack/react-query";

// api
import getHeroBanner from "../../api/home/herobanner";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

function HeroBanner() {
  const { data } = useQuery({
    queryKey: ["photos"],
    queryFn: getHeroBanner,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    refetchOnWindowFocus: false, // Don't refetch when window regains focus
  });

  // console.log("banner", data.data.banners);
  return (
    <Swiper
      modules={[EffectFade]}
      effect="fade"
      loop={true}
      className="relative h-[400px] md:h-[450px] lg:h-[100vh] z-20 bg-primary relative"
    >
      {data?.data?.banners?.length > 0 &&
        data?.data?.banners.map((banner) => (
          <SwiperSlide key={banner._id} className="">
            <img
              src={banner.url}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <p>{banner.filepath}</p>
          </SwiperSlide>
        ))}

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 1 }}
        className="absolute bottom-[64px] md:bottom-[64px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block"
      >
        <SwiperButtonPrev />
        <SwiperButtonNext />
      </motion.div>
      {/* <motion.span
        className="absolute bottom-[64px] md:bottom-[64px] left-0 z-10 ps-3 md:ps-[64px] text-white text-[20px] md:text-[34px] lg:text-[64px] font-changan font-bold"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 40 }}
        transition={{ duration: 1 }}
      >
        CHANGAN,
        <br /> Smart Your Future
      </motion.span> */}
    </Swiper>
  );
}

export default HeroBanner;
