import React from "react";

const ReasearchandTech = () => {
  return (
    <div>
      <div className="research bg-[#F7F7F7] py-10 ">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
          Research & Development
        </h2>
        <div className="cardContainer flex flex-col shadow-md rounded-lg gap-5 bg-white lg:mx-[10%] md:mx-[10%] mx-[2%] px-12 py-14 ">
          <div className="font-normal text-[16px] leading-[170%] text-[#5B5B5B]">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Research Area
            </h3>
            <ul className="mt-4 list-disc pl-5 flex flex-col gap-4 ">
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  Radio Frequency Power Amplifier Design
                </h3>
                <p>
                  Efficiency enhancement in Power Amplifiers: Doherty, Chireix
                  outphasing amplifiers, Waveform Engineering (Class E/F, B/J,
                  etc.) based Octave & Multi-octave power amplifiers etc.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  On-chip Power Amplifiers
                </h3>
                <p>
                  Gallium Nitride MMIC Design, SiGe BiCMOS based millimeter wave
                  design, RF mixed signal CMOS design etc.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  Embedding System Design for Radio development
                </h3>
                <p>
                  Multi-functional RF design, Delta Sigma Modulation for
                  all-digital transmitters, radio functionality in wireless
                  transmitters such as predistortion, beam forming etc.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  High Power Device Characterization & Modeling
                </h3>
                <p>
                  Bias dependent s-parameters measurement, Nonlinear
                  De-embedding/embedding, nonlinear vector network analysis,
                  Large Signal Modeling (Angelov Model for GaN HEMT Design)
                </p>
              </li>
            </ul>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5B5B5B] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              International Collaborators
            </h3>
            <ul className="mt-4 list-decimal pl-5 flex flex-col gap-3">
              <li>Prof. Fadhel Ghannouchi, University of Calgary, Canada</li>
              <li>Prof. M. Helaoui, University of Calgary, Canada</li>
              <li>Prof. Patrick Roblin, Ohio State University, USA</li>
              <li>Prof. Wenhua Chen, Tsinghua University, Beijing, China</li>
              <li>
                Prof. Francisco Falcone, Universidad Publica de Navarra, UPNA,
                Spain
              </li>
            </ul>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5B5B5B] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Research Facility
            </h3>
            <ul className="mt-4 list-disc pl-5 flex flex-col gap-5">
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  High Power Nonlinear Device Characterization & Modeling (GaN
                  HEMT)
                </h3>
                <p>
                  Key Equipment: Focus Load Pull & Software, Auriga Pulsed-IV
                  system, Keysight Vector Network Analyzer, Cascade Probe
                  Station, Focus Test-Jigs
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  On-Chip Characterization up to 67 GHz
                </h3>
                <p>
                  Key Equipment: Keysight Nonlinear Vector Network Analyzer
                  (X-Parameter features), Cascade Probe Station
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  Wireless Communication Test-Bedupto 6 GHz
                </h3>
                <p>
                  Key Equipment: Keysight Vector Signal Analyzer, Keysight
                  Vector Signal Generator, Keysight Power Supplies, Analog
                  Device ZC706 & AD9371 Software Design Radio (SDR) setup,
                  Alterra Stratix-II GX.
                </p>
              </li>
              <li>
                <h3 className="font-medium text-[#1d466e] text-[1.1rem]">
                  High Power Device Characterization & Modeling
                </h3>
                <p>
                  Bias dependent s-parameters measurement, Nonlinear
                  De-embedding/embedding, nonlinear vector network analysis,
                  Large Signal Modeling (Angelov Model for GaN HEMT Design)
                </p>
              </li>
            </ul>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5B5B5B] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-2 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Sponsors and Projects
            </h3>
            <h3 className="text-[1.1rem] font-normal text-[#1d466e]">
              Sponsors / Industry Partners
            </h3>
            <h3 className="text-[1.3rem] font-medium text-[#1d466e] mt-5">
              External Funding (Funds Generated)
            </h3>
            <p className="mb-3 font-semibold">
              An overall funding of Rs. 694.75 Lacs (~ USD: 0.93 M) have been
              generated from various sponsors for research projects and
              consultancy work.
            </p>
            <h3 className="text-[1.5rem] font-normal text-[#1d466e] flex gap-1 mt-10 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Ongoing Projects:
            </h3>

            <div class="relative overflow-x-auto sm:rounded-lg font-medium my-3">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" class="px-6 py-3 ">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 w-[120px] ">
                      Duration
                    </th>
                    <th scope="col" class="px-5 py-3 w-[140px] ">
                      Sponsored By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px] text-gray-900 whitespace-nowrap"
                    >
                      Design of 5G Power Amplifiers Under Research Partnership
                      Agreement with WIPRO Ltd.
                    </td>
                    <td class="px-5 py-4">2023-2024 Role: PI</td>
                    <td class="px-6 py-4">DEAL, WIPRO Ltd.</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Design & Development of Ultra-Wideband Multi-Octave
                      Gallium Nitride Monolithic Microwave Integrated Circuit
                      (MMIC) based Power Amplifier
                    </td>
                    <td class="px-5 py-4">2019-2023 Role: PI</td>
                    <td class="px-6 py-4">
                      IMPRINT2 (DST, Government of India)
                    </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Radio Frequency Power Amplifier Design & Distortion
                      Mitigation for Energy and Spectrum Efficient 5G Wireless
                      Transmitters
                    </td>
                    <td class="px-5 py-4">2019-2021 Role: PI</td>
                    <td class="px-6 py-4">SPARC (MHRD, Government of India)</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Study and Design Challenges in GaN MMIC based Power
                      Amplifier at Ku-Band
                    </td>
                    <td class="px-5 py-4"> 2017-2022 Role: PI</td>
                    <td class="px-6 py-4">SSPL, DRDO, Government of India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="font-light mt-7">
            <h3 className="text-[1.5rem] font-normal text-[#1d466e] flex gap-1 mt-10 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Ongoing Projects:
            </h3>
            <div class="relative overflow-x-auto sm:rounded-lg font-medium my-3">
              <table class="w-full text-sm text-left text-gray-500 ">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" class="px-6 py-3 ">
                      Title
                    </th>
                    <th scope="col" class="px-6 py-3 w-[120px] ">
                      Duration
                    </th>
                    <th scope="col" class="px-5 py-3 w-[140px] ">
                      Sponsored By
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px] text-gray-900 whitespace-nowrap"
                    >
                      Design of Airborne Power Amplifiers for L-band and UHF
                      frequency range.
                    </td>
                    <td class="px-5 py-4">2020-2022 Role: PI</td>
                    <td class="px-6 py-4">DEAL, DRDO Government of India</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Power Amplifier Design at 47 GHz using SiGeBiCMOS
                      Technology for 5G Applications” under University
                      Partnership Program. Partnership Program. Partnership
                      Program. Partnership Program. Partnership Program.
                    </td>
                    <td class="px-5 py-4">2021-2023 Role: PI</td>
                    <td class="px-6 py-4">Global Foundries</td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Wideband Gallium Nitride Based Outphasing Power Amplifier
                      for Upcoming 5G Wireless Transmitters.
                    </td>
                    <td class="px-5 py-4">2019-2022 Role: PI</td>
                    <td class="px-6 py-4">
                      Extra Mural (SERB Government of India)
                    </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Nonlinear GaN HEMT Device Characterization for Power
                      Amplifier Design and Implementation at X-Band frequencies.
                    </td>
                    <td class="px-5 py-4"> 2019-2022 Role: PI</td>
                    <td class="px-6 py-4">
                      ER&IPR (DRDO, Government of India)
                    </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Design & Development of Ultra-Wideband Multi-Octave
                      Gallium Nitride Monolithic Microwave Integrated Circuit
                      (MMIC) based Power Amplifier.
                    </td>
                    <td class="px-5 py-4"> 2019-2022 Role: PI</td>
                    <td class="px-6 py-4">
                      IMPRINT2 (DST, Government of India)
                    </td>
                  </tr>
                  <tr class="bg-white border-b ">
                    <td
                      scope="row"
                      class="px-6 py-4 w-[500px]  text-gray-900 whitespace-wrap"
                    >
                      Radio Frequency Power Amplifier Design & Distortion
                      Mitigation for Energy and Spectrum Efficient 5G Wireless
                      Transmitters.
                    </td>
                    <td class="px-5 py-4"> 2019-2022 Role: PI</td>
                    <td class="px-6 py-4">SPARC (MHRD, Government of India)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ReasearchandTech;
