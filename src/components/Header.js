import React from "react";

const Header = () => {
  return (
    <div className="py-3 px-[12%] flex justify-between">
      <div className="logo  bg-slate-600"></div>
      <ul className="items_container flex justify-around items-center m-0 p-0">
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          Home
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          About me
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          Research & Tech
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          Publications
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          Training & Workshops
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          Team & Members
        </li>
        <li className="w-36 border-r-2 border-black h-16 flex justify-center items-center text-center">
          News & Highlights
        </li>
      </ul>
      <div></div>
    </div>
  );
};

export default Header;
