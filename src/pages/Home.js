import React from "react";
import Header from "../components/Header";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Card } from "../components";

const researchData = [
  {
    title: "Radio Frequency Active circuits",
    content:
      "Power Amplifiers, Efficiency enhancement Doherty Power Amplifiers, Chireix outphasing amplifiers, Waveform Engineering (Class E/F, B/J, etc.) based Octave & Multi-octave power amplifiers etc.",
    color: "0C8593",
  },
  {
    title: "On-chip RF Circuits",
    content:
      "Power Amplifier Design in Gallium Nitride MMIC Design, BiCMOS RF circuits with millimeter wave applications, RF mixed signal CMOS design etc.",
    color: "C3A929",
  },
  {
    title: "Embedding System Design for Radio development",
    content:
      "Delta Sigma Modulation with Noise Shaping Filter, radio functionality in wireless transmitters such as predistortion, beam forming etc.",
    color: "D8693A",
  },
  {
    title: "Radio Frequency Device Characterization & Modeling",
    content:
      "Bias dependent s-parameters measurement, Nonlinear De-embedding / embedding, nonlinear vector network analysis, Large Signal Modeling (Angelov Model for GaN HEMT Design)",
    color: "0C8593",
  },
];

const Home = () => {
  return (
    <div>
      <Header />
      {/* ************************Hero Section ************************ */}
      <div className="heroSection">
        <div className="bg overflow-hidden -z-10 absolute w-[100%] h-[80vh]">
          <img src={require("../assets/bg1.png")} className="w-[100%]"></img>
        </div>
        <div className="hero_content mx-[12%] flex gap-16 justify-center items-center text-white  h-[80vh] ">
          <div className="left">
            <div className="img rounded-full overflow-hidden w-72 h-72 flex justify-center items-center">
              <img
                src={require("../assets/karun-sir.png")}
                className="scale-110"
              ></img>
            </div>
            <div className="socials flex justify-center items-center gap-4 text-[1.5rem] my-5">
              <BsLinkedin />
              <BsTwitter />
            </div>
          </div>
          <div className="right w-full">
            <h2 className="text-[2rem] font-semibold">Dr. Karun Rawat</h2>
            <div className="h-[1px] w-full bg-[#FFEC44] mt-2 mb-5"></div>
            <div className="flex gap-20">
              <div className="left w-96 flex flex-col">
                <p>
                  Associate Professor (Outstanding Young Faculty) Department of
                  Electronics & Communication, Indian Institute of Technology
                  (I.I.T) Roorkee, India.
                </p>
                <p className="my-5">
                  <b> B.E, PhD, SMIEEE Member</b>
                  <br /> “Technical Committee MTT-12: Microwave High Power
                  Techniques” Member “MTT Special Interest Group in Microwave
                  and Wireless Education Member: “Editorial Board Wiley Journal
                  in RFCAE, Nonlinear VNA Forum
                </p>
              </div>
              <div className="left flex flex-col">
                <div>karun.rawat@ece.iitr.ac.in</div>
                <div>karun.rawat.in@ieee.org</div>
                <div>+911332284830</div>
              </div>
            </div>
            <div className="h-[0.5px] w-full bg-[#FFEC44] mt-2 mb-5"></div>
            <div>
              <p>
                Room 201 N, Dept. of ECE Indian Institute of Technology Roorkee,
                Roorkee, Uttarakhand-247667.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ************************Research Section ************************ */}
      <div className="research my-16 ">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-5">
          Areas of Research
        </h2>
        <div className="cardContainer flex gap-10 justify-center">
          {researchData.map((data) => {
            return <Card data={data} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
