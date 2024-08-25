import about from "./../../assets/images/aboutchangan.png";

function AboutChangan() {
  return (
    <div className="relative">
      <img src={about} className="w-full h-[400px]" />
      <div className="bg-blue-800 absolute bottom-0 right-0 w-3/4 h-3/5 flex flex-col justify-center items-center px-10 text-white">
        <div>
          <p className="text-[32px] font-changan font-bold mb-5">
            About Our Changan
          </p>
          <p className="text-[10px] md:text-[20px]">
            About Our Changan As one of the top four automobile groups in China
            and the top selling domestic Chinese automotive brand, Changan
            Automobile boasts an industrial history stretching back 157 years.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutChangan;
