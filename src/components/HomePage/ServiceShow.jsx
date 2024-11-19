import aftersale from "../../assets/images/services/service.png";
import paint from "./../../assets/images/services/paint.png";
import mobile from "./../../assets/images/services/mobile.png";

import { MdArrowRightAlt } from "react-icons/md";

function ServiceShow() {
  return (
    <div className="py-[64px]">
      <div className="p-5 lg:p-0 lg:w-[1000px] mx-auto">
        <h1 className="header-text font-changan font-bold ">
          Service for our Customer
        </h1>
        <p className="mt-5 body-text font-medium">
          At CHANGAN Myanmar, our skilled technicians provide trusted
          maintenance and repairs using genuine parts to keep your vehicle safe
          and reliable. Our 4S-standard workshop ensures every service meets the
          highest quality standards, giving you confidence on every drive.
        </p>
      </div>

      {/* service list */}
      <div className="px-5 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:w-[1000px] mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={aftersale}
              alt="Technician working on car exterior"
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5 lg:h-[350px] flex flex-col justify-between">
              <div className="">
                <h3 className="text-xl font-bold mb-4">After Sale Service</h3>
                <p className="text-gray-600 mb-4">
                  Providing quality service with Changan Myanmar's highly
                  qualified technicians, we address customer concerns with
                  thorough repairs and expert technical support. Genuine parts
                  are used to ensure vehicle quality and safety in our 4S
                  standard workshop facility.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex items-center font-semibold hover:text-primary"
              >
                VIEW SERVICES
                <div className="bg-primary p-1 ms-5 rounded-sm">
                  <MdArrowRightAlt className="text-white" size={30} />
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={paint}
              alt="Technician working on car exterior"
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5 lg:h-[350px] flex flex-col justify-between">
              <div className="">
                <h3 className="text-xl font-bold mb-4">Paint Booth</h3>
                <p className="text-gray-600 mb-4">
                  Our Changan Myanmar's paint booth is dedicated to quality and
                  customer satisfaction. We use the original genuine paint codes
                  and high-quality coatings, ensuring a perfect finish. An
                  additional warranty on our paint coating provides extra peace
                  of mind.
                </p>
              </div>
              <a
                href="#"
                className="inline-flex w-full items-center font-semibold hover:text-primary"
              >
                VIEW SERVICES
                <div className="bg-primary p-1 ms-5 rounded-sm">
                  <MdArrowRightAlt className="text-white" size={30} />
                </div>
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={mobile}
              alt="Mechanics working under a raised car"
              className="w-full h-[200px]"
            />
            <div className="p-5 lg:h-[350px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4">Mobile Service</h3>
                <p className="text-gray-600 mb-4">
                  Our customer service team provides immediate assistance over
                  the phone, pinpointing breakdown locations and dispatching a
                  mobile service vehicle promptly. We offer quick roadside
                  repairs to help customers in challenging situations.
                </p>
              </div>
              <button className="inline-flex items-center font-semibold hover:text-primary">
                VIEW SERVICES
                <div className="bg-primary p-1 ms-5  rounded-sm">
                  <MdArrowRightAlt className="text-white" size={30} />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceShow;
