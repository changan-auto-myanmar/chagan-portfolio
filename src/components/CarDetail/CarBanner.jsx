import { HiOutlineDownload } from "react-icons/hi";

function CarBanner({ image, sologram, name, pdf }) {
  return (
    <div className="w-full h-screen relative">
      <div className="backdrop-brightness-10 bg-black/30 w-full h-full absolute">
        <img
          src={image}
          className="w-full
        h-full object-cover "
        />
      </div>

      <div className="absolute bottom-[200px] md:bottom-[64px] left-0 z-10 ps-[64px]">
        {sologram ? (
          <p className="text-white text-[24px] font-bold">{sologram}</p>
        ) : (
          <p className=" text-white header-text drop-shadow-2xl font-changan font-bold">
            &quot;Drive Innovation,
            <br /> Embrace Excellence.&quot;
          </p>
        )}
        <span className="font-changan text-[24px] text-white ">{name}</span>
      </div>
      <div className="absolute bottom-[100px] w-[300px] md:bottom-[64px] right-1/2 md:right-0 translate-x-[50%] md:translate-x-0 md:right-0 z-10 p-0 md:pe-[64px] space-x-[24px]">
        <a
          href={pdf}
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-bold flex items-center justify-center"
        >
          <span>BROCHURES</span>
          <HiOutlineDownload className="inline-block text-2xl ms-10" />
        </a>
      </div>
    </div>
  );
}

export default CarBanner;
