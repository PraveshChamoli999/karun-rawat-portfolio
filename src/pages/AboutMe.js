import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const AboutMe = () => {
  return (
    <div>
      {/* ************************Research Section ************************ */}
      <div className="research bg-[#F7F7F7] py-10">
        <h2 className="text-center text-[2rem] text-[#1d466e] font-semibold mb-10">
          About Me
        </h2>
        <div className="cardContainer flex flex-col shadow-md rounded-lg gap-5 bg-white mx-[10%] px-12 py-14 ">
          <div className=" font-normal text-[16px] leading-[170%] text-[#5B5B5B]">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Biography
            </h3>
            <p className="mt-4 ">
              Karun Rawat has received his PhD. degree in electrical engineering
              from University of Calgary, Canada in 2012. He is currently
              working as Associate Professor in department of Electronics and
              Communication at Indian Institute of Technology (I.I.T) Roorkee,
              India. Prior to this, he was Assistant Professor in Centre for
              Applied Research in Electronics, I.I.T Delhi from 2013-2014 and
              scientist in the Space Applications Center, Indian Space Research
              Organization Ahmedabad, from 2003–2007.
            </p>
            <p className="mt-4">
              Karun Rawat is Senior member of IEEE since 2012 and his research
              has resulted in more than 60 publications in journals and
              conferences, two patents (applied), two state of art books and a
              book chapter. He is founding director of Linear amp-tech
              technology private limited which is involved in indigenous
              development of power amplifier design and its linearization
              technology.
            </p>
            <p className="mt-4">
              His current research interests are in the areas of RF power
              amplifier and transceiver design, digital transmitters, nonlinear
              device modeling, RF linear and nonlinear measurements and
              characterization, RF active and passive circuits design, RF CMOS
              and GaN MMIC designs. He has given several technical talks in
              India as well as abroad including workshops in power amplifiers at
              EuMC 2018 (Spain), IEEE IMS 2018 (USA), IEEE ARFTG 2016 (USA),
              IEEE APMC 2015 (China), IEEE IMaRC 2014-2015 (India), IEEE IMS
              (USA), IEEE EuMW (Spain) etc. He has presented papers in reputed
              conferences such as IEEE International Wireless Symposium 2019 in
              China, European Microwave Conference in Germany, International
              Symposium on Circuit and System, USA. Dr. Rawat has been reviewer
              of several IEEE transactions including Transactions on Microwave
              Theory and Techniques, Transactions on circuit and systems,
              Transactions on Electronic Devices, Transactions on Industrial
              Electronics etc.
            </p>
            <p className="mt-4">
              Dr. Rawat has received research production award for three
              consecutive years from 2009-2011 during his PhD. He also received
              best design prize in 3rd Annual Smart Radio Challenge in 2010. He
              is also member of the editorial board of Wiley journal in RF and
              Microwave Computer Aided Engineering (RFMiCAE). He is active
              member of Special Interest Group in Microwave and Wireless
              Education (SiGMaWe) of IEEE Microwave Theory and Technique (MTT)
              and Nonlinear Vector Network Analyzer Forum supported by ARFTG.
            </p>
            <p className="mt-4">
              He has also been associated with advisory committee of several RF
              industries, national laboratories and universities for
              brainstorming and research initiatives. He has also been part of
              technical program committee of several IEEE conferences such as
              IEEE IMaRC, IEEE APMC and IEEE INDICON. He has served as technical
              program chair of IEEE INDICON 2017.
            </p>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5C5C5C] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Awards
            </h3>
            <p className="mt-4">
              Karun Rawat has received his PhD. degree in electrical engineering
              from University of Calgary, Canada in 2012. He is currently
              working as Associate Professor in department of Electronics and
              Communication at Indian Institute of Technology (I.I.T) Roorkee,
              India. Prior to this, he was Assistant Professor in Centre for
              Applied Research in Electronics, I.I.T Delhi from 2013-2014 and
              scientist in the Space Applications Center, Indian Space Research
              Organization Ahmedabad, from 2003–2007.
            </p>
            <ul className="mt-4 list-disc pl-5 flex flex-col gap-3">
              <li>
                Received “Outstanding Young Faculty” award in IIT Roorkee for
                the year 2020.
              </li>
              <li>
                NASI Scopus Young Scientists Awards 2019 (Finalist) under
                category: “Innovation in Engineering and Physical Sciences”.
              </li>
              <li>
                First Team Prize and Best Design Price in 3rd Annual Smart Radio
                Challenge: Team leader of the University of Calgary team, won
                first prize and best design prize in 3rd Annual Smart Radio
                Challenge 2010, conducted by Wireless Innovation Forum. This was
                a worldwide championship in which student engineering teams
                design, develop and test software defined and cognitive radio
                technologies that address specific problems relevant to the
                advanced wireless community. The main technical role in the
                project was proposing system architecture, its hardware
                development and measurement.
              </li>
              <li>
                Research Production Award: This was awarded for three
                consecutive years (2009, 2010, 2011) by the department of
                Electrical Engineering, University of Calgary for high number of
                publications in reputed journals and conferences.
              </li>
              <li>
                Best Industrial Trainee Award: This was awarded by Defence
                Research Development Organization (DRDO), India, for being a
                best trainee during the industrial internship in Defence
                laboratory in India as a part of curriculum of Bachelors of
                Engineering.
              </li>
            </ul>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5C5C5C] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Memberships
            </h3>
            <ul className="mt-4 list-decimal pl-5 flex flex-col gap-3">
              <li>
                Member Technical Committee MTT-12: Microwave High Power
                Techniques
              </li>
              <li>Senior Member IEEE</li>
              <li>
                Member MTT Special Interest Group in Microwave and Wireless
                Education.
              </li>
              <li>Member, IEEE MTT, IEEE COMSOC, IEEE EDS.</li>
              <li>Member NVNA Forum, USA.</li>
              <li>Chapter Chair, IEEE Communication Society Chapter</li>
            </ul>
          </div>
          <div className="font-normal text-[16px] leading-[170%] text-[#5C5C5C] mt-7">
            <h3 className="text-[1.8rem] font-normal text-[#1d466e] flex gap-1 mb-5 items-center">
              <span className="w-1 h-[27px] bg-slate-600 inline-block"></span>
              Affiliations
            </h3>
            <a
              href="https://linear-amptech.com/"
              target="_blank"
              className="mt-4 text-blue-900 flex items-center gap-1 underline"
            >
              IITR, Linear Amptech <HiOutlineExternalLink />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
