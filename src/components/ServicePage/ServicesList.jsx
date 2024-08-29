import aftersale from "../../assets/images/AfterSale.png";
import repair from "./../../assets/images/RepairSevice.png";
import exclusive from "./../../assets/images/Exclusive.png";

import ServiceDetail from "./ServiceDetail";

const ServicesList = () => {
  const services = [
    {
      name: "After Sale Service",
      description: ` 
As one of the top four automobile groups in China and the top selling domestic Chinese automotive brand, Changan Automobile boasts an industrial history stretching back 157 years. With 35 years of experience in building and selling passenger vehicles, Changan is an early leader in the Chinese auto industry.`,
      image: aftersale,
    },
    {
      name: "Auto Repair Service",
      description: `“The Changan group dates back to the Westernization Movement that took place at the end of Qing Dynasty (1636-1912). In November 1862, Li Hongzhang (1823-1901), a Chinese politician, general, and diplomat, founded China's first western style engineering firm, and the beginnings of what has become Changan Automobile.”`,
      image: repair,
    },
    {
      name: "Exclusive Service With Genuine Parts",
      description: `“The Changan group dates back to the Westernization Movement that took place at the end of Qing Dynasty (1636-1912). In November 1862, Li Hongzhang (1823-1901), a Chinese politician, general, and diplomat, founded China's first western style engineering firm, and the beginnings of what has become Changan Automobile.”`,
      image: exclusive,
    },
  ];
  return (
    <div className="container mx-auto mt-10 p-6">
      {/* <p className="text-[32px] font-changan font-bold">About CHANGAN</p> */}
      <div className="flex flex-col gap-12">
        {services.map((showroom, index) => (
          <ServiceDetail key={index} showroom={showroom} index={index} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
