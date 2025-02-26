import React from "react";
import textClip from "../assets/pexels-felixmittermeier-1146134.jpg";
import { Link } from "react-router-dom";
import { Container } from "../components/index.js";

function PageNotFound() {
  const textStyles = {
    backgroundImage: `url(${textClip})`,
    backgroundSize: "cover",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
  };
  return (
    <Container>
      <div className="flex justify-center md:justify-start items-center flex-col h-screen w-full dark:text-white">
        <div>
          <h1
            className={` text-center font-serif text-[6rem] md:text-[15rem]  bg-cover  text-transparent `}
            style={textStyles}
          >
            Oops!
          </h1>
          <h2 className="text-white text-center font-thin md:text-xl tracking-[5px]">
            404-PAGE NOT FOUND
          </h2>
          <h5 className="text-white text-center text-xs">
            The page you are looking for might have been removed,
            <br />
            <span className="hidden md:block">
              had it's name changed or is temporarily unavilable.
            </span>
          </h5>
          <Link to="/" className="flex justify-center">
            <h1 className="text-center mt-5 text-lg md:text-2xl bg-purple-500 p-2 rounded-md">
              Go to Homepage
            </h1>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default PageNotFound;
