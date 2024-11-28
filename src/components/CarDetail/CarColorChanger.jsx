import { motion } from "framer-motion";
import { useState } from "react";

const CarColorChanger = ({ carData, name }) => {
  // console.log(carData);
  const [carColor, setCarColor] = useState(1); // Default color
  console.log("carData", carData);
  console.log("carColor", carColor);

  return (
    carData.length > 0 && (
      <div className="flex flex-col items-center mt-10">
        <h1 className="text-2xl font-bold mb-4 font-changan">
          {name} Body Color
        </h1>
        <div className="relative ">
          {carData.find((c) => c.id == carColor)?.image && (
            // console.log(carData.find((c) => c.color === carColor))
            <motion.img
              src={carData.find((c) => c.id === carColor)?.image}
              alt={carData.find((c) => c.id === carColor)?.name}
              className={`lg:w-[700px] lg:h-[400px] object-cover`}
            />
          )}
        </div>
        <div className="flex space-x-20 mt-4">
          {carData.map((color) => (
            <button
              key={color.name}
              style={{ backgroundColor: `${color.color}` }}
              className={`w-8 h-8 rounded-full border-2 border-gray-400 hover:border-gray-100 cursor-pointer`}
              onClick={() => setCarColor(color.id)}
              aria-label={color.name}
            />
          ))}
        </div>
        <p className="mt-5 text-[20px] font-bold">
          {carData.find((c) => c.color === carColor)?.name}
        </p>
      </div>
    )
  );
};

export default CarColorChanger;
