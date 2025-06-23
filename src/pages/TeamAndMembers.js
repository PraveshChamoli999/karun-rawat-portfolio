import React from "react";

const TeamAndMembers = () => {
  const mtechSupervisions = [
    "Anshul Pandey, “A 6-bit 65 nm CMOS Active Phase Shifter in Ku Band for Analog Beamforming Application”, Graduation: 2025.",
    "Manmathesh Mishra, “ Design of A 47 GHz Power Amplifier in A 130 nm SiGe BiCMOS8XP Process Technology”, Graduation: 2023.",
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

  const phdSupervisionsCompleted = [
    "Anuj Kumar Sahoo, “Multi-Port Networks For RF Measurement and Wideband Transmitter Design”, Graduation: 2023.",

    "Nishant Kumar, “Delta Sigma Modulation Based Digital Transmitter For Upcoming Wireless Communication”, Graduation: 2021.",

    "Y.M. AshaLatha, “Waveform Engineering Inspired Power Amplifiers for Wideband Applications ”, Graduation: 2021.",

    "E. Aggrawal, “Wideband Continuous Mode Power Amplifiers for Outphasing Wireless Transmitters”, Graduation: 2021.",

    "H. K. Singhal, “Multi-Octave Transmitter Design With Filter-Less Harmonic Suppression Schemes For Power Amplifiers ”, Graduation: 2020.",

    "Sujata Ghosh, “Bandwidth and back-off enhancement in Doherty Power Amplifier”, Graduation: 2020.",

    "C. Pathak, “Characterization & Mitigation of Linear & Non-Linear Distortions in Six-Port Modulator”, Graduation: 2019.",

    "A. Barthwal, “Bandwidth and Dynamic Range Extension of Load Modulation in Doherty PA Architecture”, Graduation: 2019.",

    "R. Kalyan, “Reconfigurable Concurrent Multi-band Doherty Power Amplifier”, Graduation: 2017.",
  ];

  const phdSupervisionsOngoing = [
    "Ahmad Zakaria, “RF Packaging & Thermal Design for High Power Amplifiers”",

    "Ashish Jindal, “Broadband Transmit/Receive Front end functional block using GaN HEMT Technology”",

    "Avinash Singh, “Design and Analysis of Wideband and Linearized Transmitter  in Multi-Chip Module.”",

    "Reddy Chaitanya, “Power Amplifier Design in SiGe Bi-CMOS Technology”",

    "B. Ganesh Pandurang, “GaN HEMT Device Characterization Modelling and MMIC Design”",

    "Amrit Kumar Panigrahi, “Wireless Radio Design in Embedded Platform”",

    "Kamini Singh, “Power amplifier with high Spectral & Power efficiency for Wireless Communication in CMOS RFIC Technology”",

    "Tarun Kumar Surethiya, “Power amplifier Design using CMOS RFIC Technology”",

    "Nupur Sood, “High Efficiency & Linearized Power Amplifier Module Design”",

    "Amit Singh, “Nupur Sood, “High Efficiency & Linearized Power Amplifier Module Design”",

    "Ahmad Zakaria Ahmad, “Wideband RF Power Amplifier with Non Linear Device Model Embedding”",
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
    // <div className="my-7 py-20">
    <div className="bg-[#F7F7F7] py-10">
      <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
        Team And Members
      </h2>
      <div className="cardContainer flex flex-col shadow-md rounded-lg gap-5 bg-white lg:mx-[10%] md:mx-[10%] mx-[2%] px-12 py-14">
        <div>
          <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
            <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
            PhD Supervision - Ongoing
          </h3>
          <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
            {phdSupervisionsOngoing.map((phdSupervision, index) => (
              <li key={index}>
                <div key={index} className="px-3 py-1">
                  {phdSupervision}
                </div>
              </li>
            ))}
          </ul>
        </div>{" "}
        <div className="mt-10">
          <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
            <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
            PhD Supervision - Completed
          </h3>
          <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
            {phdSupervisionsCompleted.map((phdSupervision, index) => (
              <li key={index}>
                <div key={index} className="px-3 py-1">
                  {phdSupervision}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10">
          <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
            <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
            M.Tech. Supervision
          </h3>
          <ul className="mt-4 list-disc pl-5 flex flex-col gap-4">
            {mtechSupervisions.map((mtechSupervision, index) => (
              <li key={index}>
                <div key={index} className="px-3 py-1">
                  {mtechSupervision}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-10">
          <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
            <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
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
      {/* </div> */}
    </div>
  );
};

export default TeamAndMembers;
