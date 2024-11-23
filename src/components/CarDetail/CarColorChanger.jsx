import { useState } from "react";
import Car from "./../../assets/images/cs75plus1.svg";

const CarColorChanger = () => {
  const [carColor, setCarColor] = useState("bg-gray-800"); // Default color

  const colors = [
    {
      name: "Eclipse Black",
      class: "bg-gray-800",
      img: "https://i.postimg.cc/NQ8cdBW7/0727-03-copy-min.png",
    },
    {
      name: "Sky Blue",
      class: "bg-blue-900",
      img: "https://i.postimg.cc/qRP5jNs3/2-min.png",
    },
    // { name: "Sunset Red", class: "bg-red-600" },
  ];

  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4 font-changan">
        CS 75 Plus Body Color
      </h1>
      <div className="relative ">
        {colors.find((c) => c.class === carColor)?.img && (
          <img
            src={colors.find((c) => c.class === carColor)?.img}
            alt={colors.find((c) => c.class === carColor)?.name}
            className="w-[700px] h-[400px] object-cover"
          />
        )}
      </div>
      <div className="flex space-x-20 mt-4">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`w-8 h-8 rounded-full ${color.class} border-2 border-gray-400 hover:border-gray-100 cursor-pointer`}
            onClick={() => setCarColor(color.class)}
            aria-label={color.name}
          />
        ))}
      </div>
      <p className="mt-5 text-[20px] font-bold">
        {colors.find((c) => c.class === carColor)?.name}
      </p>
    </div>
  );
};

export default CarColorChanger;
