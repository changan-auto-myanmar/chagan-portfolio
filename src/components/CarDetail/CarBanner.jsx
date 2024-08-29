import Car from "./../../assets/images/A20W4047f.png";
import { HiOutlineDownload } from "react-icons/hi";

function CarBanner() {
  return (
    <div className="w-full h-[500px] relative">
      <img src={Car} className="w-full h-full object-cover" />
      <div className="absolute bottom-[64px] left-0 z-10 ps-[64px]">
        <p className=" text-white text-[64px] font-changan font-bold">
          "Drive Innovation,
          <br /> Embrace Excellence."
        </p>
        <span className="font-changan text-[24px] text-white ">CS 75 Plus</span>
      </div>
      <div className="absolute bottom-[64px] right-0 z-10 pe-[64px] space-x-[24px]">
        <button className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-bold flex items-center justify-center">
          <span>DOWNLOAD BROCHURES</span>
          <HiOutlineDownload className="inline-block ms-3" />
        </button>
      </div>
    </div>
  );
}

export default CarBanner;
