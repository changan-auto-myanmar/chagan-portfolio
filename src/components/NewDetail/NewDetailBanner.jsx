import newbanner from "./../../assets/images/NewBanner.png";
import { FaCalendarAlt } from "react-icons/fa";

function NewDetailBanner() {
  return (
    <div className="w-full h-[300px] lg:h-[600px] relative">
      <img
        src={newbanner}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute w-full bottom-0 z-10 mx-auto">
        <div className="w-full lg:w-[1000px] mx-auto backdrop-blur-sm bg-white/30 py-10 px-5">
          <p className="text-[18px] md:text-[24px] font-bold">
            “The Vast Ocean “ : First batch of DEEPLE handover in Thailand
          </p>
          <p className="mt-5 text-white font-bold text-[14px] md:text-[18px]">
            {" "}
            <FaCalendarAlt className="inline-block me-2" /> Feb 23, 2023
          </p>
        </div>
      </div>
    </div>
  );
}

export default NewDetailBanner;
