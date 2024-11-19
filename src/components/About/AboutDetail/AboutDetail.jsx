// import { MdOutlineLocalPhone } from "react-icons/md";
const AboutDetail = ({ showroom, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row gap-6 mt-10 ${
        isReversed ? "" : "md:flex-row-reverse"
      }`}
    >
      <div className="w-full md:w-1/2 ">
        <img
          src={showroom.image}
          alt={`${showroom.name} Showroom`}
          className="w-full h-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-between">
        <p className="body-text leading-8">{showroom.description}</p>
      </div>
    </div>
  );
};

export default AboutDetail;
