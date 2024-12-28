import { useState, useEffect } from "react";
import { IoArrowUpOutline } from "react-icons/io5";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }} // Start hidden below the screen
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }} // Show or hide smoothly
      transition={{ duration: 0.5, ease: "easeInOut" }} // Smooth transition
      className="fixed bottom-6 right-6"
    >
      <button
        onClick={scrollToTop}
        className="bg-neutral-800 text-white p-3 rounded-full shadow-md hover:bg-purple-800 transition-transform duration-300 focus:outline-none"
        aria-label="Scroll to top"
      >
        <IoArrowUpOutline size={24} />
      </button>
    </motion.div>
  );
};

export default ScrollToTop;
