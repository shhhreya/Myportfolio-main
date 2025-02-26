import React from "react";
import logo from "../assets/Anamelogo2 (2).png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ProjectCard } from "../components/index.js";
import { Projectinfo } from "../content/content";
import { StarsCanvas, Container } from "../components/index.js";
function Project() {
  return (
    <Container className="py-10 relative">
      <StarsCanvas number={8520} size={0.0013} />
      <div id="project" className="px-14 py-5">
        <h4 className="text-gray-500">MY WORK</h4>
        <h1 className="text-5xl font-bold text-gray-200">Project</h1>
        <p className="text-sm md:text-base text-gray-300 w-full md:w-1/2 mt-5">
          Following Projects showcase my skills and experience in the field of
          Web Development. My work includes both Frontend and Backend
          Development. Each project with live link and source code link.
        </p>
      </div>
      <VerticalTimeline lineColor="rgba(255,255,255,.8)">
        {Projectinfo.map((project, index) => (
          <ProjectCard key={`experience-${index}`} project={project} />
        ))}
        <VerticalTimelineElement
          icon={
            <img
              width="100%"
              height="100%"
              alt="Icon"
              style={{
                objectFit: "cover",
                backgroundPosition: "center",
                padding: "10px",
              }}
              src={logo}
            />
          }
          iconStyle={{
            background: "#050816",
            outline: "4px solid rgba(255,255,255,.8)",
          }}
        />
      </VerticalTimeline>
    </Container>
  );
}

export default Project;
