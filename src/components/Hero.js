import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="heroSection text-white profile-details  overflow-hidden lg:pb-28   ">
      <div className="bg overflow-hidden -z-10 absolute w-[100%] ">
        <img
          src={require("../assets/bg1.png")}
          className="w-[100%] lg:h-[600px]"
        ></img>
      </div>
      <div class="container mx-auto   ">
        <div class="grid grid-cols-1 gap-3 lg:grid-cols-3 ">
          <div class="grid grid-cols-1 gap-2 mt-14">
            <div className="flex justify-center items-center">
              <img
                src={require("../assets/karun-sir.png")}
                className="img rounded-full w-72 h-72 mt-4 shadow-inner "
              ></img>
            </div>
            <div className="socials flex justify-center items-center gap-4 text-[1.5rem] my-5">
              <a href="#" target="_blank" className="hover:scale-105">
                <BsLinkedin className="text-[#1d466e] lg:text-white" />
              </a>
              <a href="#" target="_blank" className="hover:scale-105">
                <BsTwitter className="text-[#1d466e] lg:text-white" />
              </a>
            </div>
          </div>
          <div className="justify-center p-6   col-span-2 lg:mt-14 mt-7  lg:text-white   ">
            <h2 className="text-[2rem] font-semibold text-[#1d466e] lg:text-white">
              Dr. Karun Rawat
            </h2>
            <div className="h-[1px] w-full bg-[#FFEC44] mt-2 mb-5"></div>

            <div className="grid grid-cols-1 gap-2 md:grid-cols-3 text-[#5B5B5B] lg:text-white">
              <div className="col-span-2 pr-6">
                <p>
                  Associate Professor (Outstanding Young Faculty) Department of
                  Electronics & Communication, Indian Institute of Technology
                  (I.I.T) Roorkee, India.
                </p>
                <p className="my-5">
                  <b>
                    <span className="text-[#1d466e] lg:text-white">
                      B.E, PhD, SMIEEE Member
                    </span>
                  </b>
                  <br /> “Technical Committee MTT-12: Microwave High Power
                  Techniques” Member “MTT Special Interest Group in Microwave
                  and Wireless Education Member: “Editorial Board Wiley Journal
                  in RFCAE, Nonlinear VNA Forum
                </p>
              </div>
              <div className="justify-center">
                <div>karun.rawat@ece.iitr.ac.in</div>
                <div>karun.rawat.in@ieee.org</div>
                <div>+911332284830</div>
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#FFEC44] mt-2 mb-5 "></div>
            <div class="justify-center">
              <div>
                <p className="text-[#5B5B5B] lg:text-white">
                  Room 201 N, Dept. of ECE Indian Institute of Technology
                  Roorkee, Roorkee, Uttarakhand-247667.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
