// src/App.js
import { FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";
import logo from "./assets/changan.png";
import { motion } from "framer-motion";

function App() {
  // Define animation variants
  const fadeInVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleUpVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  };

  const rotateVariants = {
    hidden: { opacity: 0, rotate: -90 },
    visible: { opacity: 1, rotate: 0 },
  };

  return (
    <div className="font-changan flex items-center justify-center h-screen bg-primary text-white">
      <div className="text-center">
        <motion.h1
          className="text-6xl font-bold mb-6"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1 }}
        >
          Launching Soon
        </motion.h1>
        <motion.div
          className="flex justify-center mb-4"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-left">
            <motion.img
              src={logo} // Add the path to your logo here
              alt="Changan Auto Logo"
              className="h-15"
              initial="hidden"
              animate="visible"
              variants={scaleUpVariants}
              transition={{ duration: 1, delay: 0.4 }}
            />
            <motion.span
              className="text-xl font-Poppins font-bold ms-2"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Smart, Your Future
            </motion.span>
            {/* Social Media Icons */}
            <motion.div
              className="mt-6 flex space-x-10 ms-2"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.a
                href="https://www.facebook.com/changanmyanmarmotor"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaFacebook className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/@ChanganMyanmarMotor"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaYoutube className="text-white text-xl" />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@changan_myanmar"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaTiktok className="text-white text-xl" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
