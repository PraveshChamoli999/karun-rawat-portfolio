import React, { useEffect, useState } from "react";
import { getAllNews } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const NewsAndHighlights = () => {
  const [newsList, setNewsList] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    async function fetchNewsList() {
      const res = await getAllNews();
      if (res.error) {
        setError(res.error);
      } else {
        setNewsList(res.data || []);
        activeLoader(false);
      }
    }
    fetchNewsList();
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  const NewsItem = ({ item }) => (
    <div className="group flex items-start gap-4 p-5 bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300">
      <div className="flex-shrink-0 mt-1">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
          📰
        </div>
      </div>
      <div className="flex-grow">
        <p className="text-gray-800 group-hover:text-blue-700 transition-colors duration-300">
          {item.content}
          {item.date && (
            <span className="block text-sm text-gray-500 mt-1">
              {new Date(item.date).toLocaleDateString()}
            </span>
          )}
        </p>
      </div>
    </div>
  );

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="text-center">
          <h1
  className={`block text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-4 transition-all duration-1000 ${
    isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
          >
            News & Highlights
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
              isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
        
          </p>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {isLoader ? (
          <div className="flex justify-center p-12">
            <Lottie options={loaderSetting} height={120} width={120} />
          </div>
        ) : error ? (
          <div className="p-8 text-center text-red-500">{error}</div>
        ) : newsList.length === 0 ? (
          <div className="p-8 text-center text-gray-500">No news available at the moment.</div>
        ) : (
          <div className="grid gap-4 mb-16">
            {newsList.map((news, index) => (
              <NewsItem key={news._id || index} item={news} />
            ))}
          </div>
        )}

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm pb-8">
          <p>For press inquiries or more information, please contact our communications office.</p>
        </div>
      </div>
    </div>
  );
};

export default NewsAndHighlights;
