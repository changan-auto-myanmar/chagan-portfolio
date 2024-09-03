import newbanner from "./../../assets/images/NewBanner.png";
import { FaCalendarAlt } from "react-icons/fa";

function NewDetailBanner() {
  return (
    <div className="w-full h-[600px] relative">
      <img
        src={newbanner}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute bottom-0 p-10 z-10 mx-0 md:mx-10 backdrop-blur-sm bg-white/60">
        <div>
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
