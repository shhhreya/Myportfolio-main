import React from "react";
import {
  Container,
  HeroBgAnimation,
  ProfileImage,
} from "../components/index.js";
import { motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import Project from "./Project.jsx";
import Skills from "./Skills.jsx";
import Certification from "./Certification.jsx";
import Education from "./Education.jsx";
function Home() {
  const transition = { type: "spring", duration: 2 };
  return (
    <>
      <div
        id="home"
        className="w-full h-[500px] lg:h-screen bg-hero-pattern bg-cover bg-no-repeat bg-center"
      >
        <Container className="w-full h-screen">
          <section
            className={`flex justify-between items-center flex-wrap-reverse w-full`}
          >
            <div
              className={`w-full md:w-1/2  sm:px-16 px-6 flex flex-row  gap-5`}
            >
              <motion.div
                initial={{ x: -200, opacity: 0, transition: { ...transition } }}
                animate={{
                  x: 0,
                  opacity: 1,
                  transition: { ...transition, delay: 0.4 },
                }}
                exit={{ x: 0, opacity: 0, transition: { ...transition } }}
              >
                <div className="flex flex-col justify-center items-center mt-5">
                  <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
                  <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
              </motion.div>

              <div className="flex justify-center items-start flex-col">
                <motion.div
                  initial={{
                    x: -200,
                    opacity: 0,
                    transition: { ...transition },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { ...transition, delay: 0.2 },
                  }}
                  exit={{
                    x: 0,
                    opacity: 0,
                    transition: { ...transition, delay: 0 },
                  }}
                >
                  <h1
                    className={`text-[28px] lg:text-[50px] font-bold mt-2 text-white`}
                  >
                    Hi, It's me <span className="text-[#915EFF]">Shreya.</span>
                  </h1>
                </motion.div>
                <motion.div
                  initial={{
                    x: -200,
                    opacity: 0,
                    transition: { ...transition },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { ...transition, delay: 0.3 },
                  }}
                  exit={{ x: 0, opacity: 0, transition: { ...transition } }}
                >
                  <div className={` text-[#dfd9ff] text-base lg:text-2xl`}>
                    I'm a{" "}
                    <span className="inline-block text-[#915EFF]">
                      <TypeWriter
                        options={{
                          strings: [
                            "Web Developer",
                            "React Developer",
                            "Frontend Developer",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                    <br />
                    <div className="text-sm lg:text-base md:mt-2">
                      Enthusiastic web developer with a focus on creating
                      dynamic and interactive web applications. Eager to
                      contribute to projects that enhance user experiences,
                      combining expertise in HTML, CSS, JavaScript, and React.
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="w-full h-1/2 relative md:w-1/2 flex justify-center items-center">
              <HeroBgAnimation />

              <div className="w-full flex justify-center items-center absolute overflow-hidden">
                <motion.div
                  initial={{
                    x: 200,
                    opacity: 0,
                    transition: { ...transition },
                  }}
                  animate={{
                    x: 0,
                    opacity: 1,
                    transition: { ...transition, delay: 0.1 },
                  }}
                  exit={{
                    x: 0,
                    opacity: 0,
                    transition: { ...transition, delay: 0 },
                  }}
                >
                  <ProfileImage className="rounded-full w-[150px] h-[150px] lg:h-[300px] lg:w-[300px] object-cover" />
                </motion.div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <div>
        <Skills />
        <Project />
        <Certification />
        <Education />
      </div>
    </>
  );
}

export default Home;
