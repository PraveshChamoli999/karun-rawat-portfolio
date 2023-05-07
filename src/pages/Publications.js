import React, { useEffect, useState } from "react";
import { getAllPublications } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const Publications = () => {
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);

  const types = ["Book", "Patent", "Journal", "Conference"];

  useEffect(() => {
    async function fetchPublications() {
      const res = await getAllPublications("");
      console.log(res);
      if (res.error) {
        setError(res.error);
      } else {
        setPublications(res.data || []);
        activeLoader(false);
      }
    }
    fetchPublications();
  }, []);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  return (
    <div>
      <div className="research bg-[#F7F7F7] py-10">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
          Publications
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
              <div className="font-normal text-[16px] leading-[170%] text-[#5B5B5B] flex flex-col gap-10">
                {/* ***********************Journal***************** */}
                <div className="Journal">
                  <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
                    <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
                    Books
                  </h3>
                  <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
                    {publications
                      ? publications
                          .filter((publication) => {
                            return publication.type === "book";
                          })
                          .map((data) => {
                            return <li>{data.content}</li>;
                          })
                      : "..."}
                  </ul>
                </div>

                {/* ***********************Patents***************** */}
                <div className="Patents">
                  <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
                    <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
                    Patents
                  </h3>
                  <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
                    {publications
                      ? publications
                          .filter((publication) => {
                            return publication.type === "patent";
                          })
                          .map((data) => {
                            return <li>{data.content}</li>;
                          })
                      : "..."}
                  </ul>
                </div>

                {/* ***********************Journal***************** */}
                <div class="relative overflow-x-auto font-medium my-3">
                  <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
                    <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
                    Journals
                  </h3>
                  <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" class="px-6 py-3 ">
                          Title
                        </th>

                        <th scope="col" class="px-5 py-3 w-[80px] ">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {publications
                        ? publications
                            .filter((publication) => {
                              return publication.type === "journal";
                            })
                            .map((data) => {
                              return (
                                <tr class="bg-white border-b ">
                                  <td
                                    scope="row"
                                    class="px-6 py-4 w-[500px] text-gray-600 whitespace-wrap"
                                  >
                                    {data.content}
                                  </td>

                                  <td class="px-6 py-4">{data.year}</td>
                                </tr>
                              );
                            })
                        : "..."}
                    </tbody>
                  </table>
                </div>
                {/* **********************Conference***************** */}
                <div class="COnference relative overflow-x-auto font-medium my-3">
                  <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
                    <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
                    Conference
                  </h3>
                  <table class="w-full text-sm text-left text-gray-500 ">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                      <tr>
                        <th scope="col" class="px-6 py-3 ">
                          Title
                        </th>

                        <th scope="col" class="px-5 py-3 w-[80px] ">
                          Year
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {publications
                        ? publications
                            .filter((publication) => {
                              return publication.type === "conference";
                            })
                            .map((data) => {
                              return (
                                <tr class="bg-white border-b ">
                                  <td
                                    scope="row"
                                    class="px-6 py-4 w-[500px] text-gray-600 whitespace-wrap"
                                  >
                                    {data.content}
                                  </td>

                                  <td class="px-6 py-4">{data.year}</td>
                                </tr>
                              );
                            })
                        : "..."}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Publications;
