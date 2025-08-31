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
  Settings // Using Settings icon instead of CogsIcon
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
import DRDO from "../assets/Home/Drdo_logo.png";
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
      gradient: "from-blue-50 to-indigo-50",
      link: "/rf-power-amplifiers",
      icon: <SatelliteDish className="w-6 h-6" />,
    },
    {
      id: 2,
      title: "Radio Frequency Integrated Circuits (Semiconductor IC Design)",
      description:
        "Design and development of RF integrated circuits using GaN, SiGe BiCMOS, and CMOS technologies for high-frequency applications.",
      image: rfIntegratedCircuitsImg,
      gradient: "from-purple-50 to-violet-50",
      link: "/rf-integrated-circuits",
      icon: <CircuitBoard className="w-6 h-6" />,
    },
    {
      id: 3,
      title: "Turn-Key Solutions for Wireless Systems",
      description:
        "End-to-end solutions including RIS, SDR, active antennas, RF location finding, LoRa, drone detection, and AI integration for wireless systems.",
      image: turnKeySolutionsImg,
      gradient: "from-emerald-50 to-teal-50",
      link: "/turnkey-solutions",
      icon: <Settings className="w-6 h-6" />, // Using Settings icon instead
    },
  ];

  const sponsors = [
    { name: "DST", logo: DST },
    { name: "Wipro", logo: Wipro },
    { name: "Global Foundries", logo: GF },
    { name: "DRDO", logo: DRDO },
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
    <div  id="main-content"
    className="min-h-screen text-slate-800">
      <Hero />

      {/* Research Areas */}
      <section id="main-content" className="px-6 lg:px-20 py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
            Research Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Exploring cutting-edge technologies in wireless communication and RF systems
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {researchAreas.map((area, index) => (
            <Link to={area.link} key={area.id}>
              <div
                data-card-id={area.id}
                className={`group relative bg-gradient-to-br ${area.gradient} rounded-2xl p-6 shadow-sm border border-white/50 transition-all duration-500 hover:shadow-xl hover:scale-[1.02] ${
                  visibleCards.has(area.id.toString())
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon + Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-slate-700 group-hover:bg-white/30 transition-colors duration-300">
                    {area.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-200">
                    {area.title}
                  </h3>
                </div>

                {/* Image */}
                <div className="mb-4">
                  <img
                    src={area.image}
                    alt={area.title}
                    className="w-full h-48 object-cover rounded-xl bg-white/50 p-4 group-hover:bg-white/70 transition-colors duration-300"
                  />
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-2">{area.description}</p>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vision Statement */}
      <section className="px-6 lg:px-20 py-16 bg-gradient-to-r from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">Vision & Mission</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our work is strongly aligned with <span className="font-semibold text-blue-600">sustainability</span>,
              <span className="font-semibold text-emerald-600"> strategic innovation</span>, and
              <span className="font-semibold text-purple-600"> cutting-edge engineering</span>.
              We are committed to advancing wireless communication technology while maintaining environmental responsibility and pushing the boundaries of intelligent systems integration.
            </p>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="px-6 lg:px-20 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Collaborator and Sponsors</h2>
          <p className="text-lg text-slate-600">Collaborating with industry leaders and research organizations</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.name}
              className="group relative"
              onMouseEnter={() => setHoveredSponsor(index)}
              onMouseLeave={() => setHoveredSponsor(null)}
            >
              <div
                className={`bg-white rounded-xl p-4 shadow-sm border border-slate-200 transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  hoveredSponsor === index ? "ring-2 ring-blue-500/20" : ""
                }`}
              >
                <div className="h-16 flex items-center justify-center">
                  <img src={sponsor.logo} alt={sponsor.name} className="max-h-12 max-w-full object-contain transition-all duration-300 hover:scale-110" />
                </div>
              </div>
              <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1 rounded-full transition-all duration-200 ${
                hoveredSponsor === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}>
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;