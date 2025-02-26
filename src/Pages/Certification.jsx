import React from "react";
import {
  CertificationCard,
  StarsCanvas,
  Container,
} from "../components/index.js";
import { Certificationinfo } from "../content/content.js";
import { useInView } from "react-intersection-observer";
function Certification() {
  const { ref, inView } = useInView({
    triggerOnce: false,
  });
  return (
    <div ref={ref} id="certification" className="py-10 relative">
      <StarsCanvas number={4998} size={0.002} />
      <Container>
        <div className="px-2 md:px-14 py-5">
          <h4 className="text-gray-500">MY CERTIFICATION</h4>
          <h1 className="text-5xl font-bold text-gray-200">Certification</h1>
          <p className="text-sm md:text-base text-gray-300 w-full md:w-1/2 mt-5">
            Following are the certifications that I have completed in the field
            of Web Development and React Development.
          </p>
        </div>

        <div className="px-2 md:px-14 flex flex-wrap gap-7 justify-center items-center">
          {Certificationinfo.map((certification, index) => (
            <CertificationCard
              key={index}
              certification={certification}
              index={index}
              length={Certificationinfo.length}
              inView={inView}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Certification;
