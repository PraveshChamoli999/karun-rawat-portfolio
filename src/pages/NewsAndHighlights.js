import React, { useEffect, useState } from "react";
import { getAllNews } from "../services/getData";

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
      <div className="research my-2 ">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold pt-3 xl:pt-12">
          News and Highlights
        </h2>
        <div className="cardContainer flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
          {error ? (
            <div>{error}</div>
          ) : (
            <div className="">
              <ul className="list-disc p-2">
                {NewsList.map((news) => {
                    return (
                      <li key={news._id}>
                        <p>{news.content}</p>
                      </li>
                    );
                  })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsAndHighlights;
