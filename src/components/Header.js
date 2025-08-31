import React from "react";
import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { scrollToMainContentArea } from "../utils/scrollToMainContent";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { path: "/", label: "Home", shortLabel: "Home" },
    { path: "/about-me", label: "About Me", shortLabel: "About" },
    { path: "/research-technology", label: "Research & Development", shortLabel: "Research" },
    { path: "/publications", label: "Publications & Patents", shortLabel: "Publications" },
    { path: "/training-workshops", label: "Training & Workshops", shortLabel: "Training" },
    { path: "/team-members", label: "Team & Members", shortLabel: "Team" },
    { path: "/news-highlights", label: "News & Highlights", shortLabel: "News" },
    { path: "/technology", label: "Technology", shortLabel: "Tech" },
    { path: "/industry-corner", label: "Industry Corner", shortLabel: "Industry" },
    { path: "/student-corner", label: "Student prospectus", shortLabel: "Students" }
  ];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#02458A]/95 backdrop-blur-md shadow-lg border-b border-white/10' 
        : 'bg-[#02458A]'
    }`}>
      <nav className="relative">
        <div className="w-full max-w-none px-2 lg:px-3 py-2 mx-auto lg:flex lg:justify-between lg:items-center">
          {/* Logo Section */}
          <div className="flex items-center justify-between">
            <NavLink 
              to="/" 
              className="group transition-transform duration-300 hover:scale-105"
            >
              <img
                className="w-auto h-10 lg:h-11 transition-all duration-300 group-hover:brightness-110"
                src={require("../assets/iitrLogo.png")}
                alt="IITR Logo"
              />
            </NavLink>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={handleClick}
                type="button"
                className="relative text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-all"
                aria-label="toggle menu"
              >
                <div className="w-5 h-5 relative">
                  <span className={`absolute top-2 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-0' : 'rotate-0 translate-y-0'
                  }`}></span>
                  <span className={`absolute top-2.5 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}></span>
                  <span className={`absolute top-3 left-0 w-5 h-0.5 bg-white transition-all duration-300 ${
                    isOpen ? '-rotate-45 -translate-y-0.5' : 'rotate-0 translate-y-0'
                  }`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Menu */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-4 py-5 transition-all duration-500 ease-in-out bg-[#02458A]/98 backdrop-blur-md border-t border-white/10 lg:border-t-0 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 shadow-xl"
                : "opacity-0 -translate-x-full lg:opacity-100 lg:translate-x-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row lg:mx-1 gap-2 lg:gap-0 items-center">
              {navItems.map((item, index) => {
                const isActive = location.pathname === item.path;
                return (
                  <React.Fragment key={item.path}>
                    <NavLink
                      className={`relative px-2 lg:px-1.5 py-2.5 lg:py-1.5 text-sm lg:text-xs xl:text-sm font-medium transition-all duration-300 transform rounded-md lg:mx-0.5 group whitespace-nowrap ${
                        isActive
                          ? 'text-white bg-white/20 lg:bg-white/15 shadow-sm border lg:border-white/20'
                          : 'text-white/90 hover:text-white hover:bg-white/10 hover:shadow-sm'
                      }`}
                      to={item.path}
                      onClick={() => {
                        if (isOpen) handleClick();
                        scrollToMainContentArea();
                      }}
                      title={item.label} // Show full label on hover
                    >
                      <span className="relative z-10 flex items-center">
                        {/* Show full label on mobile, short label on desktop */}
                        <span className="lg:hidden">{item.label}</span>
                        <span className="hidden lg:inline xl:hidden">{item.shortLabel}</span>
                        <span className="hidden xl:inline">{item.label}</span>
                        
                        {/* Active indicator dot for mobile */}
                        {isActive && (
                          <span className="ml-2 w-1.5 h-1.5 bg-white rounded-full lg:hidden animate-pulse"></span>
                        )}
                      </span>
                      
                      {/* Active indicator for desktop */}
                      {isActive && (
                        <span className="hidden lg:block absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full animate-pulse"></span>
                      )}
                      
                      {/* Hover underline for desktop */}
                      <span className={`hidden lg:block absolute bottom-0 left-0 h-0.5 bg-white/60 transition-all duration-300 ${
                        isActive 
                          ? 'w-full bg-white' 
                          : 'w-0 group-hover:w-full group-hover:bg-white'
                      }`}></span>
                    </NavLink>
                    
                    {/* Vertical divider for desktop - only show on larger screens */}
                    {index < navItems.length - 1 && (
                      <div className="h-3 w-[1px] hidden xl:block bg-white/15 mx-0.5 self-center"></div>
                    )}
                  </React.Fragment>
                );
              })}
              
              {/* Contact Us Button - Compact version */}
              <div className="mt-3 lg:mt-0 lg:ml-2 xl:ml-4">
                <NavLink
                  to="/contact"
                  className="relative inline-flex items-center px-3 lg:px-2 xl:px-3 py-2.5 lg:py-1.5 xl:py-2 text-sm lg:text-xs xl:text-sm font-semibold text-[#02458A] bg-white rounded-lg shadow-md hover:shadow-lg transform transition-all duration-300 hover:scale-105 hover:bg-gray-50 group overflow-hidden"
                  onClick={() => {
                    if (isOpen) handleClick();
                    scrollToMainContentArea();
                  }}
                >
                  {/* Animated background */}
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  
                  {/* Button content */}
                  <span className="relative flex items-center">
                    <svg 
                      className="w-3 h-3 lg:w-3 lg:h-3 xl:w-4 xl:h-4 mr-1.5 lg:mr-1 xl:mr-2 transition-transform duration-300 group-hover:rotate-12" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="lg:hidden xl:inline">Contact Us</span>
                    <span className="hidden lg:inline xl:hidden">Contact</span>
                  </span>
                  
                  {/* Shine effect */}
                  <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-700 transform skew-x-12"></span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-10"
          onClick={handleClick}
        ></div>
      )}
    </div>
  );
};

export default Header;