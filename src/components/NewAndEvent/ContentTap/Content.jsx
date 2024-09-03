import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Content({ tab }) {
  return (
    <div className="">
      <div className="mx-auto pb-10 w-full max-w-lg">
        <img src={tab.image} alt="Placeholder" />
        <div className="flex justify-between items-center px-4 py-4">
          <p className="body-text">{tab.desc}</p>
          <Link to={"/new-detail"} className="bg-blue-950 p-2">
            <MdArrowRightAlt className="text-white text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
