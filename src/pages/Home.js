import React from "react";
import { Card } from "../components";

const Home = () => {
  return (
    <div>
      {/* ************************Research Section ************************ */}
      <div className="research my-2 ">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-5 py-3 xl:py-12">
          Areas of Research
        </h2>
        <div className="cardContainer flex flex-col gap-8 justify-center items-center w-[100%] mb-20">
          <div
            className={`card  w-[80vw] flex flex-col md:flex-row justify-start items-center text-white shadow-md rounded-lg sm:pb-5 md:pb-0`}
            style={{ backgroundColor: `#ffffff`, color: "black" }}
          >
            <div className="upperImg bg-[#e6fdff]  lg:w-[550px] md:w-[350px] flex flex-col justify-center items-center h-[300px] overflow-hidden">
              <img
                src={require("../assets/Research & Tech/p1.png")}
                className="h-[80%]"
              ></img>
            </div>
            <div className="lowerContent md:ml-10  w-[78%]">
              <h3 className="text-[1.5rem] font-semibold my-5 ">
                Radio Frequency Active circuits
              </h3>
              <p className="pb-5">
                Power Amplifiers, Efficiency enhancement Doherty Power
                Amplifiers, Chireix outphasing amplifiers, Waveform Engineering
                (Class E/F, B/J, etc.) based Octave & Multi-octave power
                amplifiers etc.
              </p>
            </div>
          </div>
          <div
            className={`card  w-[80vw] flex flex-col md:flex-row justify-start items-center text-white shadow-md rounded-lg sm:pb-5 md:pb-0`}
            style={{ backgroundColor: `#ffffff`, color: "black" }}
          >
            <div className="upperImg bg-[#e6fdff]  lg:w-[550px] md:w-[350px] flex flex-col justify-center items-center h-[300px] overflow-hidden">
              <img
                src={require("../assets/Research & Tech/p2.png")}
                className="scale-125"
              ></img>
            </div>
            <div className="lowerContent md:ml-10  w-[78%]">
              <h3 className="text-[1.5rem] font-semibold my-5 ">
                On-chip RF Circuits
              </h3>
              <p className="pb-5">
                Power Amplifier Design in Gallium Nitride MMIC Design, BiCMOS RF
                circuits with millimeter wave applications, RF mixed signal CMOS
                design etc.
              </p>
            </div>
          </div>
          <div
            className={`card  w-[80vw] flex flex-col md:flex-row justify-start items-center text-white shadow-md rounded-lg sm:pb-5 md:pb-0`}
            style={{ backgroundColor: `#ffffff`, color: "black" }}
          >
            <div className="upperImg bg-[#e6fdff]  lg:w-[550px] md:w-[350px] flex flex-col justify-center items-center h-[300px] overflow-hidden">
              <img
                src={require("../assets/Research & Tech/p4.jpg")}
                className="scale-150"
              ></img>
            </div>
            <div className="lowerContent md:ml-10  w-[78%]">
              <h3 className="text-[1.5rem] font-semibold my-5 ">
                Embedding System Design for Radio development
              </h3>
              <p className="pb-5">
                Delta Sigma Modulation with Noise Shaping Filter, radio
                functionality in wireless transmitters such as predistortion,
                beam forming etc.
              </p>
            </div>
          </div>
          <div
            className={`card  w-[80vw] flex flex-col md:flex-row justify-start items-center text-white shadow-md rounded-lg sm:pb-5 md:pb-0`}
            style={{ backgroundColor: `#ffffff`, color: "black" }}
          >
            <div className="upperImg bg-[#e6fdff]  lg:w-[550px] md:w-[350px] flex flex-col justify-center items-center h-[300px] overflow-hidden">
              <img
                src={require("../assets/Research & Tech/p2.jpg")}
                className="scale-150"
              ></img>
            </div>
            <div className="lowerContent md:ml-10  w-[78%]">
              <h3 className="text-[1.5rem] font-semibold my-5 ">
                Radio Frequency Device Characterization & Modeling
              </h3>
              <p className="pb-5">
                Power Amplifiers, Efficiency enhancement Doherty Power
                Amplifiers, Chireix outphasing amplifiers, Waveform Engineering
                (Class E/F, B/J, etc.) based Octave & Multi-octave power
                amplifiers etc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
