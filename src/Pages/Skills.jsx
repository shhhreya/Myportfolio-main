import React from "react";
import { Container, StarsCanvas } from "../components/index.js";
import { useInView } from "react-intersection-observer";
import SkillsComponent from "../components/SkillsComponent.jsx";
import {
  Skill_data,
  Skill_data1,
  Skill_data2,
  Skill_data4,
  Skill_data5,
} from "../content/content.js";
function Skills() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });

  return (
    <div
      ref={ref}
      id="skills"
      className="w-full h-[450px] md:h-screen relative bg-primary flex justify-center items-center"
    >
      <StarsCanvas number={3003} size={0.003} />
      <Container className="overflow-hidden">
        <h1 className="px-6 text-white text-4xl font-bold text-center">
          Skills
        </h1>
        <h3 className="text-center text-white text-sm md:text-xl p-2">
          Here are some of my skills on which i have been working for past 6
          months.{" "}
        </h3>

        <div className="flex flex-row justify-center gap-2 flex-wrap mt-4 items-center ">
          {Skill_data.map((image, index) => (
            <SkillsComponent
              key={index}
              image={image}
              index={index}
              inView={inView}
              length={Skill_data.length}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 flex-wrap mt-4 items-center  ">
          {Skill_data1.map((image, index) => (
            <SkillsComponent
              key={index}
              image={image}
              index={index}
              inView={inView}
              length={Skill_data1.length}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 flex-wrap mt-4 items-center ">
          {Skill_data2.map((image, index) => (
            <SkillsComponent
              key={index}
              image={image}
              index={index}
              inView={inView}
              length={Skill_data2.length}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 flex-wrap mt-4 items-center ">
          {Skill_data4.map((image, index) => (
            <SkillsComponent
              key={index}
              image={image}
              index={index}
              inView={inView}
              length={Skill_data4.length}
            />
          ))}
        </div>
        <div className="flex flex-row justify-center gap-2 flex-wrap mt-4 items-center ">
          {Skill_data5.map((image, index) => (
            <SkillsComponent
              key={index}
              image={image}
              index={index}
              inView={inView}
              length={Skill_data5.length}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Skills;
