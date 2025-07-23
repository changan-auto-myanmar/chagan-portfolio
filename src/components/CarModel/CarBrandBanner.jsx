// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperButtonNext, SwiperButtonPrev } from "../SwiperBtn";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/navigation";
import changan from "./../../assets/images/brandoverview/changanbanner.jpg";
import deepel from "./../../assets/images/brandoverview/deepalBanner.png";
import kaisen from "./../../assets/images/brandoverview/kaichengbanner.jpg";
import CarCarousel from "../HomePage/CarModelShow/CarCarousel";
import { useState } from "react";
import BrandOverview from "./BrandOverview";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getCarDetail from "./../../api/home/getCarDetails.js";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

function CarBrandBanner() {
  const { id } = useParams();
  const [activeSlideId, setActiveSlideId] = useState(id);
  const carModelarray = [
    {
      id: 1,
      name: "CHANGAN Car Model",
      img: changan,
    },
    {
      id: 2,
      name: "DEEPAL Car Model",
      img: deepel,
    },
    {
      id: 3,

      name: "KAICHENG Car Model",
      img: kaisen,
    },
  ];

  const { data, refetch } = useQuery({
    queryKey: ["carDetail", activeSlideId],
    queryFn: () =>
      getCarDetail(carModelarray[activeSlideId]?.name.split(" ")[0]), // Modify to accept a parameter
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10, // Cache for 10 minutes
    refetchOnWindowFocus: false,
  });

  // console.log("cardetail", data);

  const handleSlideChange = (swiper) => {
    setActiveSlideId(swiper.activeIndex);
    refetch();
  };

  return (
    <div>
      <Swiper
        loop={false}
        modules={[EffectFade, Pagination]}
        effect="fade"
        pagination={{
          clickable: true,
        }}
        className="relative h-[400px] md:h-[500px] lg:h-[calc(100vh-80px)] overflow-hidden bg-primary car-brand-banner"
        initialSlide={activeSlideId}
        onSlideChange={handleSlideChange}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        {carModelarray.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-full">
              <img src={item.img} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-[34px] md:bottom-[64px] right-0 z-10 pe-3 md:pe-[64px] space-x-[24px] hidden md:block">
          <SwiperButtonPrev activeSlideId={activeSlideId} />
          <SwiperButtonNext
            activeSlideId={activeSlideId}
            total={carModelarray.length}
          />
        </div>
      </Swiper>
      {/* car carousel */}
      <div className="flex justify-center">
        {data && <CarCarousel tab={data} />}
      </div>
      {/* brand Overview */}
      <div className="mt-5">
        <BrandOverview id={activeSlideId} />
      </div>
    </div>
  );
}

export default CarBrandBanner;
