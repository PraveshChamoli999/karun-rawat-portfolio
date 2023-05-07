import React from "react";

const Card = ({ data }) => {
  return (
    <div
      className={`card h-[400px] lg:h-[450px] flex flex-col justify-start items-center text-white  `}
      style={{ backgroundColor: `#${data.color}` }}
    >
      <div className="upperImg bg-[#e6fdff] w-full flex flex-col justify-start items-center">
        {/* <img src={require("../assets/img1.png")} width={200}></img> */}
        <img src={data.link} width={200}></img>
      </div>
      <div className="lowerContent ">
        <h3 className="text-[1.1rem] font-semibold my-3 mx-3">{data.title}</h3>
        <p className="mx-3">{data.content}</p>
      </div>
    </div>
  );
};

export default Card;
