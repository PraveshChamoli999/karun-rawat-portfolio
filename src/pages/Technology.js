import React, { useState, useEffect } from "react";
import { ExternalLink, Zap, Cpu, Radio, ChevronRight } from "lucide-react";
import classE from "../assets/Technology/Class_E.png";
import classF from "../assets/Technology/Class_F.jpg";
import classD from "../assets/Technology/Class_D.png";
import Class_E_Continuum from "../assets/Technology/Class_E_Continuum.png";
import Class_F_Continuum from "../assets/Technology/Class_F_Continuum.png";
import Class_BJ_Continuum from "../assets/Technology/Class_BJ_Continuum.png";
import Extended_Class_BJ from "../assets/Technology/Extended_Class_BJ.png";
import Extended_Class_F_Conti from "../assets/Technology/Extended_Class_F_Conti.png";
import Extended_Class_E_Conti from "../assets/Technology/Extended_Class_E_Conti.png";
import Device_size_optimisation from "../assets/Technology/Device_size_optimisation.png";
import Device_size_schematic from "../assets/Technology/Device_size_schematic.png";
import Type_2_Sequential_operation_img from "../assets/Technology/Type_2_Sequential_operation_img.png";
import Type_2_Sequential_operation_Schematic from "../assets/Technology/Type_2_Sequential_operation_Schematic.png";
import Chireix_outphasing_power_aplifier from "../assets/Technology/Chireix_outphasing_power_aplifier.png";
import Gan_MMIC_in_Enclosure from "../assets/ResearchArea/Gan_MMIC_in_Enclosure.png";
import GaN_MMIC_on_Testing from "../assets/ResearchArea/GaN_MMIC_on(testing).png";
import SiGe_PA_Chip from "../assets/Technology/SiGe_PA_Chip.png";
import Ku_Band_MMIC_PA from "../assets/ResearchArea/Ku Band MMIC PA.png";

const sectionsData = [
  {
    title: "GaN (Gallium Nitride)",
    icon: <Zap className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    subsections: [
      {
        title: "Board Level",
        content: [
          {
            heading: "Switch Mode & Harmonic Terminated Power Amplifiers",
            text: "This group includes Class E, F, and D amplifiers which use high-efficiency switching techniques and harmonic suppression to reduce power loss. These compact designs are ideal for portable and power-sensitive applications, offering improved performance through precise waveform engineering.",
            images: [
              { src: classE, label: "Class E Power Amplifier" },
              { src: classF, label: "Class F Power Amplifier" },
              { src: classD, label: "Class D Power Amplifier" },
            ],
          },
          {
            heading: "Continuum of Amplifier Classes",
            text: "These designs explore smooth transitions between amplifier classes like Class B/J, Class F, and Class E. This allows flexible tuning for gain, efficiency, and output power, making them useful for adaptive or multi-mode systems.",
            images: [
              { src: Class_E_Continuum, label: "Class_E_Continuum Amplifier" },
              { src: Class_F_Continuum, label: "Class_F_Continuum" },
              { src: Class_BJ_Continuum, label: "Class_BJ_Continuum" },
            ],
          },
          {
            heading: "Multi-Octave Power Amplifiers (Extended Continuum)",
            text: "These PA boards support multiple octaves of frequency. Ideal for wideband systems like 5G, IoT, and radar.",
            images: [
              { src: Extended_Class_BJ, label: "Extended class B/J Amplifier" },
              {
                src: Extended_Class_E_Conti,
                label: "Extended Class E Continuum",
              },
              {
                src: Extended_Class_F_Conti,
                label: "Extended Class F Continuum",
              },
            ],
          },
          {
            heading:
              "Broadband 3-Stage Doherty PA – Type 1: Device Size Optimization",
            text: "This amplifier optimizes the size of the auxiliary PA stage to enhance efficiency. It covers 700–950 MHz with 30.3% bandwidth and supports efficient operation at back-off levels up to 9 dB. Innovative load and current waveform engineering enable these improvements.",
            images: [
              {
                src: Device_size_optimisation,
                label: "Device Size Optimization",
              },
              { src: Device_size_schematic, label: "Device Size Schematic" },
            ],
          },
          {
            heading:
              "Broadband 3-Stage Doherty PA – Type 2: Sequential Operation",
            text: "This variant employs a sequential switching mechanism that activates stages based on power level requirements. It achieves 40% bandwidth, 43.9 dBm saturation power, and over 50% efficiency at power back-off. Excellent for applications needing both efficiency and high linearity.",
            images: [
              {
                src: Type_2_Sequential_operation_img,
                label: "Sequential Operation",
              },
              {
                src: Type_2_Sequential_operation_Schematic,
                label: "Sequential Operation Schematic",
              },
            ],
          },
          {
            heading: "Simplified Outphasing Architecture",
            text: "A new approach to the Chireix amplifier using two constant-envelope signals with opposite phase. Efficient under envelope-varying signals. Maintains high efficiency as both amplifiers operate in saturation.",
            images: [
              {
                src: Chireix_outphasing_power_aplifier,
                label: "Chireix Outphasing Power Amplifier",
              },
            ],
          },
        ],
      },
      {
        title: "Chips",
        content: [
          {
            heading: "GaN Chip Development",
            text: "GaN chip-level development focuses on integrating high-performance transistors and circuits into compact die-level solutions. These chips deliver high power density, efficiency, and switching speed for RF and microwave applications.",
            images: [
              { src: Gan_MMIC_in_Enclosure, label: "GaN MMIC in Enclosure" },
              { src: Ku_Band_MMIC_PA, label: "Ku Band MMIC PA" },
            ],
          },
        ],
      },
    ],
  },
  {
    title: "BiCMOS",
    icon: <Cpu className="w-6 h-6" />,
    color: "from-emerald-600 to-teal-700",
    content: [
      {
        heading: "Millimeter-Wave Integrated Power Amplifier (36–53 GHz)",
        text: "This BiCMOS-based power amplifier is a fully integrated, inductor-less design utilizing extracted parasitics as part of a bandpass matching network. Built on GlobalFoundries 130nm SiGe BiCMOS technology, it delivers wideband performance from 36 to 53 GHz, making it ideal for Ka and V-band applications. The amplifier achieves a peak saturated power of 17.7 dBm, gain of 20 dB at 46 GHz, and up to 20.5% power-added efficiency (PAE). Its compact architecture with no on-chip inductors or transformers enhances integration with other RF front-end components.",
        images: [{ src: SiGe_PA_Chip, label: "SiGe PA Chip" }],
      },
    ],
  },
  {
    title: "CMOS",
    icon: <Radio className="w-6 h-6" />,
    color: "from-blue-600 to-indigo-700",
    content: [
      {
        heading: "CMOS Applications",
        text: "CMOS is a widely used technology in microelectronics, offering scalability, low power consumption, and affordability. It is foundational for digital integrated circuits, sensors, and RF systems.",
        images: [],
      },
    ],
  },
];

const Technology = () => {
  const [activeImageModal, setActiveImageModal] = useState(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsHeaderVisible(true), 100);
  }, []);

  const getImageGridClasses = (imageCount) => {
    if (imageCount === 0) return "";
    if (imageCount === 1) return "flex justify-center";
    if (imageCount === 2)
      return "grid grid-cols-1 md:grid-cols-2 gap-6 justify-center max-w-4xl mx-auto";
    if (imageCount === 3)
      return "grid grid-cols-1 md:grid-cols-3 gap-6 justify-center max-w-5xl mx-auto";
    return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center";
  };

  const renderContent = (contentArray) => (
    <div className="space-y-8">
      {contentArray.map((item, i) => (
        <div
          key={i}
          className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100"
        >
          <div className="p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
              {item.heading}
            </h4>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              {item.text}
            </p>

            {item.images.length > 0 && (
              <div
                className={`mt-8 ${getImageGridClasses(item.images.length)}`}
              >
                {item.images.map((img, j) => (
                  <div
                    key={j}
                    className="group/image cursor-pointer"
                    onClick={() => setActiveImageModal(img)}
                  >
                    <div className="relative overflow-hidden rounded-xl bg-gray-50 p-4 h-64">
                      <img
                        src={img.src}
                        alt={img.label || `${item.heading} ${j + 1}`}
                        className="w-full h-full object-contain group-hover/image:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center rounded-xl">
                        <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover/image:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    {img.label && (
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed text-center">
                        {img.label}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div
      id="main-content"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50"
    >
      {/* Animated Header - Publications Style */}
      <div className="pt-24 pb-12">
        <div className="text-center">
          <h1
  className={`block text-4xl md:text-5xl font-bold pb-2 text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-500 mb-4 transition-all duration-1000 ${
    isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
  }`}
          >
            Advanced Technology
          </h1>
          <p
            className={`text-lg text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Cutting-edge RF & Microwave solutions across semiconductor
            technologies
          </p>
          <div
            className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
              isHeaderVisible ? "opacity-100 w-24" : "opacity-0 w-0"
            }`}
          ></div>
          <div
            className={`flex flex-wrap justify-center gap-4 text-sm mt-8 transition-all duration-1000 delay-500 ${
              isHeaderVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full">
              <Zap className="w-4 h-4" /> High Efficiency
            </span>
            <span className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full">
              <Cpu className="w-4 h-4" /> Advanced Integration
            </span>
            <span className="flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full">
              <Radio className="w-4 h-4" /> Wideband Performance
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-12">
          {sectionsData.map((section, idx) => (
            <div key={section.title} className="group">
              {/* Section Header */}
              <div
                className={`bg-gradient-to-r ${section.color} rounded-3xl shadow-lg overflow-hidden transform transition-all duration-500 group-hover:scale-[1.02]`}
              >
                <div className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/20 backdrop-blur-sm rounded-2xl text-white">
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold text-white">
                        {section.title}
                      </h2>
                      <p className="text-white/80 mt-2">
                        {section.title === "GaN (Gallium Nitride)" &&
                          "High-power, high-frequency semiconductor technology"}
                        {section.title === "BiCMOS" &&
                          "Millimeter-wave integrated circuit solutions"}
                        {section.title === "CMOS" &&
                          "Complementary metal-oxide-semiconductor technology"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Content */}
              <div className="mt-8">
                {section.subsections ? (
                  <div className="space-y-10">
                    {section.subsections.map((sub, subIdx) => (
                      <div key={sub.title} className="relative">
                        {/* Subsection Header */}
                        <div className="bg-white rounded-2xl shadow-md border border-gray-100 mb-6 overflow-hidden">
                          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-l-4 border-blue-500">
                            <div className="flex items-center gap-3">
                              <ChevronRight className="w-6 h-6 text-blue-600" />
                              <h3 className="text-2xl font-bold text-gray-900">
                                {sub.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Subsection Content */}
                        <div className="ml-4">{renderContent(sub.content)}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="ml-4">{renderContent(section.content)}</div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-8"></div>
          <p className="text-gray-500 text-sm">
            Technology Overview • Advanced RF & Microwave Solutions
          </p>
        </div>
      </div>

      {/* Image Modal */}
      {activeImageModal && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setActiveImageModal(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl">
            <button
              onClick={() => setActiveImageModal(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full p-2 hover:bg-black/70 transition-colors"
            >
              ✕
            </button>
            <img
              src={activeImageModal.src}
              alt={activeImageModal.label}
              className="w-full h-auto max-h-[70vh] object-contain"
            />
            {activeImageModal.label && (
              <div className="p-6 border-t border-gray-200">
                <p className="text-gray-700 leading-relaxed">
                  {activeImageModal.label}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Technology;
