import React, { useState, useEffect } from "react";
import { X, ZoomIn, Zap, Satellite, Cpu, Wifi, ChevronDown } from "lucide-react";

// Import all assets
import efficientWireless from "../assets/Home/Efficient Enhancement in Wireless Communication.png";
import bandwidthChart from "../assets/ResearchArea/ContinuumOfClassBandwidth.png";
import classE from "../assets/Technology/Class_E.png";
import classF from "../assets/Technology/Class_F.jpg";
import classD from "../assets/Technology/Class_D.png";
import Class_E_Continuum from "../assets/Technology/Class_E_Continuum.png";
import Class_F_Continuum from "../assets/Technology/Class_F_Continuum.png";
import Class_BJ_Continuum from "../assets/Technology/Class_BJ_Continuum.png";
import TwoPAsPullLoad from "../assets/ResearchArea/Two_PAs_pull_the_load_of_Each_other.png";
import ReconfigurableDualBandSchematic from "../assets/ResearchArea/Schematic_Reconfigurable_and_Concurrent_Dual_band_Doherty_PA.png";
import ReconfigurableDualBand from "../assets/ResearchArea/Reconfigurable_and_Concurrent_Dual_band_Doherty_PA.png";
import Chireix_outphasing_power_aplifier from "../assets/Technology/Chireix_outphasing_power_aplifier.png";
import Outphasing_Amplifier_Implemented from "../assets/ResearchArea/Outphasing_Amplifier_Implemented.png";
import Device_size_schematic from "../assets/Technology/Device_size_schematic.png";
import Device_size_optimisation from "../assets/Technology/Device_size_optimisation.png";
import Type_2_Sequential_operation_Schematic from "../assets/Technology/Type_2_Sequential_operation_Schematic.png";
import Type_2_Sequential_operation_img from "../assets/Technology/Type_2_Sequential_operation_img.png";
import Gan_MMIC_in_Enclosure from "../assets/ResearchArea/Gan_MMIC_in_Enclosure.png";
import GaN_MMIC_on_Testing from "../assets/ResearchArea/GaN_MMIC_on(testing).png";
import C_Ku_Ultra_Wideband_PA from "../assets/ResearchArea/C-Ku Band Ultra Wideband MMIC PA.png";
import Ku_Band_MMIC_PA from "../assets/ResearchArea/Ku Band MMIC PA.png";
import Ku_Band_Radar from "../assets/ResearchArea/Ku-Band Radar Application.png";
import C_Band_UAV from "../assets/ResearchArea/C-Band UAV Data Link.png";
import Class_E_Chip from "../assets/ResearchArea/Class E Power Amplifier Chip.png";
import Class_AB_Chip from "../assets/ResearchArea/Class AB Power Amplifier Chip.png";
import BiCMOS_8XP from "../assets/ResearchArea/130nm GF SiGe BiCMOS (8XP).png";
import TR_Chip_Enclosure from "../assets/ResearchArea/C_Ku 5_18 GHz GaN MMIC TR Chip in Enclosure.png";
import UHF_UWB_PA from "../assets/ResearchArea/Ultra-Wideband UHF Power Amplifiers.png";
import Digitizing_PA from "../assets/ResearchArea/Digitizing the Power Amplifiers.png";
import DSM_Modulation from "../assets/ResearchArea/Delta Sigma Based Modulation.png";
import SDR_Architecture from "../assets/ResearchArea/SDR Transceivers Architecture for.png";
import SDR_Transceivers from "../assets/ResearchArea/SDR based Transceivers.png";
import DPD_Process from "../assets/ResearchArea/DPD Implementation and Linearization Process.png";
import Memory_Polynomial from "../assets/ResearchArea/Memory Polynomial Coefficients.png";
import Level_Transformation from "../assets/ResearchArea/Level.png";
import Unequal_Level_Transformation from "../assets/ResearchArea/Unequal Level transformation (6 Level – 3 Level).png";
import Level_6_3 from "../assets/ResearchArea/6-3 Level  transformation with measurement.png";
import Hardware_Setup from "../assets/ResearchArea/Hardware setup.png";

const ImageModal = ({ src, alt, isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
      onClick={onClose}
    >
      <div className="relative max-w-6xl max-h-full flex items-center justify-center">
        <img 
          src={src} 
          alt={alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const InteractiveImage = ({ src, alt, caption, className = "" }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <div 
        className={`group cursor-pointer transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsModalOpen(true)}
      >
        <div className={`relative overflow-hidden rounded-xl bg-white shadow-md border border-gray-200 transition-all duration-300 ${isHovered ? 'shadow-xl -translate-y-1 border-blue-300' : ''}`}>
          <div className="relative overflow-hidden bg-gray-100 p-4">
            <img 
              src={src} 
              alt={alt} 
              className={`w-full h-48 object-contain transition-transform duration-300 ${isHovered ? 'scale-105' : ''}`}
            />
            <div className={`absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 ${isHovered ? 'opacity-100' : ''}`} />
            <div className={`absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 transition-all duration-300 ${isHovered ? 'opacity-100 scale-100' : 'scale-75'}`}>
              <ZoomIn className="w-4 h-4 text-gray-700" />
            </div>
          </div>
          {caption && (
            <div className="p-3 text-center bg-white">
              <p className="text-sm font-medium text-gray-700">{caption}</p>
            </div>
          )}
        </div>
      </div>
      <ImageModal src={src} alt={alt} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

const SectionHeader = ({ title, description, icon: Icon }) => (
  <div className="text-center mb-12 max-w-4xl mx-auto">
    <div className="flex items-center justify-center mb-4">
      <div className="p-3 bg-blue-100 rounded-full mr-4">
        <Icon className="w-6 h-6 text-blue-600" />
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
        {title}
      </h2>
    </div>
    {description && (
      <p className="text-gray-600 text-lg leading-relaxed">
        {description}
      </p>
    )}
    <div className="mt-6 w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
  </div>
);

const TechSpecs = ({ specs }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-12">
    {specs.map((spec, idx) => (
      <div key={idx} className="bg-white rounded-xl p-4 shadow-md border border-gray-100 text-center">
        <div className="text-2xl font-bold text-blue-600 mb-1">{spec.value}</div>
        <div className="text-gray-600 text-sm">{spec.label}</div>
      </div>
    ))}
  </div>
);

const RFPowerAmplifiers = () => {
  const [activeSection, setActiveSection] = useState(0);

  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight * 0.8,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center relative px-4 py-16">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
        
        <div className="text-center max-w-4xl mx-auto z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Advanced RF Power Amplifier Systems
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
            Revolutionizing wireless communication with cutting-edge power amplifier technologies for 5G, defense, and next-generation applications.
          </p>
          
          <TechSpecs specs={[
            { value: "95%+", label: "Peak Efficiency" },
            { value: "Multi-Octave", label: "Bandwidth" },
            { value: "5G Ready", label: "Standards" }
          ]} />
          
          <div className="mt-12 max-w-5xl mx-auto">
            <InteractiveImage 
              src={efficientWireless}
              alt="Advanced RF Power Amplifier Systems Overview"
              caption="Comprehensive RF Systems Architecture"
            />
          </div>
          
          <button 
            onClick={scrollToNextSection}
            className="mt-12 animate-bounce inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
          >
            <ChevronDown className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Waveform Engineering Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Waveform Engineering"
            description="Revolutionary techniques that transcend traditional narrow-band limitations, achieving unprecedented efficiency and multi-octave bandwidth."
            icon={Zap}
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-6">
                Traditional PA classes suffer from efficiency degradation with high PAPR signals. Our waveform engineering enables synthesis of optimal load impedances across multiple harmonics, ensuring transistors operate in their most efficient region while maintaining linearity.
              </p>
              
              <InteractiveImage 
                src={bandwidthChart}
                alt="Continuum of Class Bandwidth Evolution"
                caption="Evolution from Narrowband to Continuum Approaches"
              />
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-6">
              <p className="text-gray-700 mb-6">
                We pioneer the move beyond discrete class-mode operations toward a dynamic "continuum" of operation, enabling real-time adaptation to varying signal characteristics and environmental conditions.
              </p>
              
              <div className="grid grid-cols-3 gap-4">
                <InteractiveImage 
                  src={classE}
                  alt="Classic Class E Power Amplifier"
                  caption="Class E"
                />
                <InteractiveImage 
                  src={classF}
                  alt="Classic Class F Power Amplifier"
                  caption="Class F"
                />
                <InteractiveImage 
                  src={classD}
                  alt="Classic Class D Power Amplifier"
                  caption="Class D"
                />
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Advanced Continuum Architectures</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <InteractiveImage 
              src={Class_E_Continuum}
              alt="Class E Continuum Power Amplifier"
              caption="Class E Continuum"
            />
            <InteractiveImage 
              src={Class_F_Continuum}
              alt="Class F Continuum Power Amplifier"
              caption="Class F Continuum"
            />
            <InteractiveImage 
              src={Class_BJ_Continuum}
              alt="Class B/J Continuum Power Amplifier"
              caption="Class B/J Continuum"
            />
          </div>
        </div>
      </section>

      {/* Wireless Base Station PAs Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Wireless Base Station PAs"
            description="Next-generation power amplifiers for 4G/5G/6G base stations featuring advanced Doherty and Outphasing architectures."
            icon={Wifi}
          />
          
          <div className="bg-purple-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Doherty Power Amplifier Innovation</h3>
            <p className="text-gray-700 mb-8 text-center">
              Revolutionary load-modulation technique where two amplifiers dynamically share the load, maintaining high efficiency even during power back-off conditions.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <InteractiveImage 
                src={TwoPAsPullLoad}
                alt="Doherty PA Load Sharing Principle"
                caption="Dynamic Load Modulation"
              />
              <div className="grid grid-cols-2 gap-4">
                <InteractiveImage 
                  src={ReconfigurableDualBandSchematic}
                  alt="Reconfigurable Dual-Band Doherty Schematic"
                  caption="Dual-Band Schematic"
                />
                <InteractiveImage 
                  src={ReconfigurableDualBand}
                  alt="Dual-Band Doherty Implementation"
                  caption="Dual-Band Hardware"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-pink-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Outphasing Amplifier Technology</h3>
            <p className="text-gray-700 mb-8 text-center">
              Innovative Chireix outphasing architecture combines constant-envelope signals with varying phases for exceptional efficiency with high-PAPR signals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveImage 
                src={Chireix_outphasing_power_aplifier}
                alt="Chireix Outphasing Architecture"
                caption="Chireix Architecture"
              />
              <InteractiveImage 
                src={Outphasing_Amplifier_Implemented}
                alt="Implemented Outphasing Hardware"
                caption="Outphasing Implementation"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Advanced Optimization Techniques</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <InteractiveImage 
              src={Device_size_schematic}
              alt="Device Size Optimization Schematic"
              caption="Device Sizing"
            />
            <InteractiveImage 
              src={Device_size_optimisation}
              alt="Optimized Device Implementation"
              caption="Optimized Device"
            />
            <InteractiveImage 
              src={Type_2_Sequential_operation_Schematic}
              alt="Sequential Operation Schematic"
              caption="Sequential Schematic"
            />
            <InteractiveImage 
              src={Type_2_Sequential_operation_img}
              alt="Sequential Operation Hardware"
              caption="Sequential Hardware"
            />
          </div>
        </div>
      </section>

      {/* SDR Power Amplifier Modules Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="SDR Power Amplifier Modules"
            description="Cutting-edge GaN MMIC solutions for Software-Defined Radio platforms with unmatched flexibility and ultra-wideband performance."
            icon={Satellite}
          />
          
          <TechSpecs specs={[
            { value: "5-18 GHz", label: "Ultra-Wideband" },
            { value: "GaN MMIC", label: "Technology" },
            { value: "Military Grade", label: "Reliability" }
          ]} />
          
          <div className="bg-green-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">GaN MMIC Technology Leadership</h3>
            <p className="text-gray-700 mb-8 text-center">
              Gallium Nitride MMICs provide exceptional power density, efficiency, and robustness across extreme frequency ranges and harsh environments.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveImage 
                src={Gan_MMIC_in_Enclosure}
                alt="GaN MMIC in Rugged Enclosure"
                caption="Military-Grade Module"
              />
              <InteractiveImage 
                src={GaN_MMIC_on_Testing}
                alt="GaN MMIC Testing Setup"
                caption="Testing Environment"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <InteractiveImage 
              src={C_Ku_Ultra_Wideband_PA}
              alt="C-Ku Band Ultra-Wideband MMIC"
              caption="C-Ku Band MMIC PA"
            />
            <InteractiveImage 
              src={Ku_Band_MMIC_PA}
              alt="Ku Band MMIC PA Module"
              caption="Ku Band MMIC PA"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Mission-Critical Applications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <InteractiveImage 
              src={Ku_Band_Radar}
              alt="Ku-Band Radar PA"
              caption="Ku-Band Radar Applications"
            />
            <InteractiveImage 
              src={C_Band_UAV}
              alt="C-Band UAV Data Link PA"
              caption="C-Band UAV Data Link"
            />
          </div>
          
          <div className="bg-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Advanced Semiconductor Integration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <InteractiveImage 
                src={Class_E_Chip}
                alt="Class E MMIC Chip"
                caption="Class E MMIC"
              />
              <InteractiveImage 
                src={Class_AB_Chip}
                alt="Class AB MMIC Chip"
                caption="Class AB MMIC"
              />
              <InteractiveImage 
                src={BiCMOS_8XP}
                alt="SiGe BiCMOS Technology"
                caption="SiGe BiCMOS"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveImage 
                src={TR_Chip_Enclosure}
                alt="Integrated TR Chip"
                caption="5-18 GHz GaN MMIC TR Module"
              />
              <InteractiveImage 
                src={UHF_UWB_PA}
                alt="UHF Ultra-Wideband PA"
                caption="Ultra-Wideband UHF"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5G Digital Transmitter Solutions Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="5G Digital Transmitter Solutions"
            description="Revolutionary all-digital transmitter architectures with embedded intelligence for next-generation 5G and beyond wireless systems."
            icon={Cpu}
          />
          
          <div className="bg-indigo-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">All-Digital Transmitter Revolution</h3>
            <p className="text-gray-700 mb-8 text-center">
              Moving digital-to-analog conversion closer to the antenna through Delta-Sigma Modulation, enabling power amplifiers to function as efficient switches.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveImage 
                src={Digitizing_PA}
                alt="Digital Power Amplifier Architecture"
                caption="Digital PA Architecture"
              />
              <InteractiveImage 
                src={DSM_Modulation}
                alt="Delta Sigma Modulation"
                caption="Delta-Sigma Modulation"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">SDR Platform Integration</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <InteractiveImage 
              src={SDR_Architecture}
              alt="SDR Transceiver Architecture"
              caption="SDR Architecture"
            />
            <InteractiveImage 
              src={SDR_Transceivers}
              alt="SDR Transceiver Hardware"
              caption="SDR Transceivers"
            />
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Digital Pre-Distortion Technology</h3>
            <p className="text-gray-700 mb-8 text-center">
              Advanced DPD algorithms compensate for amplifier non-linearities in real-time, ensuring clean signal transmission while maintaining high efficiency.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <InteractiveImage 
                src={DPD_Process}
                alt="DPD Implementation Process"
                caption="DPD Process"
              />
              <InteractiveImage 
                src={Memory_Polynomial}
                alt="Memory Polynomial Coefficients"
                caption="Memory Polynomial"
              />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">Advanced Level Transformation</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <InteractiveImage 
              src={Level_Transformation}
              alt="General Level Transformation"
              caption="Level Transformation"
            />
            <InteractiveImage 
              src={Unequal_Level_Transformation}
              alt="Unequal Level Transformation"
              caption="Unequal Transformation"
            />
            <InteractiveImage 
              src={Level_6_3}
              alt="6-3 Level Transformation Results"
              caption="6-3 Transformation"
            />
          </div>
          
          <div className="bg-orange-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-6">Hardware Implementation</h3>
            <p className="text-gray-700 mb-8 text-center">
              Complete hardware setup for developing and testing advanced 5G embedded transmitter solutions with real-world validation.
            </p>
            
            <InteractiveImage 
              src={Hardware_Setup}
              alt="5G Transmitter Hardware Setup"
              caption="5G Hardware Setup"
              className="max-w-4xl mx-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RFPowerAmplifiers;