import { MdOutlineLocalPhone } from "react-icons/md";
const Showroom = ({ showroom, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center gap-6 mt-10 ${
        isReversed ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className=" md:w-3/5 lg:h-[440px]  ">
        <img
          src={showroom.image}
          alt={`${showroom.name} Showroom`}
          className="w-[660px] h-full rounded-lg"
        />
      </div>
      <div className="w-full md:w-2/5 flex flex-col justify-between lg:h-[350px]">
        <h2 className="herder-text font-changan font-bold">
          {showroom.name} Showroom
        </h2>
        <p className="body-text lg:text-[20px] mt-5">{showroom.description}</p>
        <p>
          <a
            href={`tel:${showroom.phone}`}
            className="bg-indigo-950 text-white mt-5 text-[24px] px-6 py-3 rounded w-full inline-block hover:bg-black hover:text-white flex items-center justify-center"
          >
            <span className="flex items-center">
              <MdOutlineLocalPhone />
              <span className="ms-5 body-text">{showroom.phone}</span>
            </span>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Showroom;
