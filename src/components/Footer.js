import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="flex flex-col bg-[#02458A] text-white w-[100%] justify-between py-10">
      <div className="mx-[10%] flex  justify-between flex-wrap">
        <div className="mt-5">
          <h3 className="font-semibold mb-5 text-[1.1rem]">Quick Links</h3>
          <div className="flex  gap-10 flex-wrap">
            <div className="flex flex-col gap-3 min-w-[300px]">
              <Link to="/about-me" className="flex gap-1 items-center">
                <BiChevronRight className="text-[1.2rem]" />
                About Me
              </Link>
              <Link
                to="/research-technology"
                className="flex gap-1 items-center"
              >
                <BiChevronRight className="text-[1.2rem]" />
                Research & Tech
              </Link>
              <Link to="/publications" className="flex gap-1 items-center">
                <BiChevronRight className="text-[1.2rem]" />
                Publications
              </Link>
            </div>
            <div className="flex flex-col gap-3 min-w-[300px]">
              <Link
                to="/training-workshops"
                className="flex gap-1 items-center"
              >
                <BiChevronRight className="text-[1.2rem]" />
                Training & Workshops
              </Link>
              <Link to="/team-members" className="flex gap-1 items-center">
                <BiChevronRight className="text-[1.2rem]" />
                Team & Members
              </Link>
              <Link to="/news-highlights" className="flex gap-1 items-center">
                <BiChevronRight className="text-[1.2rem]" />
                News & Highlights
              </Link>
            </div>
          </div>
        </div>
        <div className="min-w-[300px] mt-5 ">
          <h3 className="font-semibold mb-5 ">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <a>+911332284830</a>
            <a>karun.rawat@ece.iitr.ac.in</a>
            <a>karun.rawat.in@ieee.org</a>
          </div>
        </div>
      </div>
      <div className=" h-[1.5px] bg-white mx-[10%] mt-10"></div>
    </div>
  );
};

export default Footer;
