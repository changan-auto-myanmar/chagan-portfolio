import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="mt-2 text-gray-600">
          We can't seem to find the page you're looking for.
        </p>
        <p className="mt-2 text-gray-600">
          Maybe try going back to the homepage?
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-5 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
