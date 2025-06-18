import { MdArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";

function Content({ tab }) {
  return (
    <div className="w-full">
      <img
        src={tab?.csrImages[0].url}
        className="w-full h-64 object-cover"
        alt="News Image"
      />
      <div className="flex justify-between space-x-4 items-center px-0 py-4">
        <p className="">{tab.title}</p>
        <Link to={`/new-detail/${tab?._id}`} className="bg-primary p-2">
          <MdArrowRightAlt className="text-white text-3xl" />
        </Link>
      </div>
    </div>
  );
}

export default Content;
