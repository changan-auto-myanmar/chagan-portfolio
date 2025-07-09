import { HiOutlineDownload } from "react-icons/hi";

function CarBanner({ image, sologram, pdf }) {
  return (
    <div className="w-full h-[400px] md:h-[450px] lg:h-screen relative">
      <div className="w-full h-full absolute">
        <img src={image} className="w-full h-full" />
      </div>

      {/* <div className="absolute bottom-[74px] md:bottom-[102px] left-[5%] z-10">
        {sologram ? (
          <p
            className="text-white text-[24px] font-bold"
            style={{
              whiteSpace: "pre-wrap",
              textShadow: "0px 0px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            {sologram}
          </p>
        ) : (
          <p
            className=" text-white header-text drop-shadow-2xl font-changan font-bold"
            style={{
              whiteSpace: "pre-wrap",
              textShadow: "0px 0px 15px rgba(0, 0, 0, 1)",
            }}
          >
            &quot;Drive Innovation,
            <br /> Embrace Excellence.&quot;
          </p>
        )}
      </div> */}
      <div className="absolute bottom-[10px] md:bottom-[64px] right-[70%] md:right-0 w-[200px] md:w-[300px] translate-x-[50%] md:translate-x-0 md:right-0 z-10 p-0 md:pe-[64px] space-x-[24px]">
        <a
          href={pdf}
          target="_blank"
          className="bg-white text-black px-6 py-3 rounded hover:bg-black hover:text-white font-bold flex items-center justify-center"
        >
          <span>BROCHURES</span>
          <HiOutlineDownload className="inline-block text-2xl md:ms-10" />
        </a>
      </div>
    </div>
  );
}

export default CarBanner;
