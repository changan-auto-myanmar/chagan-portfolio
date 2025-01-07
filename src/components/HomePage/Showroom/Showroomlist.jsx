import ygn from "./../../../assets/images/showroom/ygnshowroom.png";
import mdy from "./../../../assets/images/showroom/mandalayshowroom.png";
import Showroom from "./Showroom";
const ShowroomList = () => {
  const showrooms = [
    {
      name: "Yangon",
      description:
        "Yangon Showroom - No-38, Mindama Road, Mayangone Tsp, Yangon",
      phone: "+959 251 232 050",
      image: ygn,
    },
    {
      name: "Mandalay",
      description:
        "Mandalay Showroom - Between 41 & 42 St, Mandalay & Pyin Oo Lwin bypass road, Mandalay",
      phone: "+959 882 266 919",
      image: mdy,
    },
  ];
  return (
    <div className="my-10 p-5 sm:p-10 lg:px-0 lg:py-[64px] lg:w-[1000px] mx-auto">
      <p className="header-text font-changan font-bold">
        Our Showroom in Myanmar
      </p>
      <div className="flex flex-col md:gap-12">
        {showrooms.map((showroom, index) => (
          <Showroom key={index} showroom={showroom} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ShowroomList;
