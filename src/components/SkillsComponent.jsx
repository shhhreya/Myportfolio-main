import React from 'react'
import { motion } from 'framer-motion'
function SkillsComponent({ image, index, inView, length }) {
  const imageVariants = {
    hidden: { opacity: 0, y: -500, },
    visible: { opacity: 1.2, y: 0, },
  };

  return (
    <motion.div
      key={index}
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{
        delay: inView
          ? index * .1
          : (length - index - 1) * 0,
        ease: "easeOut",
        duration: 1,
      }}
    >
      <div key={index} index={index} className="flex justify-center items-center  px-0 py-0 md:px-4 md:py-2 ">
        <img
          src={`../${image.Image}`}
          width={image.width}
          height={image.height}
          alt={image.skill_name}
        />
        <h3 className="hidden lg:inline-block text-center text-white text-base pl-2">
          {image.skill_name}
        </h3>
      </div>
    </motion.div>
  )
}

export default SkillsComponent
