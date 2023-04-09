import React from "react";
import { Card, Header, Hero } from "../components";

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
      <Hero />

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
