function Banner({ data }) {
  console.log(data);
  return (
    <div className="w-full h-[300px] md:h-screen relative">
      <img src={data.img} className="w-full h-full object-cover" />
      <div className="absolute bottom-[64px] md:bottom-[124px] left-0 z-10 ps-10 md:ps-[64px]">
        <p className=" text-white text-lg md:text-4xl font-changan font-bold">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default Banner;
