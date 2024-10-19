import Car from "./../../assets/images/A20W4047f.png";
import { HiOutlineDownload } from "react-icons/hi";

function CarBanner() {
  return (
    <div className="w-full h-screen relative">
      <img src={Car} className="w-full h-full object-cover" />
      <div className="absolute bottom-[200px] md:bottom-[124px] left-0 z-10 ps-[64px]">
        <p className=" text-white header-text font-changan font-bold">
          "Drive Innovation,
          <br /> Embrace Excellence."
        </p>
        <span className="font-changan text-[24px] text-white ">CS 75 Plus</span>
      </div>
      <div className="absolute bottom-[100px] w-[300px] md:bottom-[64px] right-1/2 md:right-0 translate-x-[50%] md:translate-x-0 md:right-0 z-10 p-0 md:pe-[64px] space-x-[24px]">
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-bold flex items-center justify-center">
          <span>DOWNLOAD BROCHURES</span>
          <HiOutlineDownload className="inline-block ms-3" />
        </button>
      </div>
    </div>
  );
}

export default CarBanner;
