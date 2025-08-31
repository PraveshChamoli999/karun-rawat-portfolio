import React, { useState } from "react";
import { Cpu, Zap, Settings, X, ZoomIn, ChevronRight, Award, Clock, Battery, Thermometer } from "lucide-react";

// Import images
import GanMMIC from "../assets/ResearchArea/Gan_MMIC_in_Enclosure.png";
import KuBandMMIC from "../assets/ResearchArea/Ku Band MMIC PA.png";
import SiGePA from "../assets/Technology/SiGe_PA_Chip.png";
import CMOS from "../assets/ResearchArea/cmos.png";

const RFIntegratedCircuits = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const sections = [
    {
      id: "gan",
      title: "GaN Based MMIC",
      icon: Zap,
      text: "Gallium Nitride (GaN) technology represents the cutting edge of high-power, high-frequency semiconductor applications. Our GaN chip development focuses on creating robust, efficient power amplifiers capable of operating at extreme conditions. These chips deliver exceptional power density and thermal performance, making them ideal for 5G infrastructure, satellite communications, and defense applications.",
      images: [
        { src: GanMMIC, alt: "GaN MMIC in Enclosure", label: "GaN MMIC Packaged Design" },
        { src: KuBandMMIC, alt: "Ku Band MMIC PA", label: "Ku-Band Power Amplifier" }
      ],
      theme: {
        bg: "bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50",
        accent: "text-emerald-700",
        border: "border-emerald-200",
        button: "bg-emerald-600 hover:bg-emerald-700",
        glow: "shadow-emerald-200/50"
      },
      specs: [
        { icon: Zap, label: "High power density > 5W/mm", value: "5W/mm" },
        { icon: Award, label: "Operating frequency up to", value: "40 GHz" },
        { icon: Thermometer, label: "Excellent thermal management", value: "200°C" },
        { icon: ChevronRight, label: "Wide bandgap technology", value: "3.4 eV" }
      ]
    },
    {
      id: "sige",
      title: "SiGe BiCMOS based RFIC",
      icon: Cpu,
      text: "Our Silicon-Germanium (SiGe) BiCMOS power amplifiers represent a breakthrough in millimeter-wave circuit design. Featuring a fully integrated, inductor-less architecture, these chips deliver exceptional performance while maintaining cost-effectiveness. The advanced SiGe technology enables high-frequency operation with superior noise characteristics and power efficiency.",
      images: [
        { src: SiGePA, alt: "SiGe PA Chip", label: "SiGe Power Amplifier Chip" }
      ],
      theme: {
        bg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
        accent: "text-blue-700",
        border: "border-blue-200",
        button: "bg-blue-600 hover:bg-blue-700",
        glow: "shadow-blue-200/50"
      },
      specs: [
        { icon: Award, label: "Inductor-less design", value: "Compact" },
        { icon: Zap, label: "Millimeter-wave operation", value: "60+ GHz" },
        { icon: Cpu, label: "High integration level", value: "95%" },
        { icon: Clock, label: "Excellent noise figure", value: "< 3 dB" }
      ]
    },
    {
      id: "cmos",
      title: "CMOS based RFIC",
      icon: Settings,
      text: "Complementary Metal-Oxide-Semiconductor (CMOS) technology forms the backbone of modern digital and mixed-signal circuits. Our CMOS implementations emphasize scalability, ultra-low power consumption, and high integration density. These solutions are perfect for IoT applications, mobile communications, and battery-powered devices where efficiency is paramount.",
      images: [
        { src: CMOS, alt: "CMOS Technology", label: "CMOS Circuit Implementation" }
      ],
      theme: {
        bg: "bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50",
        accent: "text-purple-700",
        border: "border-purple-200",
        button: "bg-purple-600 hover:bg-purple-700",
        glow: "shadow-purple-200/50"
      },
      specs: [
        { icon: Battery, label: "Ultra-low power consumption", value: "< 100mW" },
        { icon: Award, label: "High scalability", value: "28nm & below" },
        { icon: Clock, label: "Cost-effective manufacturing", value: "High Volume" },
        { icon: Thermometer, label: "Wide temperature range", value: "-40°C to 125°C" }
      ]
    },
  ];

  const ImageModal = ({ image, onClose }) => (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4" onClick={onClose}>
      <div className="relative max-w-6xl max-h-full flex items-center justify-center">
        <img 
          src={image.src} 
          alt={image.alt} 
          className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-red-500 hover:bg-red-600 rounded-full p-2 transition-all duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg backdrop-blur-sm">
          <h3 className="text-lg font-semibold text-center">{image.label}</h3>
        </div>
      </div>
    </div>
  );

  const InteractiveImage = ({ src, alt, caption, theme, className = "" }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`group cursor-pointer transition-all duration-300 ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setSelectedImage({ src, alt, label: caption })}
      >
        <div className={`relative overflow-hidden rounded-xl bg-white shadow-md border ${theme.border} transition-all duration-300 ${isHovered ? 'shadow-xl -translate-y-1' : ''}`}>
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
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mb-6">
            <div className="bg-white rounded-full px-6 py-2">
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Advanced Semiconductor Technology
              </span>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent">
              RF Integrated Circuits
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-6">
            Design and development of cutting-edge RF integrated circuits using advanced semiconductor technologies for next-generation applications
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </header>

        {/* Technology Sections */}
        <div className="space-y-16">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <section
                key={section.id}
                id={section.id}
                className={`relative overflow-hidden rounded-3xl ${section.theme.bg} ${section.theme.border} border-2 shadow-xl hover:shadow-2xl transition-all duration-500`}
              >
                <div className="relative p-8 lg:p-12">
                  {/* Section Header */}
                  <div className="flex flex-col lg:flex-row lg:items-center gap-6 mb-8">
                    <div className={`p-4 rounded-2xl ${section.theme.button} shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-3xl lg:text-4xl font-bold ${section.theme.accent} mb-3`}>
                        {section.title}
                      </h2>
                      <div className={`h-1 w-20 ${section.theme.button} rounded-full`} />
                    </div>
                    <div className="hidden lg:block text-6xl font-bold text-black/5">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
                    {/* Text Content */}
                    <div className="lg:col-span-3">
                      <div className="mb-6">
                        <p className="text-gray-700 text-lg leading-relaxed">
                          {section.text}
                        </p>
                      </div>
                      
                      {/* Specifications */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.specs.map((spec, specIndex) => {
                          const SpecIcon = spec.icon;
                          return (
                            <div key={specIndex} className="flex items-start gap-3 p-3 bg-white/50 rounded-lg">
                              <div className={`p-2 rounded-full ${section.theme.button}`}>
                                <SpecIcon className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                <div className="text-sm text-gray-600">{spec.label}</div>
                                <div className="font-semibold text-gray-800">{spec.value}</div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* Images */}
                    <div className="lg:col-span-2 space-y-6">
                      {section.images.map((image, imgIndex) => (
                        <InteractiveImage
                          key={imgIndex}
                          src={image.src}
                          alt={image.alt}
                          caption={image.label}
                          theme={section.theme}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* Technology Comparison */}
        <section className="mt-20 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Technology Comparison</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <div key={index} className={`p-6 rounded-2xl ${section.theme.bg} border ${section.theme.border}`}>
                <h3 className={`text-xl font-bold ${section.theme.accent} mb-4`}>{section.title}</h3>
                <ul className="space-y-2">
                  {section.specs.slice(0, 3).map((spec, specIndex) => (
                    <li key={specIndex} className="flex items-center gap-2 text-sm text-gray-700">
                      <ChevronRight className="w-4 h-4" />
                      {spec.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default RFIntegratedCircuits;