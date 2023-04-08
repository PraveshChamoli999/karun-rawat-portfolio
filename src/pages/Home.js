import React from "react";
import Header from "../components/Header";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Home = () => {
  return (
    <div>
      <Header />
      {/* ************************Hero Section ************************ */}
      <div className="heroSection my-10">
        <div className="hero_content mx-[12%] flex gap-16">
          <div className="left">
            <div className="img rounded-full overflow-hidden w-72 h-72 flex justify-center items-center">
              <img
                src={require("../assets/karun-sir.png")}
                className="scale-110"
              ></img>
            </div>
            <div className="socials flex justify-center items-center gap-2 text-[1.5rem] my-5">
              <BsLinkedin />
              <BsTwitter />
            </div>
          </div>
          <div className="right w-full">
            <h2 className="text-[2rem]">Dr. Karun Rawat</h2>
            <div className="h-[1px] w-full bg-black mt-2 mb-5"></div>
            <div className="flex gap-20">
              <div className="left w-96 flex flex-col">
                <p>
                  Associate Professor (Outstanding Young Faculty) Department of
                  Electronics & Communication, Indian Institute of Technology
                  (I.I.T) Roorkee, India.
                </p>
                <p className="my-5">
                  B.E, PhD, SMIEEE Member
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
            <div className="h-[0.5px] w-full bg-black mt-2 mb-5"></div>
            <div>
              <p>
                Room 201 N, Dept. of ECE Indian Institute of Technology Roorkee,
                Roorkee, Uttarakhand-247667.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
