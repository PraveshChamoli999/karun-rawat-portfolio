import React, { useEffect, useState } from "react";
import { getAllNews } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const NewsAndHighlights = () => {
  const [NewsList, setNewsList] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);

  useEffect(() => {
    async function fetchNewsList() {
      const res = await getAllNews();
      console.log(res);
      if (res.error) {
        setError(res.error);
      } else {
        setNewsList(res.data || []);
        activeLoader(false);
      }
    }
    fetchNewsList();
  }, []);

  // ***Loader
  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  return (
    <div className="bg-[#F7F7F7] py-10 ">
      <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
        News and Highlights
      </h2>
      {isLoader ? (
        <div className="flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
          <Lottie options={loaderSetting} height={60} width={60} />
        </div>
      ) : (
        <div className="cardContainer flex flex-col shadow-md rounded-lg gap-5 bg-white mx-[10%] px-12 py-14">
          {error ? (
            <div>{error}</div>
          ) : (
            <div className="">
              <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
                {NewsList.map((news) => {
                  return (
                    <li
                      key={news._id}
                      className=" font-normal text-[16px] leading-[170%] text-[#5B5B5B]"
                    >
                      {news.content}
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default NewsAndHighlights;
