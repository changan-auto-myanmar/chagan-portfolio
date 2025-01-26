import { motion } from "framer-motion";
import { useState } from "react";

const CarColorChanger = ({ carData, name }) => {
  const [carColor, setCarColor] = useState(0); // Default color

  return (
    carData && (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-4 font-changan">
          {name} Body Color
        </h1>
        <div className="relative ">
          {
            // carData.find((c) => c._id === carColor)?.image &&
            //   console.log("c", c)
            <motion.img
              src={`${import.meta.env.VITE_API_URL}api/v1/${
                carData[carColor].car_image.filepath
              }`}
              alt={carData[carColor]?.color_name}
              className={`lg:w-[700px] lg:h-[400px] object-cover`}
            />
          }
        </div>
        <div className="flex space-x-20 mt-4">
          {carData.map((color, index) => (
            <img
              key={color._id}
              src={`${import.meta.env.VITE_API_URL}api/v1/${
                color.car_image.filepath
              }`}
              className={`w-8 h-8 rounded-full border-2 border-gray-400 hover:border-gray-100 cursor-pointer`}
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
