import React, { useState, useEffect } from "react";

// Hero image
import efficientWireless from "../assets/Home/Efficient Enhancement in Wireless Communication.png";

// Technology section images
import TwoPAsPullLoad from "../assets/ResearchArea/Two_PAs_pull_the_load_of_Each_other.png";

import Device_size_optimisation from "../assets/Technology/Device_size_optimisation.png";
import Device_size_schematic from "../assets/Technology/Device_size_schematic.png";
import Type_2_Sequential_operation_img from "../assets/Technology/Type_2_Sequential_operation_img.png";
import Type_2_Sequential_operation_Schematic from "../assets/Technology/Type_2_Sequential_operation_Schematic.png";
import Chireix_outphasing_power_aplifier from "../assets/Technology/Chireix_outphasing_power_aplifier.png";

import Outphasing_Amplifier_Implemented from "../assets/ResearchArea/Outphasing_Amplifier_Implemented.png";
import New_Load_Combiners from "../assets/ResearchArea/New_Load_Combiners.png";
import ReconfigurableDualBand from "../assets/ResearchArea/Reconfigurable_and_Concurrent_Dual_band_Doherty_PA.png";
import ReconfigurableDualBandSchematic from "../assets/ResearchArea/Schematic_Reconfigurable_and_Concurrent_Dual_band_Doherty_PA.png";

const EfficientWireless = () => {
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
          className="group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200/50 hover:scale-[1.02] hover:-translate-y-1"
          onMouseEnter={() => setHoveredImage(`${section}-${idx}`)}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-teal-50/50">
            <img
              src={img}
              alt={labels[idx]}
              className={`w-full h-64 object-contain p-4 transition-all duration-500 ${
                hoveredImage === `${section}-${idx}` ? 'scale-110' : 'scale-100'
              }`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="p-4 text-center">
            <p className="text-slate-600 font-medium">{labels[idx]}</p>
            <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-500 transition-all duration-500 mx-auto" />
          </div>
        </div>
      ))}
    </div>
  );

  const SingleImage = ({ src, alt, className = "" }) => (
    <div className={`relative group ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-blue-500/20 rounded-3xl blur-xl transform rotate-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <img
        src={src}
        alt={alt}
        className="relative rounded-3xl shadow-xl w-full max-h-80 object-contain bg-white/90 backdrop-blur-sm p-6 border border-slate-200/50 transition-transform duration-500 group-hover:scale-[1.02]"
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50/30 to-cyan-100/20">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 right-20 w-80 h-80 bg-teal-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-200/15 rounded-full blur-3xl animate-pulse delay-2000" />
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-slate-800 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
            Power Amplifiers for<br />Wireless Communication
          </h1>
          
          <p className="text-lg sm:text-xl text-slate-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Enhancing average power efficiency in wireless systems through advanced Doherty and Outphasing 
            amplifier designs that adapt to high PAPR signals like LTE and 5G.
          </p>

          {/* Hero Image */}
          <SingleImage 
            src={efficientWireless}
            alt="Efficient Wireless Communication"
            className="max-w-5xl mx-auto"
          />
        </div>

        {/* Introduction Section */}
        <section 
          id="intro" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-200 ${
            isVisible.intro ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Efficiency Challenges in Wireless PAs
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 mx-auto rounded-full mb-8" />
            <p className="text-slate-700 text-lg leading-relaxed bg-white/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-200/50 shadow-lg">
              Wireless communication signals have high envelope variations, requiring PAs to operate
              efficiently at back-off power levels. Traditional single-mode PAs suffer from low efficiency
              under these conditions. Advanced architectures like Doherty and Outphasing are employed to
              address this challenge while maintaining linearity and bandwidth.
            </p>
          </div>
        </section>

        {/* Doherty PA Principle */}
        <section 
          id="doherty-principle" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-300 ${
            isVisible['doherty-principle'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Doherty PA Principle: Load Sharing
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              In a Doherty amplifier, two power amplifiers work in tandem — one as the main amplifier and the
              other as the auxiliary. As input signal increases, the auxiliary PA activates and shares the load,
              improving efficiency under varying power conditions.
            </p>
          </div>

          <SingleImage 
            src={TwoPAsPullLoad}
            alt="Two PAs pull the load of each other"
            className="max-w-4xl mx-auto"
          />
        </section>

        {/* Reconfigurable Dual-Band */}
        <section 
          id="dual-band" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-400 ${
            isVisible['dual-band'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Reconfigurable Dual-Band Doherty PA
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              A concurrent dual-band 2-stage Doherty PA using PIN diode switches (Skyworks MP1334-084LF)
              offers enhanced dynamic efficiency at 6 dB and 9 dB output back-off for 4G carrier aggregation.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[ReconfigurableDualBandSchematic, ReconfigurableDualBand]}
            labels={["Circuit Schematic", "Hardware Implementation"]}
            section="dual-band"
          />
        </section>

        {/* Device Size Optimization */}
        <section 
          id="device-size" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-500 ${
            isVisible['device-size'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Device Size Optimization in 3-Stage Doherty
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              This configuration improves efficiency by minimizing the auxiliary PA size, optimizing impedance
              matching networks and achieving 30.3% fractional bandwidth over 700–950 MHz.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Device_size_schematic, Device_size_optimisation]}
            labels={["Optimized Schematic", "Fabricated Prototype"]}
            section="device-size"
          />
        </section>

        {/* Sequential Operation */}
        <section 
          id="sequential" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-600 ${
            isVisible.sequential ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Sequential Operation in Broadband 3-Stage Doherty PA
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              This design improves efficiency at higher back-off levels (up to 12 dB) by selectively turning
              on amplifier stages, achieving 40% FBW and 50% DE at back-off.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Type_2_Sequential_operation_Schematic, Type_2_Sequential_operation_img]}
            labels={["Sequential Operation Schematic", "Measured Results"]}
            section="sequential"
          />
        </section>

        {/* Outphasing Amplifiers */}
        <section 
          id="outphasing" 
          data-animate
          className={`mb-20 transition-all duration-1000 delay-700 ${
            isVisible.outphasing ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              Outphasing Power Amplifiers
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              The Chireix Outphasing architecture uses two constant-envelope, phase-modulated signals to
              operate amplifiers in saturation while maintaining linearity. The reconfigurable outphasing
              PA designed at IIT Roorkee shows up to 25% efficiency improvement at 6–7 dB back-off.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-violet-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <ImagePair 
            images={[Chireix_outphasing_power_aplifier, Outphasing_Amplifier_Implemented]}
            labels={["Chireix Outphasing Architecture", "Implemented Hardware"]}
            section="outphasing"
          />
        </section>

        {/* Load Combiner */}
        <section 
          id="combiner" 
          data-animate
          className={`transition-all duration-1000 delay-800 ${
            isVisible.combiner ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-slate-800">
              New Load Combiner Architectures
            </h2>
            <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
              Innovative combiner designs significantly improve Doherty amplifier bandwidth. These architectures
              enable dynamic reconfiguration and reduce losses at higher frequencies.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-rose-500 mx-auto rounded-full" />
          </div>

          <SingleImage 
            src={New_Load_Combiners}
            alt="New Load Combiner Architectures"
            className="max-w-5xl mx-auto"
          />
        </section>
      </div>
    </div>
  );
};

export default EfficientWireless;