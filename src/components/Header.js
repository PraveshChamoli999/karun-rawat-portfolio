import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 px-[12%] flex justify-between bg-[#FF5733] text-white">
      <Link to="/">
        <div className="logo ">
          <img src={require("../assets/iitrLogo.png")} width={70}></img>
        </div>
      </Link>
      <ul className="items_container flex gap-5 justify-around items-center m-0 p-0">
        {/* <li className=" h-16 flex justify-center items-center text-center">
          Home
        </li>
        <div className="h-8 w-[1px] bg-white"></div> */}{" "}
        <Link to="/about-me">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            About me
          </li>
        </Link>
        <div className="h-8 w-[1px] bg-white"></div>
        <Link to="/research-technology">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            Research & Tech
          </li>
        </Link>
        <div className="h-8 w-[1px] bg-white"></div>
        <Link to="/publications">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            Publications
          </li>
        </Link>
        <div className="h-8 w-[1px] bg-white"></div>
        <Link to="/training-workshops">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            Training & Workshops
          </li>
        </Link>
        <div className="h-8 w-[1px] bg-white"></div>
        <Link to="/team-members">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            Team & Members
          </li>
        </Link>
        <div className="h-8 w-[1px] bg-white"></div>
        <Link to="/news-highlights">
          <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
            News & Highlights
          </li>
        </Link>
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
