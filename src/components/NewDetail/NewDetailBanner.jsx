import newbanner from "./../../assets/images/NewBanner.png";
import { FaCalendarAlt } from "react-icons/fa";

function NewDetailBanner({ image, title, date }) {
  return (
    <div className="w-full h-[300px] lg:h-[600px] relative">
      <img
        src={image}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute w-full bottom-0 z-10 mx-auto">
        <div className="w-full lg:w-[1000px] mx-auto backdrop-blur-sm bg-white/30 py-10 px-5">
          <p className="text-[18px] md:text-[24px] font-bold">{title}</p>
          <p className="mt-5 text-white font-bold text-[14px] md:text-[18px]">
            {" "}
            <FaCalendarAlt className="inline-block me-2" /> {date}
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewDetailBanner;
