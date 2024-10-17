import ygn from "./../../../assets/images/yangonshowroom.png";
import mdy from "./../../../assets/images/mandalayshowroom.png";
import Showroom from "./Showroom";
const ShowroomList = () => {
  const showrooms = [
    {
      name: "Yangon",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      phone: "+95 9 25 123 2050",
      image: ygn,
    },
    {
      name: "Mandalay",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      phone: "+95 9 25 123 2050",
      image: mdy,
    },
  ];
  return (
    <div className="p-5 lg:p-20">
      <p className="header-text font-changan font-bold">
        Our Showroom in Myanmar
      </p>
      <div className="flex flex-col lg:gap-12">
        {showrooms.map((showroom, index) => (
          <Showroom key={index} showroom={showroom} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ShowroomList;
