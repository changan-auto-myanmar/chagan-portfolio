import { MdArrowRightAlt } from "react-icons/md";
const ServiceDetail = ({ showroom, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 mt-10 px-30 md:pb-20 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-1/2 lg:h-[350px] flex justify-center items-center">
        <img
          src={showroom.image}
          alt={`${showroom.name} Showroom`}
          className="lg:w-[300px] h-full rounded-lg"
        />
      </div>
      <div className="w-full  md:w-1/2 flex flex-col lg:px-20 justify-between lg:h-[350px]">
        <p className="header-text font-changan font-bold">{showroom.name}</p>
        <p className="body-text mt-5">{showroom.description}</p>
        <a
          href="#"
          className="inline-block border mt-5 border-black rounded shadow  z-10 w-full px-4 py-2 mt-2 font-bold bg-white text-black hover:bg-gray-200 flex justify-center items-center"
        >
          VIEW SERVICES
          <MdArrowRightAlt className="inline-block ms-20 text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default ServiceDetail;
