import cargallary from "./../../assets/images/gallary1.png";
import cargallary1 from "./../../assets/images/gallary2.png";
import cargallary2 from "./../../assets/images/gallary3.png";
import cargallary3 from "./../../assets/images/gallary4.png";

function CarGallary() {
  const carGallary = [cargallary, cargallary1, cargallary2, cargallary3];
  return (
    <div className="container mx-auto p-6">
      <p className="text-[32px] font-bold mb-10 font-changan">Gallary</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {carGallary.map((car, index) => (
          <div key={index} className={index % 2 === 0 ? "" : "mt-10"}>
            <img className="h-auto max-w-full rounded-lg" src={car} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarGallary;
