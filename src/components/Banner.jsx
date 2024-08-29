function Banner({ data }) {
  console.log(data);
  return (
    <div className="w-full h-[500px] relative">
      <img
        src={data.img}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute bottom-[64px] left-0 z-10 ps-[64px]">
        <p className=" text-white text-[64px] font-changan font-bold">
          {data.desc}
        </p>
      </div>
    </div>
  );
}

export default Banner;