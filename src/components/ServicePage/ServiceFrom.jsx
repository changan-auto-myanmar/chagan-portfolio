import { useState } from "react";
import MyButton from "../button/MyButton";
import serviceForm from "../../api/ServiceFrom";

function ServiceFrom() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [car, setCar] = useState("");
  const [errors, setErrors] = useState({});
  const [date, setDate] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
      car_model: car,
      date: new Date().toISOString().slice(0, 10),
    };
    // console.log(data);
    const res = await serviceForm(data);
    if (res.code === 201) {
      // console.log("Success");
      setName("");
      setEmail("");
      setPhone("");
      setCar("");
      setDate("");
    }
    // console.log(res);
  };

  return (
    <div>
      <form className="space-y-10" onSubmit={handleSubmit}>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900 focus:outline-none"
            />
          </div>
          <div className="w-1/2">
            <input
              required
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              placeholder="Name"
              className="w-full p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex space-x-4">
          <div className="w-1/2">
            <input
              value={email}
              required
              onChange={handleEmailChange}
              type="email"
              placeholder="Email"
              className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
            />
            {errors.email && (
              <span className="text-red-500">{errors.email}</span>
            )}{" "}
            {/* Error message */}
          </div>
          <div className="w-1/2">
            <input
              value={phone}
              required
              onChange={handlePhoneChange}
              type="tel"
              placeholder="Phone Number"
              className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}{" "}
            {/* Error message */}
          </div>
        </div>
        <input
          required
          value={car}
          onChange={(e) => setCar(e.target.value)}
          type="text"
          placeholder="Car Model"
          className="w-full flex-1 p-2 border-solid border-0 border-b border-blue-900 shadow-lg shadow-gray-300 placeholder:text-blue-900 focus:outline-none"
        />

        <MyButton text="BOOK SERVICE NOW" />
      </form>
    </div>
  );
}

export default ServiceFrom;
