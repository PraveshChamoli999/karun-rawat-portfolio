import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  Cpu,
  SatelliteDish,
  Signal,
  Shield,
  SmartphoneNfc,
  Waves,
  CircuitBoard,
  Settings,
  ArrowRight,
  Sparkles,
  Zap,
  Target
} from "lucide-react";
import Hero from "../components/Hero";

// Research Area Images
import rfPowerAmplifierImg from "../assets/Home/RF_wireless.png";
import rfIntegratedCircuitsImg from "../assets/Home/RFIC (2).jpeg";
import turnKeySolutionsImg from "../assets/Home/turn_key_solution.jpeg";

// Sponsor Logos
import DST from "../assets/Home/DST_logo.png";
import Wipro from "../assets/Home/Wipro_logo.png";
import GF from "../assets/Home/Global_Foundries_logo.png";

import AMP from "../assets/Home/Amp_logo.png";
import Keysight from "../assets/Home/KeySight_logo.png";

const Home = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const [activeImageModal, setActiveImageModal] = useState(null);

  const researchAreas = [
    {
      id: 1,
      title: "Radio Frequency Power Amplifier & Wireless Transmitters",
      description:
        "Research on advanced power amplifier architectures, waveform engineering, and transmitter solutions for next-generation wireless communication systems.",
      image: rfPowerAmplifierImg,
      gradient: "from-blue-600 via-cyan-500 to-teal-400",
      bgGradient: "from-blue-50 via-cyan-50 to-teal-50",
      link: "/rf-power-amplifiers",
      icon: <SatelliteDish className="w-6 h-6" />,
      tags: ["5G/6G", "Power Amplifiers", "Wireless"],
    },
    {
      id: 2,
      title: "Radio Frequency Integrated Circuits (Semiconductor IC Design)",
      description:
        "Design and development of RF integrated circuits using GaN, SiGe BiCMOS, and CMOS technologies for high-frequency applications.",
      image: rfIntegratedCircuitsImg,
      gradient: "from-purple-600 via-pink-500 to-rose-400",
      bgGradient: "from-purple-50 via-pink-50 to-rose-50",
      link: "/rf-integrated-circuits",
      icon: <CircuitBoard className="w-6 h-6" />,
      tags: ["GaN", "SiGe BiCMOS", "CMOS"],
    },
    {
      id: 3,
      title: "Turn-Key Solutions for Wireless Systems",
      description:
        "End-to-end solutions including RIS, SDR, active antennas, RF location finding, LoRa, drone detection, and AI integration for wireless systems.",
      image: turnKeySolutionsImg,
      gradient: "from-emerald-600 via-green-500 to-lime-400",
      bgGradient: "from-emerald-50 via-green-50 to-lime-50",
      link: "/turnkey-solutions",
      icon: <Settings className="w-6 h-6" />,
      tags: ["AI/ML", "IoT", "SDR"],
    },
  ];

  const sponsors = [
    { name: "DST", logo: DST },
    { name: "Wipro", logo: Wipro },
    { name: "Global Foundries", logo: GF },

    { name: "AMP", logo: AMP },
    { name: "Keysight", logo: Keysight },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisibleCards((prev) => new Set([...prev, entry.target.dataset.cardId]));
        }
      });
    }, { threshold: 0.1 });

    const cards = document.querySelectorAll("[data-card-id]");
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="main-content" className="min-h-screen text-slate-800">
      <Hero />

      {/* Enhanced Research Areas
      <section className="relative px-6 lg:px-20 py-24 overflow-hidden">
  
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/80 via-white to-blue-50/80"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/3 rounded-full blur-3xl"></div>
        
        <div className="relative z-10">
       
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6 shadow-sm">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold">Our Research Focus</span>
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-purple-800 bg-clip-text text-transparent">
                Research Areas
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Exploring cutting-edge technologies in wireless communication and RF systems through 
              <span className="font-semibold text-blue-600"> innovative research</span> and 
              <span className="font-semibold text-purple-600"> breakthrough solutions</span>
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {researchAreas.map((area, index) => (
              <Link to={area.link} key={area.id}>
                <div
                  data-card-id={area.id}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all duration-700 hover:shadow-2xl hover:scale-[1.03] ${
                    visibleCards.has(area.id.toString())
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  
     
                  <div className={`absolute inset-0 bg-gradient-to-br ${area.bgGradient} opacity-40`}></div>
                  
     
                  <div className="relative z-10 p-8">
                    
             
                    <div className="flex items-start justify-between mb-6">
                      <div className={`p-4 bg-gradient-to-r ${area.gradient} rounded-2xl text-white shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                        {area.icon}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {area.tags.map((tag, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1 rounded-full bg-gradient-to-r ${area.gradient} text-white font-medium shadow-sm opacity-90`}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

               
                    <h3 className="text-xl font-bold text-slate-800 mb-4 leading-tight group-hover:text-slate-900 transition-colors">
                      {area.title}
                    </h3>

                
                    <div className="relative mb-6 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src={area.image}
                        alt={area.title}
                        className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110"
                      />
                      
               
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      
               
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg transform scale-75 group-hover:scale-100 transition-all duration-300">
                          <ArrowRight className="w-6 h-6 text-slate-800" />
                        </div>
                      </div>
                    </div>

           
                    <p className="text-slate-600 leading-relaxed mb-6 line-clamp-3">
                      {area.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/60">
                      <div className="flex items-center gap-2 text-slate-500 text-sm">
                      </div>
                      
                      <div className="flex items-center gap-2 text-slate-700 font-semibold group-hover:text-slate-900 transition-colors">
                        <span>Learn More</span>
                        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>

            
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/30 to-transparent rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-110 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/20 to-transparent rounded-full transform -translate-x-12 translate-y-12 group-hover:scale-110 transition-transform duration-500"></div>
                  
      
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-10 shadow-lg border border-blue-200/30">
            <h3 className="text-3xl font-bold text-slate-800 mb-6">Vision & Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our work is strongly aligned with 
              <span className="font-semibold text-blue-600 bg-blue-100/50 px-2 py-1 rounded-md"> sustainability</span>,
              <span className="font-semibold text-emerald-600 bg-emerald-100/50 px-2 py-1 rounded-md"> strategic innovation</span>, and
              <span className="font-semibold text-purple-600 bg-purple-100/50 px-2 py-1 rounded-md"> cutting-edge engineering</span>.
              We are committed to advancing wireless communication technology while maintaining environmental responsibility and pushing the boundaries of intelligent systems integration.
            </p>
          </div>
        </div>
      </section>

    
      <section className="px-6 lg:px-20 py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
            Collaborators & Sponsors
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Partnering with industry leaders and research organizations to drive innovation forward
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="group relative"
              onMouseEnter={() => setHoveredSponsor(index)}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              <div className={`relative bg-white rounded-2xl p-6 shadow-lg border border-slate-200/50 transition-all duration-500 hover:shadow-xl hover:scale-110 overflow-hidden ${
                hoveredSponsor === index ? "shadow-xl scale-110" : ""
              }`}>
                
       
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 to-purple-50/80 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                
                <div className="relative z-10 h-20 flex items-center justify-center">
                  <img 
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    className="max-h-12 max-w-full object-contain transition-all duration-300 group-hover:scale-110 filter group-hover:brightness-110" 
                  />
                </div>
                
         
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                
 
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-blue-500/20 to-transparent"></div>
              </div>
              
       
              <div className={`absolute -bottom-14 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
                hoveredSponsor === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}>
                <div className="bg-slate-800 text-white text-sm px-4 py-2 rounded-xl shadow-xl border border-slate-700">
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                  <span className="font-medium">{sponsor.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section> */}
    </div>
  );
};

export default Home;