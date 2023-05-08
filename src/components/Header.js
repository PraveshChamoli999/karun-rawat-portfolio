import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="bg-[#02458A] text-white  ">
      <nav className="relative   ">
        <div className="container py-3 px-3 mx-auto lg:flex lg:justify-between lg:items-center  ">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="lg:pl-36">
              <img
                className="w-auto lg:min-w-[70px]  h-16 sm:h-[70px] sm:w-auto "
                src={require("../assets/iitrLogo.png")}
                alt="linear-amptec-logo"
              />
            </NavLink>

            <div className="flex lg:hidden">
              <button
                onClick={() => handleClick()}
                type="button"
                className="text-white focus:outline-none duration-300  "
                aria-label="toggle menu"
              >
                {isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div
            className={` absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out  bg-[#02458A]  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? " translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-6 gap-4 lg:gap-0">
              <NavLink
                className="my-2   transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/about-me"
                onClick={() => handleClick()}
              >
                About me
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2   transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/research-technology"
                onClick={() => handleClick()}
              >
                Reasearch & Tech
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>

              <NavLink
                className="my-2  -z-1 transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/publications"
                onClick={() => handleClick()}
              >
                Publications
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/training-workshops"
                onClick={() => handleClick()}
              >
                Training & Workshops
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/team-members"
                onClick={() => handleClick()}
              >
                Team & Members
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/news-highlights"
                onClick={() => handleClick()}
              >
                News & Highlights
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
