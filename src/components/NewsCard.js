import React from "react";

const NewsCard = ({ news }) => {
  return (
    <div
      className={` justify-center p-2 lg:p-6 card border-2 border-gray-200`}
    //   style={{ backgroundColor: `#` }}
    >
      <div className="upperImg justify-center mb-3">
        <img className="h-40 mx-auto" src={news.image}></img>
      </div>
      <div className="lowerContent ">
        <p className="mx-3">{news.content}</p>
      </div>
    </div>
  );
};

export default NewsCard;
