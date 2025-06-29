import { motion } from "framer-motion";
import { useState } from "react";

const CarColorChanger = ({ carData, name }) => {
  console.log("carDataColor", carData);
  const [carColor, setCarColor] = useState(0); // Default color

  return (
    carData && (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-4 font-changan">
          {name} Body Color
        </h1>
        <div className="relative ">
          {
            <motion.img
              src={carData[carColor].car_color_swatches.url}
              alt={carData[carColor]?.color_name}
              className={`lg:w-[600px] lg:h-auto object-cover`}
            />
          }
        </div>
        <div className="flex flex-wrap gap-4 md:gap-10 mt-4 px-10 md:px-0 items-center">
          {carData.map((color, index) => (
            <img
              key={color._id}
              src={color.car_color_image.url}
              className={`w-12 h-12 rounded-full border-2 border-gray-100 hover:border-gray-400 cursor-pointer`}
              onClick={() => setCarColor(index)}
              aria-label={color.name}
            />
          ))}
        </div>
        <p className="mt-5 text-[20px] font-bold">
          {carData[carColor]?.color_name}
        </p>
      </div>
    )
  );
};

export default CarColorChanger;
