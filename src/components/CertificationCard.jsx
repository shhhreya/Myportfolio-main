import React from "react";
import { motion } from "framer-motion";
function CertificationCard({ certification, index, inView, length }) {
  const imageVariants = {
    hidden: { opacity: 0, x: -500 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <motion.div
      initial="hidden"
      variants={imageVariants}
      animate={inView ? "visible" : "hidden"}
      custom={index}
      transition={{
        delay: inView ? index * 0.7 : (length - index - 1) * 0,
        ease: "easeInOut",
        type: "spring",
        stiffness: 50,
        duration: 1,
      }}
      className="relative w-72 h-[430px] p-3 rounded-lg bg-[#151030ac] overflow-hidden"
    >
      <img
        src={certification.certification_image}
        alt="certification_image"
        className="w-full h-40 rounded-2xl"
      />

      <div className="absolute inset-0 flex justify-end m-4 card-img_hover">
        <div
          onClick={() =>
            window.open(certification.certification_link, "_blank")
          }
          className="bg-black/80 w-7 h-7  rounded-full flex justify-center items-center cursor-pointer"
        >
          <img
            src={certification.certification_icon}
            alt="source code"
            className="w-3/4 h-3/4 object-contain"
          />
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-white font-bold text-[24px] h-16">
          {certification.certification_name}
        </h3>
        <p className="mt-2 text-white text-[14px] h-20">
          {certification.certification_desc}
        </p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {certification.Certification_hashtags.map((tag, index) => (
          <p key={index} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <div className="text-gray-500 text-sm">
        {certification.completed_date}
      </div>
    </motion.div>
  );
}

export default CertificationCard;
