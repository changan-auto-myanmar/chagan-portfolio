import paint from "./../../assets/images/services/paint.png";
import mobile from "./../../assets/images/services/mobile.png";

import { MdArrowRightAlt } from "react-icons/md";
import ServiceFrom from "./ServiceFrom";

function ServiceList() {
  return (
    <div className="mx-auto px-5 sm:px-10 lg:px-0 py-[64px] lg:w-[1000px]">
      <div className="">
        <h1 className="header-text font-changan font-bold ">
          Services for our Customer
        </h1>
        <p className="mt-5 body-text font-semibold">
          At CHANGAN Myanmar, our skilled technicians provide trusted
          maintenance and repairs using genuine parts to keep your vehicle safe
          and reliable. Our 4S-standard workshop ensures every service meets the
          highest quality standards, giving you confidence on every drive.
        </p>
      </div>

      {/* service list */}
      <div className="mt-10 w-full">
        <div className="flex flex-col md:flex-row py-[64px] ">
          <div className="md:w-2/5 mb-8 md:mb-0">
            <h1 className="header-text text-primary font-bold">
              After Sale Service
            </h1>

            <p className="mt-4">
              Providing quality service with Changan Myanmar's highly qualified
              technicians, we address customer concerns with thorough repairs
              and expert technical support. Genuine parts are used to ensure
              vehicle quality and safety in our 4S standard workshop facility.
            </p>
          </div>
          <div className="md:w-3/5 md:ps-10">
            <ServiceFrom />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={paint}
              alt="Technician working on car exterior"
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5  lg:h-[300px] flex flex-col justify-between">
              <div className="">
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Paint Booth
                </h3>
                <p className="mb-4">
                  Our Changan Myanmar's paint booth is dedicated to quality and
                  customer satisfaction. We use the original genuine paint codes
                  and high-quality coatings, ensuring a perfect finish. An
                  additional warranty on our paint coating provides extra peace
                  of mind.
                </p>
              </div>
              {/* <Link
                to="/services"
                className="inline-flex w-full items-center font-semibold hover:text-primary"
              >
                VIEW SERVICES
                <div className="bg-primary p-1 ms-5 rounded-sm">
                  <MdArrowRightAlt className="text-white" size={30} />
                </div>
              </Link> */}
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={mobile}
              alt="Mechanics working under a raised car"
              className="w-full h-[200px] object-cover"
            />
            <div className="p-5 lg:h-[300px] flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold mb-4 text-primary">
                  Mobile Service
                </h3>
                <p className="mb-4">
                  Our customer service team provides immediate assistance over
                  the phone, pinpointing breakdown locations and dispatching a
                  mobile service vehicle promptly. We offer quick roadside
                  repairs to help customers in challenging situations.
                </p>
              </div>
              {/* <Link
                to="/services"
                className="inline-flex w-full items-center font-semibold hover:text-primary"
              >
                VIEW SERVICES
                <div className="bg-primary p-1 ms-5 rounded-sm">
                  <MdArrowRightAlt className="text-white" size={30} />
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceList;
