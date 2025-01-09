function Banner({ data }) {
  // console.log(data);
  return (
    <div className="w-full h-[300px] md:h-[450px] lg:h-screen relative bg-primary">
      <img
        src={data.img}
        className="w-full h-full object-cover"
        loading="lazy"
        alt="banner"
      />
      <div className="absolute bottom-[64px] left-0 z-10 w-full mx-auto">
        <div className="lg:w-[1000px] mx-auto px-5 sm:px-10 lg:p-0">
          <p className=" text-white text-[20px] md:text-[32px] lg:text-[48px] font-changan font-bold">
            {data.desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner;
