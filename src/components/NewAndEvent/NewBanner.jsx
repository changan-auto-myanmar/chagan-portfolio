import { Link } from "react-router-dom";
import MyButton from "../button/MyButton";
import newbanner from "./../../assets/images/NewBanner.png";

function NewBanner({ image, title, id }) {
  return (
    <div className="w-full h-[300px] md:h-[450px] lg:h-screen relative">
      <img
        src={`${import.meta.env.VITE_API_URL}api/v1/${image}`}
        className="w-full h-full object-cover brightness-50 bg-black"
      />
      <div className="absolute bottom-0 md:mx-5 p-10 md:right-10 z-5 md:ps-[64px] mb-0 md:mb-[100px] lg:mb-[50px] w-full md:w-[450px] backdrop-blur-sm bg-white/60">
        <div className="">
          <p className="text-[18px] md:text-[20px] mb-5 font-bold">{title}</p>
          <Link to={`/new-detail/${id}`}>
            <MyButton text={"READ ARTICLE"} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewBanner;
