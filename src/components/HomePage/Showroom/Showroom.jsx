import { MdOutlineLocalPhone } from "react-icons/md";
const Showroom = ({ showroom, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <div
      className={`flex flex-col lg:flex-row items-center gap-6 mt-10 ${
        isReversed ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className="w-full lg:w-3/5">
        <img
          src={showroom.image}
          alt={`${showroom.name} Showroom`}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>
      <div className="w-full lg:w-2/5 flex flex-col justify-center space-y-4 lg:space-y-6">
        <h2 className="text-xl sm:text-2xl font-bold">
          {showroom.name} Showroom
        </h2>
        <p className="text-sm sm:text-base text-gray-600">
          {showroom.description}
        </p>
        <div className="w-full">
          <a
            href={`tel:${showroom.phone}`}
            className="bg-primary text-white mt-2 sm:mt-5 px-4 sm:px-6 py-2 sm:py-3 rounded w-full inline-block hover:bg-primary/90 flex items-center justify-center text-sm sm:text-base transition-colors"
          >
            <MdOutlineLocalPhone className="mr-2 h-4 w-4" />
            <span>{showroom.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Showroom;
