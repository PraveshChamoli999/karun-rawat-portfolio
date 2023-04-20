import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="py-3 px-[12%] flex justify-between bg-[#FF5733] text-white">
      <div className="logo ">
        <img src={require("../assets/iitrLogo.png")} width={70}></img>
      </div>
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
        <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
          Publications
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
          Training & Workshops
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
          Team & Members
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center hover:text-[#DCDCDC] cursor-pointer">
          News & Highlights
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
