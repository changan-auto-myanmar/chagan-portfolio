import React from "react";
import { motion } from "framer-motion";
import logo from "./../assets/images/logo/changan-new-logo.png";

function SplashScreen() {
  // Don't render anything if not visible

  const bounceVariants = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0], // Move up and down
      transition: {
        duration: 1,
        repeat: Infinity, // Repeat indefinitely
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="bg-primary fixed inset-0 flex flex-col justify-center items-center z-50 transition-opacity duration-500 ease-in-out">
      <motion.div variants={bounceVariants} initial="initial" animate="animate">
        <img src={logo} alt="Changan Logo" className="max-w-xs mb-5" />
      </motion.div>
    </div>
  );
}

export default SplashScreen;
