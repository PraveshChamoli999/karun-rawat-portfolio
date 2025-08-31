import React, { useState, useEffect } from "react";
import { ExternalLink, BookOpen, Award, Users, Briefcase } from "lucide-react";
import Lottie from "react-lottie";
import Loader from "../assets/loader.json";
import amptech_logo from "../assets/Home/amptech_logo.png";


const AboutMe = () => {
  const [activeSection, setActiveSection] = useState('biography');
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isLoader, setIsLoader] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoader(false);
      setIsHeaderVisible(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const loaderSetting = {
    loop: true,
    autoplay: true,
    animationData: Loader,
  };

const sections = [
  { id: 'biography', label: 'Biography', icon: <BookOpen size={18} /> },
  { id: 'awards', label: 'Honour & Awards', icon: <Award size={18} /> },
  { id: 'memberships', label: 'Memberships', icon: <Users size={18} /> },
  { id: 'affiliations', label: 'leadership', icon: <Briefcase size={18} /> },
 
];

  // Styled content item component
  const ContentItem = ({ title, description, meta, type, index }) => (
    <div className={`group flex items-start gap-4 p-4 hover:bg-gradient-to-r from-blue-50 to-white rounded-lg transition-all duration-300 border ${
      type === 'award' ? 'border-green-100' : 
      type === 'membership' ? 'border-purple-100' : 
      type === 'affiliation' ? 'border-orange-100' : 
      'border-blue-100'
    }`}>
      <div className="flex-shrink-0 mt-1">
        {type === 'award' && <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600"><Award size={16} /></div>}
        {type === 'membership' && <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"><Users size={16} /></div>}
        {type === 'affiliation' && <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600"><Briefcase size={16} /></div>}
        {!type && <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">{index + 1}</div>}
      </div>
      <div className="flex-grow">
        <h3 className="text-gray-800 group-hover:text-blue-700 transition-colors duration-300 font-medium">
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        {meta && <p className="text-xs text-gray-500 mt-2">{meta}</p>}
      </div>
    </div>
  );

  return (
    <div id="main-content" className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Animated Header */}
      <div className="pt-24 pb-12">
        <div className="text-center">

 <div className="inline-block">
        <h1 
          className={`
            text-4xl md:text-6xl font-bold text-transparent bg-clip-text 
            bg-gradient-to-r from-teal-600 to-blue-500 mb-4 pb-2
            transition-all duration-1000 ease-out cursor-pointer
            ${isHeaderVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            ${isHovered ? "scale-105 from-teal-500 to-blue-400" : ""}
          `}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Professional Profile
        </h1>
        
        {/* Subtle underline effect */}
        <div className={`
          h-1 bg-gradient-to-r from-teal-600 to-blue-500 
          transition-all duration-500 ease-out mt-2
          ${isHovered ? "w-full opacity-100" : "w-0 opacity-0"}
        `} />
      </div>
  
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-150 ${
            isHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Professional journey, achievements, and affiliations
          </p>
          <div className={`w-24 h-1 bg-gradient-to-r from-blue-400 to-teal-400 mx-auto rounded-full transition-all duration-1000 delay-300 ${
            isHeaderVisible ? 'opacity-100 w-24' : 'opacity-0 w-0'
          }`}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation */}
        <div className="flex flex-wrap justify-center gap-1 mb-12 bg-white rounded-xl p-1 shadow-md border border-blue-50">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 flex items-center gap-2 text-sm font-medium ${
                activeSection === section.id
                  ? 'bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-blue-50'
              }`}
            >
              {section.icon}
              {section.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden mb-16">
          {isLoader ? (
            <div className="flex justify-center p-12">
              <Lottie options={loaderSetting} height={120} width={120} />
            </div>
          ) : (
            <>
              {/* Biography Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'biography' ? 'opacity-100 p-6 md:p-8' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-blue-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Professional Biography</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                    <p className="text-lg text-gray-800 mb-2">
                      <span className="font-semibold text-blue-900">Dr. Karun Rawat</span> is a Professor in the Department of Electronics and Communication at the Indian Institute of Technology (IIT) Roorkee, India.
                    </p>
                    <p className="text-sm text-blue-700">PhD in Electrical Engineering, University of Calgary, Canada (2012)</p>
                  </div>
                  
                  <ContentItem
                    title="Academic Journey"
                    description="His academic journey includes serving as an Assistant Professor at the Centre for Applied Research in Electronics, IIT Delhi (2013-2014), and working as a scientist at the Space Applications Center, Indian Space Research Organization, Ahmedabad (2003–2007)."
                    type="academic-journey"
                  />
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <ContentItem
                      title="Research Impact"
                      description="60+ publications, 2 patents, authored books and chapters"
                      type="award"
                    />
                    <ContentItem
                      title="Industry Leadership"
                      description="Founding Director, Linear amp-tech technology pvt. ltd."
                      type="affiliation"
                    />
                  </div>
                  
                  <ContentItem
                    title="Research Focus"
                    description="As a Senior IEEE member since 2012, his research interests span RF power amplifier design, digital transmitters, nonlinear device modeling, and RF CMOS and GaN MMIC designs. He has delivered technical talks globally at prestigious conferences including EuMC, IEEE IMS, and IEEE ARFTG."
                   type="research-focus"
                  />
                  
                  <ContentItem
                    title="Professional Service"
                    description="Dr. Rawat serves as a reviewer for several IEEE transactions and is a member of the editorial board of Wiley journal in RF and Microwave Computer Aided Engineering. He has contributed to advisory committees of RF industries, national laboratories, and universities, and served as technical program chair for IEEE INDICON 2017."
                    type = "professional-service"
                  />
                </div>
              </div>

              {/* Awards Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'awards' ? 'opacity-100 p-6 md:p-8' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-green-500 to-green-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Awards & Recognition</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    {
                      title: "Outstanding Young Faculty Award",
                      description: "IIT Roorkee",
                      meta: "2020"
                    },
                    {
                      title: "NASI Scopus Young Scientists Awards (Finalist)",
                      description: "Innovation in Engineering and Physical Sciences",
                      meta: "2019"
                    },
                    {
                      title: "Smart Radio Challenge - First Prize & Best Design",
                      description: "Wireless Innovation Forum (Worldwide Championship)",
                      meta: "2010"
                    },
                    {
                      title: "Research Production Award",
                      description: "University of Calgary",
                      meta: "2009-2011 (Three consecutive years)"
                    },
                    {
                      title: "Best Industrial Trainee Award",
                      description: "BEL Hyderabad, India",
                      meta: "B.E. Program"
                    }
                  ].map((item, index) => (
                    <ContentItem
                      key={index}
                      title={item.title}
                      description={item.description}
                      meta={item.meta}
                      type="award"
                    />
                  ))}
                </div>
              </div>

              {/* Memberships Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'memberships' ? 'opacity-100 p-6 md:p-8' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Professional Organization</h2>
                </div>
                
                <div className="space-y-4">
                  {[
                    "Member Technical Committee MTT-12: Microwave High Power Techniques",
                    "Senior Member IEEE",
                    "Member MTT Special Interest Group in Microwave and Wireless Education",
                    "Member, IEEE MTT, IEEE COMSOC, IEEE EDS",
                    "Member NVNA Forum, USA",
                    "Chapter Chair, IEEE Communication Society Chapter"
                  ].map((item, index) => (
                    <ContentItem
                      key={index}
                      title={item}
                      type="membership"
                    />
                  ))}
                </div>
              </div>

              {/* Affiliations Section */}
              <div className={`transition-all duration-500 ease-in-out ${activeSection === 'affiliations' ? 'opacity-100 p-6 md:p-8' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                <div className="flex items-center gap-4 mb-6 pb-4 border-b border-blue-100">
                  <div className="w-2 h-8 bg-gradient-to-b from-orange-500 to-orange-400 rounded-full"></div>
                  <h2 className="text-2xl font-bold text-gray-800">Professional Leadership</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
<a
  href="https://linear-amptech.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 text-lg font-medium text-orange-800 hover:text-orange-900 transition-colors duration-200"
>
  <img
    src={amptech_logo}
    alt="Linear Amptech Logo"
    className="w-10 h-10 rounded-lg object-contain bg-orange-100 p-1"
  />
  <span>Linear Amptech</span>
  <ExternalLink size={16} />
</a>

                    <p className="text-gray-600 mt-4 ml-13">
                      Founding Director of Linear amp-tech technology private limited, specializing in indigenous development of power amplifier design and linearization technology.
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm pb-8">
          <p>For more information, please contact our office.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;