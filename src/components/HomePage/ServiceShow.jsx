import aftersale from "../../assets/images/AfterSale.png";
import repair from "./../../assets/images/RepairSevice.png";
import exclusive from "./../../assets/images/Exclusive.png";

import { MdArrowRightAlt } from "react-icons/md";

function ServiceShow() {
  const services = [
    {
      id: 1,
      title: "After Sale Service",
      image: aftersale, // Replace with actual image paths
    },
    {
      id: 2,
      title: "Auto Repair Service",
      image: repair, // Replace with actual image paths
    },
    {
      id: 3,
      title: "Exclusive Service With Genuine Parts",
      image: exclusive, // Replace with actual image paths
    },
  ];
  return (
    <div className="p-[64px]">
      <h1 className="text-[32px] font-changan font-bold">
        Service for our Customer
      </h1>
      <p className="mt-3 text-[20px]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
        numquam eum dolorem sed fuga architecto iusto dolore ut et cumque rerum
        animi quibusdam, cum doloribus possimus perspiciatis? Tempore, odio
        deleniti.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5">
        {services.map((service) => (
          <div
            className="relative flex flex-col items-center justify-end w-[385px] h-[605px] bg-cover bg-center overflow-hidden shadow-lg border border-gray-700"
            key={service.id}
          >
            <div className="absolute inset-0 bg-black w-full h-[605px]">
              <img src={service.image} className="w-full h-full" />
            </div>
            {/* Dark overlay */}
            <div className="relative z-10 py-4 text-center text-white">
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
            </div>
            <a
              href="#"
              className="inline-block z-10 w-full px-4 py-2 mt-2 font-bold bg-white text-black hover:bg-gray-200 flex justify-between items-center"
            >
              VIEW SERVICES
              <MdArrowRightAlt className="inline-block  text-3xl" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceShow;
