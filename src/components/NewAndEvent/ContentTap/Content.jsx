import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Content({ tab }) {
  return (
    <div className="">
      <div className="">
        <img src={tab.image} className="w-full" alt="Placeholder" />
        <div className="flex justify-between space-x-4 items-center px-0 py-4">
          <p className="">{tab.desc}</p>
          <Link to={"/new-detail"} className="bg-primary p-2">
            <MdArrowRightAlt className="text-white text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
