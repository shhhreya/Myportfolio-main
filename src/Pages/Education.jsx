import React from "react";
import logo from "../assets/Anamelogo2 (2).png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Container, EducationCard, StarsCanvas } from "../components/index.js";
import { Educationinfo } from "../content/content";
function Education() {
  return (
    <Container className="py-10 relative">
      <StarsCanvas number={4998} size={0.002} />
      <div id="education" className="px-14 py-5">
        <h4 className="text-gray-500">MY EDUCATION</h4>
        <h1 className="text-5xl font-bold text-gray-200">Education</h1>
        <p className="text-sm md:text-base text-gray-300 w-full md:w-1/2 mt-5">
          Following are the degrees that I have completed and currently pursuing
          in the field of Computer Science and Engineering.
        </p>
      </div>
      <VerticalTimeline lineColor="rgba(255,255,255,.8)">
        {Educationinfo.map((education, index) => (
          <EducationCard key={`experience-${index}`} education={education} />
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

export default Education;
