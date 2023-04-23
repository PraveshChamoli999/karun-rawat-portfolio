import React, { useEffect, useState } from "react";
import { getAllNews } from "../services/getData";
import NewsCard from "../components/NewsCard";

const NewsAndHighlights = () => {
  const [NewsList, setNewsList] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchNewsList() {
      const res = await getAllNews();
      console.log(res);
      if (res.error) {
        setError(res.error);
      } else {
        setNewsList(res.data || []);
      }
    }
    fetchNewsList();
  }, []);

  return (
    <div>
      <div className="research my-2 xl:my-16">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold pt-3 xl:pt-12">
          News and Highlights
        </h2>
        <div className="cardContainer flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
          {error ? (
            <div>{error}</div>
          ) : (
            <div className="">
              <div className="p-4">
                <div className="grid grid-cols-1 gap-6 lg:gap-1 md:grid-cols-2 lg:grid-cols-3">
                  {NewsList.map((news) => {
                    return <NewsCard news={news}></NewsCard>;
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndHighlights;
