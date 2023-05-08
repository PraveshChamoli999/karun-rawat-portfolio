import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isRFPowerAmp, setIsRFPowerAmp] = useState(false);
  const [isRFPassive, setIsRFPassive] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    // <div className="py-3 px-[12%] flex justify-between bg-[#02458A] text-white">
    //   <Link to="/">
    //     <div className="logo ">
    //       <img src={require("../assets/iitrLogo.png")} width={70}></img>
    //     </div>
    //   </Link>
    //   <ul className="items_container flex gap-5 justify-around items-center m-0 p-0">
    //     {/* <li className=" h-16 flex justify-center items-center text-center">
    //       Home
    //     </li>
    //     <div className="h-8 w-[1px] bg-white"></div> */}{" "}
    //     <Link to="/about-me">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         About me
    //       </li>
    //     </Link>
    //     <div className="h-8 w-[1px] bg-white"></div>
    //     <Link to="/research-technology">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         Research & Tech
    //       </li>
    //     </Link>
    //     <div className="h-8 w-[1px] bg-white"></div>
    //     <Link to="/publications">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         Publications
    //       </li>
    //     </Link>
    //     <div className="h-8 w-[1px] bg-white"></div>
    //     <Link to="/training-workshops">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         Training & Workshops
    //       </li>
    //     </Link>
    //     <div className="h-8 w-[1px] bg-white"></div>
    //     <Link to="/team-members">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         Team & Members
    //       </li>
    //     </Link>
    //     <div className="h-8 w-[1px] bg-white"></div>
    //     <Link to="/news-highlights">
    //       <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
    //         News & Highlights
    //       </li>
    //     </Link>
    //   </ul>
    //   <div></div>
    // </div>
    <div
      onMouseLeave={() => setIsDropDownOpen(false)}
      className="bg-[#02458A] text-white  "
    >
      <nav className="relative   ">
        <div className="container py-3 px-6 mx-auto lg:flex lg:justify-between lg:items-center">
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
            <div className="flex flex-col lg:flex-row lg:mx-6 gap-4 lg:gap-1">
              <NavLink
                className="my-2   transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/about-me"
              >
                About me
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2   transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/research-technology"
              >
                Reasearch & Tech
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>

              <NavLink
                className="my-2  -z-1 transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/publications"
              >
                Publications
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/training-workshops"
              >
                Training & Workshops
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/team-members"
              >
                Team & Members
              </NavLink>
              <div className="h-8 w-[1px] hidden lg:block bg-white"></div>
              <NavLink
                className="my-2  transition-colors duration-300 transform  hover:text-[#DCDCDC]  md:mx-4 md:my-0"
                to="/news-highlights"
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
