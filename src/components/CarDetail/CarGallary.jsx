import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";

function CarGallery({ gallery }) {
  console.log("gallery", gallery);

  if (!gallery || gallery.length === 0) {
    return (
      <div className="container mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Gallery</h2>
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="header-text mt-5 font-bold mb-4">Car Gallery</h2>

      <div className="relative w-full mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={gallery.length > 1}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="car-gallery-swiper"
        >
          {gallery.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="relative group overflow-hidden rounded-lg shadow-lg bg-white">
                <img
                  src={car.url || "/placeholder.svg"}
                  alt={car.alt || `Car image ${index + 1}`}
                  className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-opacity-100 rounded-md p-4 shadow-lg transition-all duration-200 group">
          <IoMdArrowDropleft className="text-3xl" />
        </button>

        <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-opacity-100 rounded-md p-4 shadow-lg transition-all duration-200 group">
          <IoMdArrowDropright className="text-3xl" />
        </button>
      </div>
    </div>
  );
}

export default CarGallery;
