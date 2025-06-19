import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";

const CarDesign = ({ exterier, interier }) => {
  return (
    <div>
      <div className="container mx-auto p-6">
        {exterier && (
          <div>
            <h2 className="header-text font-bold mb-4">Exterier Design</h2>
            <Swiper
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              {exterier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={item.url}
                      alt="interier"
                      className="w-full h-[450px] object-cover"
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
            <Swiper
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
              }}
            >
              {interier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={item.url}
                      alt="interier"
                      className="w-full h-[450px] object-cover"
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
