import { MdArrowRightAlt } from "react-icons/md";
import YouTubeVideoGrid from "./YoutubeVid";

function YouTube() {
  return (
    <div className="container mx-auto mt-10 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: Title */}
        <div className="text-left">
          <h2 className="text-[32px] font-bold text-black font-changan">
            Changan Youtube Videos
          </h2>
        </div>

        {/* Right Column: Description and Button */}
        <div className="col-span-2">
          <p className=" mb-10 text-[20px]">
            As one of the top four automobile groups in China and the top
            selling domestic Chinese automotive brand, Changan Automobile boasts
            an industrial history stretching back 157 years.
          </p>
          <a
            href="https://www.youtube.com/@ChanganMyanmarMotor"
            className="inline-flex items-center px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 "
          >
            <span className="mr-10">VIEW YOUTUBE CHANNEL</span>
            <MdArrowRightAlt className="text-3xl" />
          </a>
        </div>
      </div>
      <YouTubeVideoGrid />
    </div>
  );
}

export default YouTube;
