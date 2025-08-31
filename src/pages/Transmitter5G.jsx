import React, { useState, useEffect } from "react";

// Hero image
import fiveG from "../assets/Home/5G_transmitter.png";

// All image assets (from assets/ResearchArea)
import Optimized_SSTL from "../assets/ResearchArea/Optimized SS-TL.png";
import Tunable_SSTL from "../assets/ResearchArea/Tunable SS-TL.png";
import Hardware_Setup from "../assets/ResearchArea/Hardware setup.png";
import DPD_Process from "../assets/ResearchArea/DPD Implementation and Linearization Process.png";
import Memory_Polynomial from "../assets/ResearchArea/Memory Polynomial Coefficients.png";
import SDR_Architecture from "../assets/ResearchArea/SDR Transceivers Architecture for.png";
import SDR_Transceivers from "../assets/ResearchArea/SDR based Transceivers.png";
import Level_Transformation from "../assets/ResearchArea/Level.png";
import Unequal_Level_Transformation from "../assets/ResearchArea/Unequal Level transformation (6 Level – 3 Level).png";
import Level_6_3 from "../assets/ResearchArea/6-3 Level  transformation with measurement.png";
import Measurement from "../assets/ResearchArea/Digital TransmittersMeasurement.png";
import DSM_Modulation from "../assets/ResearchArea/Delta Sigma Based Modulation.png";
import Digitizing_PA from "../assets/ResearchArea/Digitizing the Power Amplifiers.png";


const Transmitter5G = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredImage, setHoveredImage] = useState(null);

  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const ImagePair = ({ images, labels, section }) => (
    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="group relative bg-white/70 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:scale-[1.02] hover:-translate-y-2"
          onMouseEnter={() => setHoveredImage(`${section}-${idx}`)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50/50">
            <img
              src={img}
              alt={labels[idx]}
              className={`w-full h-56 object-contain p-6 transition-all duration-500 ${
                hoveredImage === `${section}-${idx}` ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-5 text-center">
            <h3 className="text-slate-700 font-semibold text-lg group-hover:text-indigo-600 transition-colors duration-300">
              {labels[idx]}
            </h3>
            <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );

  const ImageTriple = ({ images, labels, section }) => (
    <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
      {images.map((img, idx) => (
        <div
          key={idx}
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:scale-105 hover:-translate-y-1"
          onMouseEnter={() => setHoveredImage(`${section}-${idx}`)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-indigo-50/30">
            <img
              src={img}
              alt={labels[idx]}
              className={`w-full h-48 object-contain p-4 transition-all duration-500 ${
                hoveredImage === `${section}-${idx}` ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-slate-700 font-medium group-hover:text-indigo-600 transition-colors duration-300">
              {labels[idx]}
            </h3>
            <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-indigo-400 to-blue-500 transition-all duration-500 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );

  const SingleImage = ({ src, alt, className = "" }) => (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-3xl blur-xl transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={src}
        alt={alt}
        className="relative rounded-3xl shadow-xl w-full max-h-72 object-contain bg-white/90 backdrop-blur-sm p-6 border border-slate-200/50 transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-100/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-purple-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="relative pt-20 px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section */}
        <div 
          id="hero" 
          data-animate
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            5G Transmitters:<br />Embedded Solutions
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Exploring all-digital, reconfigurable RF transmitters using Delta-Sigma Modulation (DSM),
            level-transformation techniques, and real-time adaptive linearization on FPGA-based SDR platforms.
          </p>

          {/* Hero Image */}
          <SingleImage 
            src={fiveG}
            alt="5G Embedded Solutions"
            className="max-w-5xl mx-auto"
          />
        </div>

        {/* Digital Transmitters Overview */}
        <section 
          id="digital-overview" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible['digital-overview'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Digitizing the Power Amplifier
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-8" />
            <p className="text-slate-700 max-w-5xl mx-auto text-lg leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
              In traditional systems, power amplifiers (PAs) require complex linearization and operate inefficiently under wide signal bandwidths. This research proposes all-digital transmitter solutions, where information is encoded in pulse density. The PA behaves like a digital switch — highly efficient and no external DPD required in ideal cases.
            </p>
          </div>

          <SingleImage 
            src={Digitizing_PA}
            alt="Digitizing the Power Amplifier"
            className="max-w-5xl mx-auto"
          />
        </section>

        {/* Delta Sigma Modulation */}
        <section 
          id="dsm" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible.dsm ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Delta Sigma Based Modulation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-8" />
            <p className="text-slate-700 max-w-5xl mx-auto text-lg leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
              DSM offers high efficiency by pushing quantization noise out-of-band, which can then be filtered.
              The signal envelope is reconstructed at the PA output via oversampled pulse density encoding.
            </p>
          </div>

          <SingleImage 
            src={DSM_Modulation}
            alt="Delta Sigma Based Modulation"
            className="max-w-5xl mx-auto"
          />
        </section>

        {/* Level Transformation */}
        <section 
          id="level-transform" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible['level-transform'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Multi-Level Transformation for Coding & Drain Efficiency
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Techniques like unequal level transformation (6-level to 3-level) and time-interleaved architectures enhance coding efficiency, reduce quantization noise, and retain high PA drain efficiency.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <ImageTriple 
            images={[Level_Transformation, Unequal_Level_Transformation, Level_6_3]}
            labels={["Level Transformation", "Unequal Level Transformation", "6-3 Level Measurement"]}
            section="level-transform"
          />
        </section>

        {/* Measurement Results */}
        <section 
          id="measurement" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible.measurement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Measured Performance & Hardware Validation
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Practical implementation of DSM transmitters shows promising results with LTE signals.
              The EVM remains below 2.7%, and quantization noise is reduced significantly with proper level mapping.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-emerald-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Measurement, Hardware_Setup]}
            labels={["Measurement Results", "Hardware Test Setup"]}
            section="measurement"
          />
        </section>

        {/* SDR Transceivers */}
        <section 
          id="sdr" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible.sdr ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              SDR-Based Transceivers with Real-Time Linearization
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Adaptive DPD and coefficient extraction are implemented in real-time using FPGA-based SDR platforms. This enables faster convergence, live monitoring, and automatic feedback-based tuning.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[SDR_Architecture, SDR_Transceivers]}
            labels={["SDR Transceiver Architecture", "SDR Hardware Implementation"]}
            section="sdr"
          />
        </section>

        {/* DPD Process */}
        <section 
          id="dpd" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-700 ${
            isVisible.dpd ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Linearization Process & Signal Modeling
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Memory polynomial modeling is used for adaptive distortion compensation. FPGA implements the predistortion logic, while system coefficients are dynamically adjusted based on real-time feedback.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Memory_Polynomial, DPD_Process]}
            labels={["Memory Polynomial Coefficients", "DPD Implementation Process"]}
            section="dpd"
          />
        </section>

        {/* SSTL Optimization */}
        <section 
          id="sstl" 
          data-animate
          className={`transition-all duration-1000 delay-800 ${
            isVisible.sstl ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Tunable & Optimized SS-TL Architectures
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              SS-TL (Switched-Section Transmission Lines) are used for load adaptation and modulation
              control. Both tunable and optimized variants are fabricated and tested for maximum efficiency.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Optimized_SSTL, Tunable_SSTL]}
            labels={["Optimized SS-TL Design", "Tunable SS-TL Architecture"]}
            section="sstl"
          />
        </section>
      </div>
    </div>
  );
};

export default Transmitter5G;