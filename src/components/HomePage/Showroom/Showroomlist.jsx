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
    <div className="container mx-auto mt-10 p-6">
      <p className="text-[32px] font-changan font-bold">
        Our Showroom in Myanmar
      </p>
      <div className="flex flex-col gap-12">
        {showrooms.map((showroom, index) => (
          <Showroom key={index} showroom={showroom} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ShowroomList;
