import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AlertBox() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Trigger animation when component mounts (user enters site)
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Small delay for better UX

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, x: -500 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: -500 }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="fixed bottom-10 left-5 bg-white z-50 rounded-md shadow-lg"
        >
          <div className="flex justify-between gap-10 items-center p-5">
            <p className="text-center text-primary text-[16px]">
              For a better experience on the CHANGAN website, Please activate
              your VPN
            </p>
            <motion.button
              onClick={handleDismiss}
              whileHover={{
                scale: 1.05,
                backgroundColor: "var(--color-primary)",
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-primary border border-primary px-5 py-2 rounded-md transition-colors duration-200"
            >
              Dismiss
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default AlertBox;
