import { About_Me } from "../constants";
import { motion } from "framer-motion";
import Hero_Image from "../assets/Hero.png";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        {/* About Image */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img
              className="w-[90%] sm:w-[80%] lg:w-[60%] h-auto max-w-full object-contain"
              src={Hero_Image}
              alt="About Image"
            />
          </div>
        </motion.div>
        {/* About Me Description */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-4 max-w-xl py-10">{About_Me}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
