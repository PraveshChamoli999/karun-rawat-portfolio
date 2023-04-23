import React, { useEffect, useState } from "react";
import { getAllPublications } from "../services/getData";

const TrainingAndWorkshops = () => {
  const [publications, setPublications] = useState([]);
  const [error, setError] = useState();

  const types = ["Workshop"];

  useEffect(() => {
    async function fetchPublications() {
      const res = await getAllPublications("workshop");
      console.log(res);
      if (res.error) {
        setError(res.error);
      } else {
        setPublications(res.data || []);
      }
    }
    fetchPublications();
  }, []);

  return (
    <div>
      <div className="research my-2 xl:my-16">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold pt-3 xl:pt-12">
          Training And Workshops
        </h2>
        <div className="cardContainer flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
          {error ? (
            <div>{error}</div>
          ) : (
            <div className="">
              {types.map((type) => {
                return (
                  <div className="p-4">
                    {publications.filter((publication) => {
                      return publication.type === type.toLowerCase();
                    }).length > 0 ? (
                      <h2 className="text-3xl font-semibold mb-3">
                        {type + "s"}
                      </h2>
                    ) : (
                      <></>
                    )}
                    <ul className="list-disc p-2">
                      {publications
                        .filter((publication) => {
                          return publication.type === type.toLowerCase();
                        })
                        .map((publication) => {
                          return (
                            <li key={publication._id}>
                              <p>{publication.content}</p>
                              <p className="text-right pr-10">
                                -{publication.year}
                              </p>
                            </li>
                          );
                        })}
                    </ul>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrainingAndWorkshops;
