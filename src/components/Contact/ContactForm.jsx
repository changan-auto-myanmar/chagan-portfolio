import { MdArrowRightAlt } from "react-icons/md";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 bg-white">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <h1 className="header-text font-bold font-changan">
          Contact Us Today We ' Are Here to Help
        </h1>

        <p className="body-text mt-4 text-gray-700">
          Get in Touch with Us! Whether you’re interested in a test drive, have
          questions about a vehicle, or need assistance with financing, we’re
          here to help. Fill out the form below, and our team will get back to
          you promptly.
        </p>
      </div>
      <div className="md:w-2/3 md:px-10">
        <form className="space-y-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
          />
          <div className="flex space-x-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
            />
          </div>
          <div className="flex space-x-4">
            <select className="flex-1 p-2 bg-white border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 text-blue-900">
              <option>
                <p className="text-blue-900">Subject (Optional)</p>
              </option>
              <option>Inquiry</option>
              <option>Feedback</option>
            </select>
            <select className="flex-1 p-2 bg-white border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 text-blue-900">
              <option>Select Car</option>
              <option>Car 1</option>
              <option>Car 2</option>
            </select>
          </div>
          <textarea
            placeholder="Description"
            className="w-full p-2 border-solid border-0 border-b border-blue-900  shadow-lg shadow-gray-300 placeholder:text-blue-900"
            rows="4"
          />
          <button className="w-full bg-blue-white border border-blue-900 text-black p-2 rounded hover:bg-blue-900 hover:text-white transition">
            SEND US MESSAGE
            <MdArrowRightAlt className="inline-block ms-20 text-3xl text-blue-900 hover:text-white" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
