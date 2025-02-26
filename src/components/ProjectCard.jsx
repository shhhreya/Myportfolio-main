import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import pencrefLogo2 from "/github (3).png";
import TypeWriter from "typewriter-effect";
function ProjectCard({ project }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={project.project_name}
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            padding: "10px",
          }}
          src={project.project_icon}
        />
      }
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#1d1836",
        color: "#915EFF",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
      }}
      contentArrowStyle={{
        borderRight: "10px solid  rgba(255, 255, 255, 0.4)",
      }}
      date={project.created_date}
      iconStyle={{
        background: "#050816",
        outline: "4px solid rgba(255,255,255,.8)",
      }}
    >
      <div className="flex gap-2">
        <img
          className="w-14 md:w-20 p-2 rounded-md bg-black"
          src={project.project_icon}
          alt="icon"
        />
        <div className="flex flex-col">
          <h3 className="text-xs md:text-lg text-gray-200">
            {project.project_name}
          </h3>
          <h4 className="text-sm text-gray-400 ">
            <a href={project.github_link} target="_blank">
              <img
                className="w-6 mt-1 md:w-8 rounded-md"
                src={pencrefLogo2}
                alt="hi"
              />
            </a>
          </h4>
        </div>
      </div>
      <div>
        <h4 className="text-[11px] md:text-sm text-[#915EFF]">
          <a href={project.project_link} className="inline-flex items-center">
            <img src=".//link.png" alt="link" className="w-3.5 inline-block" />
            <span className="inline-block">
              <TypeWriter
                options={{
                  strings: [`${project.project_link}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </a>
        </h4>
        <div>
          <div className="mt-2">
            {project.project_desc.map((desc, index) => (
              <div key={index} className="text-xs md:text-sm text-gray-400">
                • {desc}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-2">
          <div className="flex gap-2 text-sm md:text-base">
            Skills&nbsp;:
            <div>
              {project.skills.map((skill, index) => (
                <span key={index} className="text-xs md:text-sm text-gray-400">
                  {" "}
                  • {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default ProjectCard;
