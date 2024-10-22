import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";

const CarDesign = ({ carDesign }) => {
  console.log(carDesign);
  return (
    <div>
      {carDesign.map((item) => (
        <div className="max-w-4xl mx-auto p-4" key={item.name}>
          <h2 className="text-2xl font-bold mb-4">{item.name} Design</h2>

          <Swiper spaceBetween={30} slidesPerView={"auto"}>
            <SwiperSlide className="w-[550px]">
              <img
                src={item.image}
                alt="Exterior Design 1"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[550px]">
              <img
                src={item.image}
                alt="Exterior Design 2"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <SwiperSlide className="w-[550px]">
              <img
                src={item.image}
                alt="Exterior Design 3"
                className="w-full h-auto rounded-lg"
              />
            </SwiperSlide>
            <div className="absolute top-1/2 -translate-y-[50%] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block">
              <div className="flex flex-col gap-5">
                <SwiperButtonPrev />
                <SwiperButtonNext />
              </div>
            </div>
            {/* Add more SwiperSlides as needed */}
          </Swiper>

          <p className="mt-4">{item.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default CarDesign;
