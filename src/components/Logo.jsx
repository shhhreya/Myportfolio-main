import React from "react";
import pencrefLogo from "../assets/icons8-s-80.png";
import pencrefLogo2 from "../assets/Anamelogo2 (2).png";
import { motion } from "framer-motion";

function Logo({ width = "100px", className = "", hidden = "" }) {
  const transition = { type: "spring", duration: 2 };
  const animationVariants = {
    initial: { x: 0 },
    animate: { x: [0, 20, 0] },
  };
  return (
    <div className={`${className} flex justify-between items-center`}>
      <motion.div
        initial={{ x: -150, opacity: 0, transition: { ...transition } }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { type: "spring", duration: "2", delay: 1 },
        }}
        exit={{ x: 0, opacity: 0, transition: { ...transition } }}
      >
        <img src={pencrefLogo} alt="Logo" width={width} />
      </motion.div>
      <motion.div
        initial="initial"
        animate="animate"
        variants={animationVariants}
        transition={{
          delay: 1.5,
          ease: "easeInOut",
          duration: 1,
        }}
      >
        <img src={pencrefLogo2} alt="Logo" width={width} />
      </motion.div>
    </div>
  );
}

export default Logo;
