import aftersale from "../../assets/images/services/afyersale.png";
import repair from "./../../assets/images/services/IMG_1344.png";
import exclusive from "./../../assets/images/services/IMG_6302.png";
import service from "./../../assets/images/services/IMG_9047.png";
import spair from "./../../assets/images/services/IMG_9050.png";

import { MdArrowRightAlt } from "react-icons/md";

function ServiceShow() {
  return (
    <div className="mt-10 p-5 lg:p-20">
      <h1 className="header-text font-changan font-bold">
        Service for our Customer
      </h1>
      <p className="mt-4 text-lg md:text-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        numquam eum dolorem sed fuga architecto iusto dolore ut et cumque rerum
        animi quibusdam, cum doloribus possimus perspiciatis? Tempore, odio
        deleniti.
      </p>
      {/* service list */}
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="col-span-1 md:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src={aftersale}
                  alt="Car with open hood"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 md:py-10 md:px-5 flex flex-col justify-between">
                <h2 className="text-blue-600 text-sm font-semibold">Service</h2>
                <div>
                  <h3 className="text-2xl font-bold mb-4 ">
                    After Sale Service
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Our technicians offer comprehensive engine, transmission,
                    suspension, exhaust, electrical repairs, and routine
                    maintenance. We use advanced diagnostics for accurate
                    repairs.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-600 font-semibold hover:underline"
                  >
                    VIEW SERVICES
                    <MdArrowRightAlt className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={repair}
              alt="Technician working on car exterior"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-blue-600 text-sm font-semibold mb-2">
                Survey
              </h2>
              <h3 className="text-xl font-bold mb-4">After Sale Service</h3>
              <p className="text-gray-600 mb-4">
                Our technicians offer comprehensive engine, transmission,
                suspension, exhaust, electrical repairs, and routine
                maintenance. We use advanced diagnostics for accurate repairs.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                VIEW SERVICES
                <MdArrowRightAlt className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={exclusive}
              alt="Mechanics working under a raised car"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-blue-600 text-sm font-semibold mb-2">
                Spare Parts
              </h2>
              <h3 className="text-xl font-bold mb-4">After Sale Service</h3>
              <p className="text-gray-600 mb-4">
                Our technicians offer comprehensive engine, transmission,
                suspension, exhaust, electrical repairs, and routine
                maintenance. We use advanced diagnostics for accurate repairs.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                VIEW SERVICES
                <MdArrowRightAlt className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={spair}
              alt="Technician working on car exterior"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-blue-600 text-sm font-semibold mb-2">
                Survey
              </h2>
              <h3 className="text-xl font-bold mb-4">After Sale Service</h3>
              <p className="text-gray-600 mb-4">
                Our technicians offer comprehensive engine, transmission,
                suspension, exhaust, electrical repairs, and routine
                maintenance. We use advanced diagnostics for accurate repairs.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                VIEW SERVICES
                <MdArrowRightAlt className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={service}
              alt="Mechanics working under a raised car"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-blue-600 text-sm font-semibold mb-2">
                Spare Parts
              </h2>
              <h3 className="text-xl font-bold mb-4">After Sale Service</h3>
              <p className="text-gray-600 mb-4">
                Our technicians offer comprehensive engine, transmission,
                suspension, exhaust, electrical repairs, and routine
                maintenance. We use advanced diagnostics for accurate repairs.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-blue-600 font-semibold hover:underline"
              >
                VIEW SERVICES
                <MdArrowRightAlt className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceShow;
