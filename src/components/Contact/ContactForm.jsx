import { useRef, useState } from "react";
// import { MdArrowRightAlt } from "react-icons/md";
import uplaodContactUs from "../../api/contactUs";
import MyButton from "../button/MyButton";
import SuccessModal from "./SuccessModel";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const description = useRef("");
  const [selectedSubject, setSelectedSubject] = useState("");
  const [errors, setErrors] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  // Step 2: Create a handler to update the state
  const handleSelectChange = (event) => {
    setSelectedSubject(event.target.value);
  };

  // Step 3: Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    const data = {
      name,
      email,
      phone,
      description: description.current.value,
      select_car: "no",
      subject: selectedSubject,
    };

    const res = await uplaodContactUs(data);
    console.log(res);
    if (res.status === "success") {
      setShowSuccessModal(true);
      setName("");
      setEmail("");
      setPhone("");
      description.current.value = "";
      setSelectedSubject("");
    }
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: validatePhone(e.target.value),
    }));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      email: validateEmail(e.target.value),
    }));
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) return "Email is required.";
    if (!emailPattern.test(email)) return "Email is not valid.";
    return "";
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{11}$/; // Adjust based on your phone format
    if (!phone) return "Phone number is required.";
    if (!phonePattern.test(phone)) return "Phone number must be 10 digits.";
    return "";
  };

  return (
    <div className="flex flex-col md:flex-row px-5 sm:px-10 lg:px-0 lg:w-[1000px] mx-auto py-[64px]">
      <div className="md:w-2/5 mb-8 md:mb-0">
        <h1 className="header-text font-bold font-changan">
          Contact Us Today We're Here to Help
        </h1>

        <p className="body-text mt-4 text-gray-700">
          Get in Touch with Us! Whether you’re interested in a test drive, have
          questions about a vehicle, or need assistance with financing, we’re
          here to help. Fill out the form below, and our team will get back to
          you promptly.
        </p>
      </div>
      <div className="md:w-3/5 md:px-10">
        <form className="space-y-10" onSubmit={handleSubmit}>
          <input
            required
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
            className="w-full p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
          />
          <div className="w-full flex gap-4">
            <div className="w-1/2">
              <input
                required
                onChange={handleEmailChange}
                type="email"
                placeholder="Email"
                value={email}
                className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
              />
              {errors.email && (
                <span className="text-red-500">{errors.email}</span>
              )}{" "}
              {/* Error message */}
            </div>
            <div className="w-1/2">
              <input
                required
                onChange={handlePhoneChange}
                type="tel"
                placeholder="Phone Number"
                value={phone}
                className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
              />
              {errors.phone && <p className="text-red-500">{errors.phone}</p>}{" "}
              {/* Error message */}
            </div>
          </div>
          <div className="flex space-x-4">
            <select
              className="flex-1 p-2 bg-white border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 text-blue-900"
              value={selectedSubject}
              onChange={handleSelectChange}
            >
              <option value="" disabled>
                Subject (Optional){" "}
                {/* Set a value and disable the placeholder option */}
              </option>
              <option value="Inquiry">Inquiry</option>
              <option value="Feedback">Feedback</option>
            </select>
          </div>

          <textarea
            required
            ref={description}
            placeholder="Description"
            className="w-full p-2 border-solid border-0 border-b border-blue-900  shadow-lg shadow-gray-300 placeholder:text-blue-900"
            rows="4"
          />

          <MyButton text={"SEND US MESSAGE"} />
        </form>
      </div>
      {/* Success Modal */}
      <SuccessModal isOpen={showSuccessModal} onClose={handleCloseModal} />
    </div>
  );
};

export default ContactForm;
