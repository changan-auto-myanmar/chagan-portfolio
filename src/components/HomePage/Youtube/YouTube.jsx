import { MdArrowRightAlt } from "react-icons/md";
import YouTubeVideoGrid from "./YoutubeVid";

function YouTube() {
  return (
    <div className="mt-10 p-5 sm:p-10 lg:px-0 lg:py-[64px] lg:w-[1000px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3">
        {/* Left Column: Title */}
        <div className="text-left">
          <h2 className="header-text font-bold text-black font-changan">
            Changan Youtube Videos
          </h2>
        </div>

        {/* Right Column: Description and Button */}
        <div className="col-span-2 px-0 md:ps-10">
          <p className="mb-10 body-text font-semibold mt-5 md:mt-0">
            Explore CHANGAN's latest innovations and model features through our
            curated YouTube videos. Dive into exclusive content to see what sets
            CHANGAN apart.
          </p>
          <a
            href="https://www.youtube.com/@ChanganMyanmarMotor"
            className="inline-flex items-center px-4 py-2 border border-gray-400 rounded hover:bg-gray-100 "
          >
            <span className="mr-10 md:mr-20 font-semibold">
              VIEW YOUTUBE CHANNEL
            </span>
            <MdArrowRightAlt className="text-3xl text-primary font-bold" />
          </a>
        </div>
      </div>
      <YouTubeVideoGrid />
    </div>
  );
}

export default YouTube;
