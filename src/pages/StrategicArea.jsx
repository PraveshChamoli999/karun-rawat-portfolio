import React, { useState, useEffect } from "react";

// Hero image from Home
import strategicArea from "../assets/Home/Stragic_area.png";

// Research Area Images (from assets/ResearchArea)
import Gan_MMIC_in_Enclosure from "../assets/ResearchArea/Gan_MMIC_in_Enclosure.png";
import GaN_MMIC_on_Testing from "../assets/ResearchArea/GaN_MMIC_on(testing).png";
import C_Ku_Ultra_Wideband_PA from "../assets/ResearchArea/C-Ku Band Ultra Wideband MMIC PA.png";
import Ku_Band_MMIC_PA from "../assets/ResearchArea/Ku Band MMIC PA.png";
import Ku_Band_Radar from "../assets/ResearchArea/Ku-Band Radar Application.png";
import C_Band_UAV from "../assets/ResearchArea/C-Band UAV Data Link.png";
import Class_E_Chip from "../assets/ResearchArea/Class E Power Amplifier Chip.png";
import Class_AB_Chip from "../assets/ResearchArea/Class AB Power Amplifier Chip.png";
import BiCMOS_8XP from "../assets/ResearchArea/130nm GF SiGe BiCMOS (8XP).png";
import UHF_UWB_PA from "../assets/ResearchArea/Ultra-Wideband UHF Power Amplifiers.png";
import TR_Chip_Enclosure from "../assets/ResearchArea/C_Ku 5_18 GHz GaN MMIC TR Chip in Enclosure.png";

const StrategicArea = () => {
  const [activeCard, setActiveCard] = useState(null);
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
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-orange-50/50">
            <img
              src={img}
              alt={labels[idx]}
              className={`w-full h-56 object-contain p-6 transition-all duration-500 ${
                hoveredImage === `${section}-${idx}` ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-orange-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-5 text-center">
            <h3 className="text-slate-700 font-semibold text-lg group-hover:text-orange-600 transition-colors duration-300">
              {labels[idx]}
            </h3>
            <div className="mt-3 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transition-all duration-500 mx-auto" />
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
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-orange-50/30">
            <img
              src={img}
              alt={labels[idx]}
              className={`w-full h-48 object-contain p-4 transition-all duration-500 ${
                hoveredImage === `${section}-${idx}` ? 'scale-110' : 'scale-100'
              }`}
            />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-slate-700 font-medium group-hover:text-orange-600 transition-colors duration-300">
              {labels[idx]}
            </h3>
            <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-orange-400 to-amber-500 transition-all duration-500 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );

  const SingleImage = ({ src, alt, className = "" }) => (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl blur-xl transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={src}
        alt={alt}
        className="relative rounded-3xl shadow-xl w-full max-h-72 object-contain bg-white/90 backdrop-blur-sm p-6 border border-slate-200/50 transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-amber-100/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-96 h-96 bg-red-200/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl animate-pulse delay-2000" />
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-orange-600 to-red-600 bg-clip-text text-transparent leading-tight">
            Sustainability & Strategic<br />Innovation
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Advancing power amplifier technology through sustainable, compact, and high-efficiency MMIC and board-level designs.
          </p>

          {/* Hero Image */}
          <SingleImage 
            src={strategicArea}
            alt="Strategic Innovation Overview"
            className="max-w-5xl mx-auto"
          />
        </div>

        {/* GaN MMIC Development */}
        <section 
          id="gan-mmic" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible['gan-mmic'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              GaN MMIC Power Amplifiers for Strategic Applications
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Multiple compact, high-power MMIC-based designs have been developed using GaN technology
              for Ku-band, C-band, and broadband applications. These designs are optimized for radar,
              communication links, and UAV platforms, offering high gain, output power, and efficiency.
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Gan_MMIC_in_Enclosure, GaN_MMIC_on_Testing]}
            labels={["GaN MMIC in Enclosure", "GaN MMIC Testing Setup"]}
            section="gan-mmic"
          />
        </section>

        {/* Broadband C-Ku Band */}
        <section 
          id="broadband" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible.broadband ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Broadband C-Ku Band MMIC Power Amplifiers
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Power amplifiers designed with hybrid filter matching techniques (combining high-pass and
              low-pass) enable wideband performance. These are implemented using quasi-lumped reactive
              matching topologies for improved frequency response across the C to Ku band.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[C_Ku_Ultra_Wideband_PA, Ku_Band_MMIC_PA]}
            labels={["C-Ku Ultra Wideband MMIC PA", "Ku Band MMIC PA Design"]}
            section="broadband"
          />
        </section>

        {/* Defense Applications */}
        <section 
          id="defense" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible.defense ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Strategic Communication and Defense Applications
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              The developed amplifiers serve mission-critical functions in radar systems and unmanned
              aerial vehicles (UAVs), offering ruggedness, wide coverage, and high power output.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-pink-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Ku_Band_Radar, C_Band_UAV]}
            labels={["Ku-Band Radar Application", "C-Band UAV Data Link"]}
            section="defense"
          />
        </section>

        {/* Custom MMIC Chips */}
        <section 
          id="mmic-chips" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible['mmic-chips'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              MMIC Chips with Custom Topologies
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              Class-E and Class-AB power amplifier chips were developed for different bands using
              130nm GF SiGe BiCMOS technology. These ICs offer low power loss and small form-factor for
              integration in high-density systems.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
          </div>

          <ImageTriple 
            images={[Class_E_Chip, Class_AB_Chip, BiCMOS_8XP]}
            labels={["Class E Power Amplifier Chip", "Class AB Power Amplifier Chip", "130nm GF SiGe BiCMOS"]}
            section="mmic-chips"
          />
        </section>

        {/* Ultra-Wideband UHF */}
        <section 
          id="uhf" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible.uhf ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Ultra-Wideband UHF Power Amplifiers
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              These filter-less architectures avoid traditional matching circuits and deliver
              ultra-wideband performance, enabling low-loss communication at UHF frequencies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
          </div>

          <SingleImage 
            src={UHF_UWB_PA}
            alt="Ultra-Wideband UHF Power Amplifier"
            className="max-w-5xl mx-auto"
          />
        </section>

        {/* Integrated Tx/Rx MMIC */}
        <section 
          id="txrx" 
          data-animate
          className={`transition-all duration-1000 delay-700 ${
            isVisible.txrx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              C-Ku Band Tx/Rx GaN MMIC in Enclosure
            </h2>
            <p className="text-slate-600 max-w-5xl mx-auto text-lg leading-relaxed mb-8">
              A highly integrated 5–18 GHz GaN MMIC transceiver (TR) chip developed for strategic
              communication combines power, switching, and control in a compact enclosure.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <SingleImage 
            src={TR_Chip_Enclosure}
            alt="C-Ku GaN MMIC TR Chip in Enclosure"
            className="max-w-4xl mx-auto"
          />
        </section>
      </div>
    </div>
  );
};

export default StrategicArea;