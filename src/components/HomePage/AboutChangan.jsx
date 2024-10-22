import { Link } from "react-router-dom";
import about from "./../../assets/images/aboutChagan.jpeg";
import { MdArrowRightAlt } from "react-icons/md";

function AboutChangan() {
  return (
    <div className="mt-20">
      <div className="w-full h-[220px] md:h-[200px] lg:h-[300px] overflow-hidden relative ">
        <img
          src={about}
          className="object-cover translate-y-[10%] md:-translate-y-[50%]"
          alt="About Changan"
        />
        <div className="absolute bottom-0 left-0 ms-6 md:ms-10 hidden lg:block">
          <h2 className="header-text text-primary font-changan font-bold mb-4">
            About Our Changan
          </h2>
        </div>

        <div className="absolute bottom-5 right-0 me-6 md:me-10 hidden lg:block">
          <Link
            to="/new"
            className="flex bg-white text-primary items-center px-1 md:px-2 lg:px-4 py-1 md:py-2 lg:py-4 rounded-sm border border-primary"
          >
            <span className="mr-2 md:mr-5 lg:mr-10 text-sm md:text-md lg:text-xl">
              Explore Changan
            </span>
            <MdArrowRightAlt className="text-xl md:text-2xl lg:text-3xl" />
          </Link>
        </div>
      </div>
      <div className="bg-primary py-10 lg:py-10 px-6 lg:px-10">
        <div className="lg:hidden">
          <h2 className="header-text text-white font-changan font-bold mb-4">
            About Our Changan
          </h2>
        </div>
        <p className="body-text md:text-[20px] text-white my-6">
          CHANGAN Automobile is one of the four major Chinese automobile groups,
          with 40 years of car manufacturing experience, we have 12
          manufacturing bases and 22 plants worldwide. As a leading Chinese car
          manufacturer, CHANGAN Automobile has self-owned brands including
          CHANGAN, NEVO, DEEPAL, AVATR, KAICHENG, and joint venture brands
          including CHANGAN Ford, CHANGAN Mazda, and JMC. In 2021, the
          cumulative sales of CHANGAN's self-owned brand exceeded 20 million
          units. Up till April 2024, the cumulative sales of Chinese brands
          under CHANGAN exceeded 26.33 million units
        </p>
        <div className="lg:hidden">
          <Link
            to="/new"
            className="flex w-[200px] bg-white text-primary items-center px-1 md:px-2 lg:px-4 py-1 md:py-2 lg:py-4 rounded-sm border border-primary"
          >
            <span className="mr-2 md:mr-5 lg:mr-10 text-sm md:text-md lg:text-xl">
              Explore Changan
            </span>
            <MdArrowRightAlt className="text-xl md:text-2xl lg:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutChangan;
