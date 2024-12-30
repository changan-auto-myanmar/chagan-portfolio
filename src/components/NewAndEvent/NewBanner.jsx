import MyButton from "../button/MyButton";
import newbanner from "./../../assets/images/NewBanner.png";
import { MdArrowRightAlt } from "react-icons/md";

function NewBanner() {
  return (
    <div className="w-full h-[300px] md:h-[600px] relative">
      <img
        src={newbanner}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute bottom-0 mx-5 p-10 md:right-10 z-5  md:ps-[64px] mb-0 md:mb-[200px] lg:mb-[50px] w-auto md:w-[450px] backdrop-blur-sm bg-white/60">
        <div className="">
          <p className="text-[18px] md:text-[20px] font-bold">
            “The Vast Ocean “ : First batch of DEEPLE handover in Thailand
          </p>
          <p className="text-[12px] md:text-[14px] mt-5 font-semibold leading-8 hidden lg:block mb-5">
            On January 10th, CHANGAN Automotive hosted the first DEEPAL L07 and
            DEEPAL S07 owner delivery ceremony at Asiatique the Riverfront in
            Bangkok under the theme "Touch The Future: Drive With DEEPAL", with
            more than 50 owner representatives present at the delivery site.{" "}
          </p>
          <MyButton text={"READ ARTICLE"} />
        </div>
      </div>
    </div>
  );
}

export default NewBanner;
