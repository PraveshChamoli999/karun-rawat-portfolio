import React, { useEffect, useState } from "react";
import { getAllPublications } from "../services/getData";
import Loader from "../assets/loader.json";
import Lottie from "react-lottie";

const TrainingAndWorkshops = () => {
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState();
  const [isLoader, activeLoader] = useState(true);

  const types = ["Workshop"];

  useEffect(() => {
    async function fetchPublications() {
      const res = await getAllPublications("workshop");
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

  // ***Loader
  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

  return (
    <div>
      <div className="bg-[#F7F7F7] py-10">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
          Training And Workshops
        </h2>{" "}
        {isLoader ? (
          <div className="flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
            <Lottie options={loaderSetting} height={60} width={60} />
          </div>
        ) : (
          <div className="cardContainer flex flex-col shadow-md rounded-lg gap-5 bg-white lg:mx-[10%] md:mx-[10%] mx-[2%] px-12 py-14 ">
            {error ? (
              <div>{error}</div>
            ) : (
              <div className="">
                <div className="px-4">
                  <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
                    <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
                    Workshops
                  </h3>
                  <ul className="mt-4 list-disc pl-5 flex flex-col gap-3">
                    {publications
                      .filter((publication) => {
                        return publication.type === "workshop";
                      })
                      .map((publication) => {
                        return (
                          <li
                            key={publication._id}
                            className="font-normal text-[16px] leading-[170%] text-[#5B5B5B]"
                          >
                            {publication.content}
                          </li>
                        );
                      })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrainingAndWorkshops;
