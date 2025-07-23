// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import { FaCalendarAlt } from "react-icons/fa";
import { Autoplay } from "swiper/modules";

function NewDetailBanner({ image, title, date }) {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      loop={true}
      speed={1000}
      autoplay={{
        delay: 1000,
      }}
      className="relative h-[400px] md:h-[450px] lg:h-[calc(100vh-80px)] z-20 bg-primary bg-cover bg-center bg-no-repeat"
    >
      {image?.length > 0 &&
        image.map((banner) => (
          <SwiperSlide key={banner._id}>
            <img
              src={banner.url}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </SwiperSlide>
        ))}

      <div className="absolute w-full bottom-0 z-10 mx-auto">
        <div className="w-full lg:w-[1000px] mx-auto backdrop-blur-sm bg-white/30 py-10 px-5">
          <p className="text-[18px] md:text-[24px] font-bold">{title}</p>
          <p className="mt-5 flex items-center text-white font-bold text-[14px] md:text-[18px]">
            <FaCalendarAlt className="inline-block me-2" />{" "}
            {new Date(date).toDateString()}
          </p>
        </div>
      </div>
    </Swiper>
  );
}

export default NewDetailBanner;
