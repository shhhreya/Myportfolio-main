import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { MdLocationPin } from "react-icons/md";
import TypeWriter from "typewriter-effect";

function EducationCard({ education }) {
  return (
    <VerticalTimelineElement
      icon={
        <img
          width="100%"
          height="100%"
          alt={education.Education_name}
          style={{
            objectFit: "cover",
            backgroundPosition: "center",
            padding: "10px",
          }}
          src={education.Education_icon}
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
      date={education.Joined_date}
      iconStyle={{
        background: "#050816",
        outline: "4px solid rgba(255,255,255,.8)",
      }}
    >
      <div className="flex gap-2">
        <img
          className="w-20 p-2 rounded-md bg-black"
          src={education.Education_icon}
          alt="icon"
        />
        <div className="flex flex-col">
          <h3 className="text-[11px] md:text-lg text-gray-200">
            {education.Education_name}
          </h3>
          <h3 className="text-[10px] font-thin md:text-base text-gray-200">
            {education.Education_deg}
          </h3>
          <h4 className="text-[10px] md:text-sm text-gray-500">
            {education.Joined_date},{" "}
            <MdLocationPin className="inline-block w-3 md:w-4 mb-1" />
            {education.Education_loc}
          </h4>
        </div>
      </div>
      <div>
        <h4 className="text-xs md:text-sm text-[#915EFF]">
          <a
            href={education.Education_link}
            className="inline-flex items-center"
          >
            <img src=".//link.png" alt="link" className="w-3.5 inline-block" />
            <span className="inline-block">
              <TypeWriter
                options={{
                  strings: [`${education.Education_link}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </a>
        </h4>
        <div className="text-base font-thin">
          <div className="mt-2">
            <div className="text-xs md:text-sm text-gray-400">
              {education.Education_desc}
            </div>
          </div>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default EducationCard;
