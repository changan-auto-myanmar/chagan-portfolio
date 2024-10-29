import { useNavigate } from "react-router-dom";
import changan from "./../../../assets/images/changan-banner.jpg";
import deepal from "./../../../assets/images/deepal-banner.jpg";
import kaicheng from "./../../../assets/images/kaicheng-banner.png";

export default function CarBrand() {
  const navigate = useNavigate();
  const handleClick = (path) => {
    navigate(`car-model/${path}`);
  };
  return (
    <div className="py-2 md:py-10 lg:py-10">
      <h2 className="text-center header-text font-changan font-bold my-8">
        Car Models of our Products
      </h2>
      <div className="flex-col lg:flex-row lg:flex justify-between items-center relative overflow-hidden">
        <div
          className="flex-1 text-center overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => handleClick(0)}
        >
          <img
            alt="Changan Auto"
            src={changan}
            className="-translate-x-0 lg:-translate-x-40"
          />
        </div>
        <div
          className="flex-1 text-center overflow-hidden cursor-pointer lg:hidden hover:scale-105 transition duration-300"
          onClick={() => handleClick(1)}
        >
          <img
            alt="Deepal"
            src={deepal}
            className="-translate-x-0 lg:-translate-x-40"
          />
        </div>
        <div
          className="flex-1 text-center absolute left-1/2 transform -translate-x-1/2 z-10 cursor-pointer hidden lg:block hover:scale-105 transition duration-300"
          style={{ clipPath: "polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)" }}
          onClick={() => handleClick(1)}
        >
          <img alt="Deepal" className="w-full object-cover" src={deepal} />
        </div>
        <div
          className="flex-1 text-center overflow-hidden cursor-pointer hover:scale-105 transition duration-300"
          onClick={() => handleClick(2)}
        >
          <img
            alt="Kaicheng"
            src={kaicheng}
            className="translate-x-0 lg:translate-x-40"
          />
        </div>
      </div>
    </div>
  );
}
