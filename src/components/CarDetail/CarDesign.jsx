import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { useParams } from "react-router-dom";

const CarDesign = ({ carData }) => {
  const { id } = useParams();
  return (
    <div>
      <div className="container mx-auto p-6">
        {carData[id]?.exterier && (
          <div>
            <h2 className="header-text font-bold mb-4">Exterier Design</h2>
            <Swiper loop={true} spaceBetween={30} slidesPerView={"auto"}>
              {carData[id].exterier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={item}
                      alt="interier"
                      className="w-full h-[600px] object-cover"
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

        {carData[id]?.interier && (
          <div>
            <h2 className="header-text mt-5 font-bold mb-4">Interier Design</h2>
            <Swiper loop={true} spaceBetween={30} slidesPerView={"auto"}>
              {carData[id].interier.map((item, index) => (
                <SwiperSlide key={index} className="w-[550px]">
                  <div className="relative">
                    <img
                      src={item}
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
