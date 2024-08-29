import { MdOutlineLocalPhone } from "react-icons/md";
const AboutDetail = ({ showroom, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 mt-10 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full md:w-1/2 h-[350px] ">
        <img
          src={showroom.image}
          alt={`${showroom.name} Showroom`}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between h-[350px]">
        <p className="text-[20px] mt-5">{showroom.description}</p>
      </div>
    </div>
  );
};

export default AboutDetail;
