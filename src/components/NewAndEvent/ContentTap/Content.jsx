import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Content({ tab }) {
  // console.log(tab.id);
  return (
    <div className="">
      <div className="">
        <img
          src={tab.image}
          className="w-full h-64 object-cover"
          alt="Placeholder"
        />
        <div className="flex justify-between space-x-4 items-center px-0 py-4">
          <p className="">{tab.title}</p>
          <Link to={`/new-detail/${tab?.id}`} className="bg-primary p-2">
            <MdArrowRightAlt className="text-white text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Content;
