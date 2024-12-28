import logo from "../assets/logo-white.png";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavLinks = ({ closeNavbar }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4">
      {["Home", "About", "Experience"].map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="block px-4 py-2 rounded-md text-base text-white transition-transform duration-300 hover:scale-95 focus:scale-95"
          onClick={closeNavbar} // Close the navbar on link click
        >
          {section}
        </a>
      ))}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <nav className="text-white">
      {/* Main Navbar Container */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-14" src={logo} alt="logo" />
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={toggleNavbar}
          className="inline-flex items-center p-2 text-white rounded-lg lg:hidden focus:outline-none"
        >
          {isOpen ? (
            // Close Icon
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          )}
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:flex lg:gap-4 lg:items-center">
          <NavLinks closeNavbar={closeNavbar} />
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="w-full lg:hidden border-b border-neutral-900"
            initial={{ opacity: 0, y: -45 }} // Initial state: hidden and slightly above
            animate={{ opacity: 1, y: 0 }} // Animate to visible and normal position
            exit={{
              opacity: 0, // Fade out
              y: -50, // Move upwards towards the button
              transition: { duration: 0.3 },
            }} // Exit state: fade out and move upward
            transition={{ duration: 0.3 }}
          >
            <NavLinks closeNavbar={closeNavbar} />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
