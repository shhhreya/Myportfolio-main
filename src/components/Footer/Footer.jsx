import React from "react";
import { Link } from "react-router-dom";
import pencrefLogo from "../../assets/icons8-s-80.png";
import pencrefLogo2 from "../../assets/Anamelogo2 (2).png";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import config from "../../env/config.js"
function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  const navigate = useNavigate();
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },

    {
      name: "Skills",
      slug: "/skills",
    },
    {
      name: "Project",
      slug: "/project",
    },
    {
      name: "Education",
      slug: "/education",
    },
    {
      name: "Certification",
      slug: "/certification",
    },
  ];

  const ContactItems = [
    {
      name: "Email",
      slug: `${config.email}`,
    },
    {
      name: "Github",
      slug: `${config.github}`,
    },
    {
      name: "Whatsapp",
      slug: `${config.whatsapp}`,
    },
  ];
  const imageVariants = {
    hidden: { x: -130 },
    visible: { x: 0 },
  };

  const animationVariants = {
    initial: { x: 0 },
    animate: { x: [0, 20, 0] },
  };

  const parentVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="footer"
      className="relative overflow-hidden py-5  border-t-2 border-t-purple-300 dark:border-t-white dark:border-t-[1px] bg-primary"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap justify-between">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <div className={`flex justify-between items-center`}>
                  <motion.div
                    initial="hidden"
                    variants={imageVariants}
                    animate={inView ? "visible" : "hidden"}
                    transition={{
                      delay: inView ? 0.2 : 0,
                      ease: "easeOut",
                      type: "spring",
                      duration: 1,
                    }}
                  >
                    <img src={pencrefLogo} alt="Logo" width="100px" />
                  </motion.div>
                  <motion.div
                    initial="initial"
                    animate={inView ? "animate" : "initial"}
                    variants={animationVariants}
                    transition={{
                      delay: inView ? 0.5 : 0,
                      ease: "easeInOut",
                      duration: 1,
                    }}
                  >
                    <img src={pencrefLogo2} alt="Logo" width="150px" />
                  </motion.div>
                </div>
              </div>
              <div>
                <p className=" text-xs md:text-sm text-white">
                  &copy; Copyright 2024. All Rights Reserved by{" "}
                  <Link to="/">
                    <span className="text-purple-500">Shreya.</span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
          <div ref={ref} className="w-full p-6 md:w-1/2 lg:w-2/12 text-white">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={parentVariants}
              transition={{ ease: "easeInOut" }}
            >
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-base text-purple-700 font-semibold uppercase text- ">
                  Quick links
                </h3>
                <ul>
                  {navItems.map((item) => (
                    <motion.li
                      className="mb-2"
                      key={item.name}
                      variants={childVariants}
                    >
                      <button
                        className={` text-base font-medium hover:text-purple-500 
                            ${
                              location.pathname === item.slug
                                ? "text-purple-500"
                                : ""
                            }`}
                        onClick={() => navigate(item.slug)}
                      >
                        {item.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12 text-white">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={parentVariants}
              transition={{ ease: "easeInOut" }}
            >
              <div className="h-full">
                <h3 className="tracking-px mb-4  text-base text-purple-700 font-semibold uppercase text- ">
                  Contact Me
                </h3>
                <ul>
                  {ContactItems.map((item) => (
                    <motion.li
                      className="mb-2"
                      key={item.name}
                      variants={childVariants}
                    >
                      {" "}
                      <Link to={item.slug} target="_blank">
                        <button
                          className={` text-base font-medium hover:text-purple-500 `}
                        >
                          {item.name}
                        </button>
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
