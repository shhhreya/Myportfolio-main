import React, { useState } from "react";
import { Container, Logo, Button } from "../index.js";
import { Link } from "react-router-dom";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
//import resume from "../../assets/AjaySharmaResume.pdf";
import { MdOutlineFileDownload } from "react-icons/md";
function Navbar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    {
      name: "Home",
      slug: "/",
    },
    {
      name: "Certification",
      slug: "/certification",
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
  ];

  return (
    <motion.div
      className="relative z-10"
      initial={{ y: -250, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          delay: 0.2,
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        },
      }}
      exit={{ y: -250, opacity: 0 }}
    >
      <header className="bg-primary overflow-hidden ">
        <Container className="overflow-hidden">
          <nav className="flex justify-between items-center md:justify-between md:flex md:items-center overflow-hidden">
            <div className="flex justify-between items-center ml-10">
              <Link to="/">
                <Logo width="40px" />
              </Link>
            </div>

            <div className="z-10">
              <ul
                className={`md:flex mt-3 md:mt-0 border-t  md:border-none md:items-center z-20 bg-primary transition-all duration-700 ease-in-out md:transition-none sm:shadow-md md:shadow-none left-0 w-full md:z-auto md:static absolute md:w-auto ${
                  isMenuOpen ? "top-[31px] " : "top-[-400px]"
                }`}
              >
                {navItems.map((item) => (
                  <li className="ml-2 mr-2" key={item.name}>
                    <button
                      className={` inline-block px-5 py-1 mt-1 md:m-1 duration-200  text-base text-white  ${
                        location.pathname === item.slug
                          ? "border-b-2 border-[#915EFF] "
                          : ""
                      }`}
                      onClick={() => navigate(item.slug)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
                <li className="px-6 py-2  lg:pl-40 ">
                  <Link
                    to="#"
                    download="#"
                    
                  >
                    <Button className="border border-[#915EFF] rounded-full py-0.5 px-2 md:px-4 md:py-1 flex gap-2 justify-center items-center " disabled>
                      <MdOutlineFileDownload />
                      My Resume
                    </Button>
                  </Link>
                </li>
              </ul>
              <span
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-3xl p-2 md:hidden flex items-center transition-all duration-700 ease-in-out cursor-pointer"
              >
                {!isMenuOpen ? (
                  <RiMenu3Fill color="white" />
                ) : (
                  <IoCloseSharp color="white" />
                )}
              </span>
            </div>
          </nav>
        </Container>
      </header>
    </motion.div>
  );
}

export default Navbar;
