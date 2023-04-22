import React from "react";

const TeamAndMembers = () => {
  const mtechSupervisions = [
    "Amit placed in GalaxEye Space Pvt. Ltd. (RF design Engineer) 2021 Graduated",
    "Shruti Shikha placed in Qualcomm (Bluetooth Developer) 2021 Graduated",
    "Rohit Gupta, “Enclosure effect on Microwave Power Amplifier”, Graduation: 2020.",
    "Zaw Thet, “Design and analysis of multiband microstrip filter”, Graduation: 2020.",
    "Ahmad Zakaria, “On-Chip PA Design using GaN HEMT MMIC Process”, Graduation: 2019.",
    "Rashmi Soni, “Multiport Network Design and Application for Vector Network Analysis”, Graduation: 2018.",
    "Rambabu Kumar, “Wide band Distributed RF power amplifier”, Graduation: 2017.",
    "Jai Datt Poonia, “GaN Based Switch Mode Power Amplifier In Class-D Mode”, Graduation: 2017.",
    "Pankaj Kakkad, “Broadband Class E RF Power Amplifier”, Graduation: 2017.",
    "Samarth Saxena, “Modeling of GaN HEMT and RF Power Amplifier Design”, Graduation: 2016.",
    "Viswas N.G., Design, “Analysis and Characterization of GaN HEMT based Power Amplifiers”, Graduation: 2015.",
    "Akhilesh K, “Design and Optimization of Doherty Power Amplifier with Extended Efficiency Range”, Graduation: 2014.",
    "Parul Gupta, “Design of harmonic terminated power amplifier”, Graduation: 2014.",
    "Lalbahadur Dube, “Six Port Modulator Design using Six Port Microwave Network”, Graduation: 2014.",
    "Girish Kumar Ajmera, “Design of High Efficiency Multi-Standard Multi-Stage Doherty Power Amplifier”, Graduation: 2014.",
  ];

  const placements = [
    [
      "Nishant Kumar",
      "PhD, Under Progress",
      "IIT Roorkee",
      "Preplced as Principle Engg. Design Enablement Texas Instruments (TI) Bangalore, India",
    ],
    [
      "Y. Mary Asha Latha",
      "PhD, 2021",
      "IIT Roorkee",
      "Post Doc fellow at Instituto de Telecomunicações, Aveiro, Portugal.",
    ],
    ["Ekta Aggrawal", "PhD, 2021", "IIT Roorkee", "Placed at IISC Bangalore"],
    ["Sujata Ghosh", "PhD, 2020", "IIT Roorkee", "Global Foundries, Bengaluru"],
    [
      "Hemant Kumar Singhal",
      "PhD, 2020",
      "IIT Roorkee",
      "Asst. Prof, NIT Uttarakhand",
    ],
    ["Chetan Pathak", "PhD, 2019", "IIT Roorkee", "Asst. Prof, RJIT, Gwalior"],
    ["Ayushi Barthwal", "PhD, 2018", "IIT Delhi", "Asst. Prof, JNU, New Delhi"],
    [
      "Robin Kalyan",
      "PhD, 2017",
      "IIT Delhi",
      "Scientist, A*STAR Singapore (Former Employee ISRO)",
    ],
    ["Rashmi Soni", "M.Tech. 2018", "IIT Roorkee", "Intel, Bangalore, India"],
    ["Varun Deep Singh", "M.Tech. 2017", "IIT Roorkee", "AAI, India"],
    [
      "Viswas N.G.",
      "M.Tech, 2015",
      "IIT Roorkee",
      "Qualcomm, Bangalore, India",
    ],
    [
      "Girish Kumar Ajmera",
      "M.Tech, 2014",
      "IIT Delhi",
      "Applied Materials, India",
    ],
    [
      "Lalbahadur Dube",
      "M.Tech, 2014",
      "IIT Delhi",
      "DEAL, DRDO, Dehradun, India",
    ],
    ["Parul Gupta", "M.Tech, 2014", "IIT Delhi", "SSPL, DRDO, Delhi, India"],
    ["Akhilesh K.", "M.Tech, 2014", "IIT Delhi", "Intel"],
    [
      "Samarth Saxena",
      "B.Tech. & M.Tech. , 2016",
      "IIT Roorkee",
      "Astrome Technologies, Bangalore, India",
    ],
    [
      "Pankaj Kakkad",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Airport Authority of India, Government of India",
    ],
    [
      "Jai Dutt Poonia",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Bharat Sanchar Nigam Ltd., Government of India",
    ],
    [
      "Rambabu Kumar",
      "B.Tech. & M.Tech. , 2017",
      "IIT Roorkee",
      "Indian Meteorological Department, Government of India",
    ],
    [
      "Piyush Garg",
      "B.Tech. 2018",
      "IIT Roorkee",
      "SAC, ISRO, Ahmedabad, India",
    ],
  ];
  return (
    <div className="research my-2 xl:my-16">
      <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold pt-3 xl:pt-12">
        Team And Members
      </h2>
      <div className="cardContainer flex flex-col shadow-md gap-2 bg-white mx-[12%] px-8 py-10">
        <div>
          <h3 className="text-3xl font-semibold mb-3">M.Tech. Supervision</h3>
          <ul className="list-disc p-6">
            {mtechSupervisions.map((mtechSupervision, index) => (
              <li key={index}>
                <div key={index} className="px-3 py-1">
                  {mtechSupervision}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="px-5 py-3">
          <h3 className="text-3xl font-semibold mb-3">
            Placement details of students supervised
          </h3>
        </div>
        <div className="relative overflow-x-auto sm:rounded-lg font-medium my-3">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-black uppercase bg-gray-50 ">
              <tr>
                <th scope="col" class="px-6 py-3 ">
                  #
                </th>
                <th scope="col" class="px-6 py-3 ">
                  Names of students
                </th>
                <th scope="col" class="px-6 py-3 ">
                  Degree obtained
                </th>
                <th scope="col" class="px-6 py-3 ">
                  Institute
                </th>
                <th scope="col" class="px-6 py-3 ">
                  Working at
                </th>
              </tr>
            </thead>
            <tbody>
              {placements.map((placement, index) => (
                <tr className="bg-white border-b" key={index}>
                  <td
                    scope="row"
                    class="px-6 py-4 whitespace-nowrap"
                    key={index}
                  >
                    {index + 1}
                  </td>
                  {placement.map((p, idx) => (
                    <td
                      scope="row"
                      class="px-6 py-4 whitespace-nowrap"
                      key={idx}
                    >
                      {p}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TeamAndMembers;
