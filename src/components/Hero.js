import React, { useState, useEffect } from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { HiMail, HiPhone, HiLocationMarker, HiNewspaper, HiChevronLeft, HiChevronRight, HiAcademicCap } from "react-icons/hi";
import { getAllNews } from "../services/getData";

const Hero = ({ bgImage, profileImage }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);
  const [newsList, setNewsList] = useState([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState(null);

  // Fetch real news data
  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await getAllNews();
        if (res.error) {
          setNewsError(res.error);
        } else {
          setNewsList((res.data || []).slice(0, 3));
        }
      } catch (error) {
        setNewsError("Failed to load news");
      } finally {
        setNewsLoading(false);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-rotate news carousel
  useEffect(() => {
    if (newsList.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentNewsIndex((prev) => (prev + 1) % newsList.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [newsList.length]);

  const nextNews = () => {
    setCurrentNewsIndex((prev) => (prev + 1) % newsList.length);
  };

  const prevNews = () => {
    setCurrentNewsIndex((prev) => (prev - 1 + newsList.length) % newsList.length);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div 
     className="relative overflow-hidden min-h-screen flex items-center pt-100 lg:pt-28">
      {/* Brightened Background with Cursor Movement */}
      <div
        className="absolute inset-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.03}px, ${(mousePosition.y - 50) * 0.02}px) scale(1.05)`,
        }}
      >
        <img
          src={bgImage || require("../assets/bg.png")}
          alt="IITR Main Building"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Lighter Gradient Overlay for Better Brightness */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-slate-900/50 to-purple-900/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/10"></div>
      
      {/* Subtle Dynamic Overlay */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.1) 0%, 
            rgba(147, 197, 253, 0.05) 30%, 
            transparent 60%)`,
        }}
      ></div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full ${
              i % 5 === 0 ? 'bg-blue-300/60 animate-pulse' : 
              i % 5 === 1 ? 'bg-yellow-300/50 animate-bounce' : 
              i % 5 === 2 ? 'bg-purple-300/40 animate-pulse' : 
              i % 5 === 3 ? 'bg-green-300/40 animate-bounce' :
              'bg-pink-300/30 animate-pulse'
            }`}
            style={{
              width: `${3 + (i % 5) * 2}px`,
              height: `${3 + (i % 5) * 2}px`,
              left: `${5 + (i * 4.5) % 90}%`,
              top: `${15 + (i % 6) * 12}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + (i % 4)}s`,
              transform: `translate(${(mousePosition.x - 50) * (0.008 * (i + 1))}px, ${(mousePosition.y - 50) * (0.006 * (i + 1))}px)`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px currentColor',
            }}
          />
        ))}
      </div>

      {/* News Panel - Right Side */}
      {!newsLoading && !newsError && newsList.length > 0 && (
        <div className={`absolute top-32 right-6 w-72 z-20 transform transition-all duration-1000 delay-200 ${
          isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
            {/* News Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-white">
                  <HiNewspaper className="text-lg" />
                  <span className="font-bold text-sm tracking-wide">LATEST NEWS</span>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={prevNews}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                    aria-label="Previous news"
                  >
                    <HiChevronLeft className="text-white text-sm" />
                  </button>
                  <button
                    onClick={nextNews}
                    className="p-1 rounded-full bg-white/20 hover:bg-white/30 transition-colors duration-200"
                    aria-label="Next news"
                  >
                    <HiChevronRight className="text-white text-sm" />
                  </button>
                </div>
              </div>
            </div>

            {/* News Content */}
            <div className="p-4 h-24 relative overflow-hidden">
              {newsList.map((news, index) => (
                <div
                  key={news._id || index}
                  className={`absolute inset-0 p-1 flex flex-col justify-center transition-all duration-500 ${
                    index === currentNewsIndex 
                      ? 'opacity-100 translate-y-0' 
                      : index < currentNewsIndex 
                        ? 'opacity-0 -translate-y-full' 
                        : 'opacity-0 translate-y-full'
                  }`}
                >
                  <p className="text-gray-800 text-sm leading-relaxed font-medium line-clamp-3">
                    {news.content}
                  </p>
                  {news.date && (
                    <span className="text-blue-600 text-xs font-semibold mt-2">
                      {formatDate(news.date)}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* News Indicators */}
            <div className="flex justify-center gap-1 pb-3">
              {newsList.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    index === currentNewsIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Section - Profile */}
          <div className={`lg:col-span-5 text-center lg:text-left space-y-6 transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            {/* Enhanced Profile Image */}
            <div className="relative inline-block group">
              {/* Glow Effects */}
              <div className="absolute -inset-6 bg-gradient-to-br from-yellow-400/40 via-blue-400/40 to-purple-400/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-700 animate-pulse"></div>
              <div className="absolute -inset-3 bg-white/30 rounded-full blur-lg"></div>
              
              <img
                src={profileImage || require("../assets/karun-sir.png")}
                alt="Dr. Karun Rawat"
                className="relative w-48 h-48 lg:w-56 lg:h-56 rounded-full object-cover shadow-2xl border-4 border-white/60 group-hover:border-white/80 transition-all duration-500 group-hover:scale-105"
              />
              
              {/* Rotating Ring */}
              <div className="absolute -inset-4 border-2 border-white/30 rounded-full group-hover:rotate-180 transition-transform duration-[3000ms] ease-in-out"></div>
            </div>

            {/* Name and Title */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-amber-300 via-yellow-100 to-orange-200 bg-clip-text text-transparent drop-shadow-xl leading-tight">
                Dr. Karun Rawat
              </h1>
              
              {/* Enhanced Professor Title */}
              <div className="flex justify-center lg:justify-start items-center gap-3">
                <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-700 text-white px-6 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <HiAcademicCap className="text-xl" />
                  <span className="font-bold text-lg tracking-wide">PROFESSOR</span>
                </div>
              </div>
              
              <p className="text-slate-100 text-base leading-relaxed font-semibold max-w-md mx-auto lg:mx-0 bg-slate-800/60 backdrop-blur-sm rounded-lg p-4 border border-slate-300/30">
                Department of Electronics & Communication <br />
                <span className="text-amber-200 font-bold">Indian Institute of Technology Roorkee</span>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <a
                href="https://www.linkedin.com/in/karun-rawat-b732784b/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-700/70 backdrop-blur-md p-4 rounded-xl border border-slate-300/40 hover:bg-slate-600/70 hover:border-slate-200/60 transition-all duration-300 hover:scale-110 group shadow-xl"
              >
                <BsLinkedin className="text-blue-300 text-xl group-hover:text-blue-200 transition-colors duration-300" />
              </a>
              <a
                href="#"
                className="bg-slate-700/70 backdrop-blur-md p-4 rounded-xl border border-slate-300/40 hover:bg-slate-600/70 hover:border-slate-200/60 transition-all duration-300 hover:scale-110 group shadow-xl"
              >
                <BsTwitter className="text-sky-300 text-xl group-hover:text-sky-200 transition-colors duration-300" />
              </a>
            </div>
          </div>

          {/* Right Section - Information Cards */}
          <div className={`lg:col-span-7 lg:mt-40 space-y-6 transform transition-all duration-1000 delay-500 ${
            isLoaded ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          }`}>
            {/* Credentials Card */}
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-300/30 shadow-2xl hover:bg-slate-700/80 hover:border-slate-200/50 transition-all duration-500 group">
              <h3 className="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                Credentials & Memberships
              </h3>
              <div className="space-y-2">
                <p className="text-slate-100 font-bold text-base">
                  B.E, PhD, SMIEEE Member
                </p>
                <div className="text-slate-200 space-y-1 font-medium text-sm">
                  <p>• Technical Committee MTT-12: Microwave High Power</p>
                  <p>• MTT Special Interest Group in Microwave Education</p>
                  <p>• Editorial Board Wiley Journal in RFCAE</p>
                </div>
              </div>
            </div>

            {/* Contact Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Contact Card */}
              <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-300/30 shadow-2xl hover:bg-slate-700/80 hover:border-slate-200/50 transition-all duration-500 group">
                <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  Contact
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <HiMail className="text-blue-300 text-lg flex-shrink-0 mt-1" />
                    <div className="text-sm">
                      <p className="text-slate-100 font-medium">karun.rawat@ece.iitr.ac.in</p>
                      <p className="text-blue-200">karun.rawat.in@ieee.org</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <HiPhone className="text-green-300 text-lg" />
                    <p className="text-slate-100 font-medium">+91 1332 284830</p>
                  </div>
                </div>
              </div>

              {/* Office Card */}
              <div className="bg-slate-800/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-300/30 shadow-2xl hover:bg-slate-700/80 hover:border-slate-200/50 transition-all duration-500 group">
                <h3 className="text-lg font-bold text-amber-300 mb-4 flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  Office
                </h3>
                <div className="flex items-start gap-3">
                  <HiLocationMarker className="text-red-300 text-lg flex-shrink-0 mt-1" />
                  <div className="text-slate-100 font-medium leading-relaxed text-sm">
                    <p>Room 201 N, Dept. of ECE</p>
                    <p>Indian Institute of Technology Roorkee</p>
                    <p>Roorkee, Uttarakhand - 247667</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;