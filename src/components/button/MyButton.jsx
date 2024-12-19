import { useState } from "react";
import { MdArrowRightAlt } from "react-icons/md";

function MyButton({ text }) {
  // State to manage button active status
  const [isActive, setIsActive] = useState(false);
  const [isMotion, setIsMotion] = useState(false);
  // console.log("isMotion", isMotion);

  const handleMouseDown = () => {
    setIsActive(true); // Set active state when pressed
  };

  const handleMouseUp = () => {
    setIsActive(false); // Reset active state when released
  };

  const handleMouseEnter = () => {
    setIsMotion(true); // Set active state when mouse enters
  };

  return (
    <button
      className={`w-full bg-blue-white border border-blue-900 text-black p-2 rounded hover:bg-blue-900 hover:text-white transition ${
        isActive ? "active" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={() => {
        handleMouseUp();
        setIsMotion(false);
      }} // Reset active state when mouse leaves
    >
      {text}
      <MdArrowRightAlt
        className={`inline-block ms-2 text-3xl duration-300 ${
          isMotion ? "text-white" : "text-primary"
        } transition-transform ${isActive ? "translate-x-48" : ""}`} // Adding translation effect in active state
      />
    </button>
  );
}

export default MyButton;
