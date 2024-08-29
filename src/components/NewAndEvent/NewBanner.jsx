import newbanner from "./../../assets/images/NewBanner.png";
import { MdArrowRightAlt } from "react-icons/md";

function NewBanner() {
  return (
    <div className="w-full h-[600px] relative">
      <img
        src={newbanner}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute bottom-5 p-10 right-10 z-10 ps-[64px] w-[450px] backdrop-blur-sm bg-white/60">
        <div>
          <p className="text-[24px] font-bold">
            “The Vast Ocean “ : First batch of DEEPLE handover in Thailand
          </p>
          <p className="mt-5 font-semibold leading-8">
            On January 10th, CHANGAN Automotive hosted the first DEEPAL L07 and
            DEEPAL S07 owner delivery ceremony at Asiatique the Riverfront in
            Bangkok under the theme "Touch The Future: Drive With DEEPAL", with
            more than 50 owner representatives present at the delivery site.{" "}
          </p>
          <a
            href="#"
            className="inline-block z-10 w-full px-4 py-2 mt-2 font-bold bg-white text-black hover:bg-gray-200 flex justify-center items-center"
          >
            READ ARTICLE
            <MdArrowRightAlt className="inline-block ms-10 text-3xl" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NewBanner;
