import { HERO_CONTENT } from "../constants";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="w-full overflow-hidden border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-col lg:flex-row items-center justify-between">
        {/* Hero Content */}
        <div className="w-full lg:w-1/2 px-4">
          <motion.h2
            variants={container(0)}
            initial="hidden"
            animate="visible"
            className="pb-8 text-5xl sm:text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
          >
            Pinal Pambhar
          </motion.h2>
          <motion.div
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
          >
            <span
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text 
          text-2xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </span>
          </motion.div>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="my-2 max-w-xl py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>

        {/* Spline element */}
        <div className="w-full flex justify-center items-center lg:w-1/2 lg:p-8">
          <div className="w-full h-[300px] lg:h-[450px]">
            <Spline
              scene="https://prod.spline.design/cDy2fjnMmZ0pQ3HY/scene.splinecode"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
