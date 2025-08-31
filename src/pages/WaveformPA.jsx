import React, { useState, useEffect } from "react";


// Class Images
import classE from "../assets/Technology/Class_E.png";
import classF from "../assets/Technology/Class_F.jpg";
import classD from "../assets/Technology/Class_D.png";

// Continuum Images
import Class_E_Continuum from "../assets/Technology/Class_E_Continuum.png";
import Class_F_Continuum from "../assets/Technology/Class_F_Continuum.png";
import Class_BJ_Continuum from "../assets/Technology/Class_BJ_Continuum.png";

// Extended Continuum Images
import Extended_Class_BJ from "../assets/Technology/Extended_Class_BJ.png";
import Extended_Class_F_Conti from "../assets/Technology/Extended_Class_F_Conti.png";
import Extended_Class_E_Conti from "../assets/Technology/Extended_Class_E_Conti.png";

const WaveformPA = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [isVisible, setIsVisible] = useState({});

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
      { threshold: 0.2 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const CardComponent = ({ item, idx, section }) => (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl 
        transition-all duration-500 overflow-hidden border border-slate-200/50
        hover:scale-105 hover:-translate-y-2 cursor-pointer
        ${activeCard === `${section}-${idx}` ? 'ring-2 ring-blue-500 scale-105' : ''}`}
      onClick={() => setActiveCard(activeCard === `${section}-${idx}` ? null : `${section}-${idx}`)}
    >
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50/30">
        <img
          src={item.img}
          alt={item.label}
          className="w-full h-40 object-contain p-4 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-5">
        <h3 className="text-center text-slate-700 font-semibold text-lg group-hover:text-blue-600 transition-colors duration-300">
          {item.label} {section !== 'classic' && section !== 'continuum' && section !== 'extended' ? 'Design' : ''}
        </h3>
        <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500" />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative pt-20 px-4 sm:px-6 lg:px-8 pb-16">
        {/* Hero Section */}
        <div 
          id="hero" 
          data-animate
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            Waveform Engineering in<br />Class Power Amplifiers
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto mb-10 leading-relaxed">
            Exploring advanced power amplifier topologies and waveform shaping techniques to achieve
            high efficiency and multi-octave bandwidth operation for next-generation RF systems.
          </p>

          {/* Hero Image */}

        </div>


        {/* Classic Class Topologies */}
        <section 
          id="classic" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible.classic ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-800">
              Classic Class Topologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{ img: classE, label: "Class E" },
              { img: classF, label: "Class F" },
              { img: classD, label: "Class D" }].map((item, idx) => (
              <CardComponent key={idx} item={item} idx={idx} section="classic" />
            ))}
          </div>
        </section>

        {/* Continuum Classes */}
        <section 
          id="continuum" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible.continuum ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Continuum Class Techniques
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
              To overcome the limits of individual class operation, we explore hybrid modes such as Class B/J,
              E Continuum, and F Continuum to extend bandwidth while maintaining high efficiency.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{ img: Class_E_Continuum, label: "Class E Continuum" },
              { img: Class_F_Continuum, label: "Class F Continuum" },
              { img: Class_BJ_Continuum, label: "Class B/J Continuum" }].map((item, idx) => (
              <CardComponent key={idx} item={item} idx={idx} section="continuum" />
            ))}
          </div>
        </section>

        {/* Extended Class Prototypes */}
        <section 
          id="extended" 
          data-animate
          className={`transition-all duration-1000 delay-800 ${
            isVisible.extended ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Extended Class Prototypes
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed">
              These designs demonstrate real hardware implementations of extended continuum techniques, enabling
              multi-octave power amplification across broader frequency bands.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[{ img: Extended_Class_BJ, label: "Extended Class B/J" },
              { img: Extended_Class_F_Conti, label: "Extended Class F" },
              { img: Extended_Class_E_Conti, label: "Extended Class E" }].map((item, idx) => (
              <CardComponent key={idx} item={item} idx={idx} section="extended" />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default WaveformPA;