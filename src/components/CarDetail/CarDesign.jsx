import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";

const CarDesign = ({ exterier, interier }) => {
  return (
    <div>
      <div className="container mx-auto p-6">
        {exterier && (
          <div>
            <h2 className="header-text font-bold mb-4">Exterier Design</h2>
            <Swiper loop={true} spaceBetween={30} slidesPerView={"auto"}>
              {exterier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={`${import.meta.env.VITE_API_URL}api/v1/${
                        item.filepath
                      }`}
                      alt="interier"
                      className="w-full h-[600px] object-cover"
                    />
                  </div>
                  {/* <p className="mt-4">{item.desc}</p> */}
                </SwiperSlide>
              ))}
              <div className="absolute top-1/2 -translate-y-[50%] right-0 z-10 pe-3 md:pe-[12px] space-x-[24px] hidden md:block">
                <div className="flex flex-col gap-5">
                  <SwiperButtonPrev />
                  <SwiperButtonNext />
                </div>
              </div>
            </Swiper>
          </div>
        )}

        {interier && (
          <div>
            <h2 className="header-text mt-5 font-bold mb-4">Interier Design</h2>
            <Swiper loop={true} spaceBetween={30} slidesPerView={"auto"}>
              {interier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={`${import.meta.env.VITE_API_URL}api/v1/${
                        item.filepath
                      }`}
                      alt="interier"
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                  <p className="mt-4">{item.desc}</p>
                </SwiperSlide>
              ))}
              <div className="absolute top-1/2 -translate-y-[50%] right-0 z-10 pe-3 md:pe-[12px] space-x-[24px] hidden md:block">
                <div className="flex flex-col gap-5">
                  <SwiperButtonPrev />
                  <SwiperButtonNext />
                </div>
              </div>
            </Swiper>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarDesign;
