import React from "react";

const Header = () => {
  return (
    <div className="py-3 px-[12%] flex justify-between bg-[#02458A] text-white">
      <div className="logo ">
        <img src={require("../assets/iitrLogo.png")} width={70}></img>
      </div>
      <ul className="items_container flex gap-5 justify-around items-center m-0 p-0">
        <li className=" h-16 flex justify-center items-center text-center">
          Home
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          About me
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          Research & Tech
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          Publications
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          Training & Workshops
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          Team & Members
        </li>
        <div className="h-8 w-[1px] bg-white"></div>
        <li className=" h-16 flex justify-center items-center text-center">
          News & Highlights
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
