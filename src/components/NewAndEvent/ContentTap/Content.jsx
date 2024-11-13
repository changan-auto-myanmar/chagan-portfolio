import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Content({ tab }) {
  return (
    <div className="">
      <div className="mx-auto w-full max-w-lg">
        <img src={tab.image} alt="Placeholder" />
        <div className="flex justify-between items-center px-4 py-4">
          <p className="">{tab.desc}</p>
          <Link to={"/new-detail"} className="bg-primary ms-5 p-2">
            <MdArrowRightAlt className="text-white text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
