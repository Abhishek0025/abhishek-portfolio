import { useEffect } from "react";
import { useTheme } from "../App";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  // Resume download handler - commented out for now
  // const handleResumeDownload = async (e) => {
  //   e.preventDefault();
  //   try {
  //     // In development, Vite serves from root. In production, use base path
  //     const isDev = import.meta.env.DEV;
  //     const baseUrl = isDev ? '/' : (import.meta.env.BASE_URL || '/');
  //     const resumePath = `${baseUrl}resume.pdf`.replace(/\/\//g, '/');
  //     
  //     const response = await fetch(resumePath);
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch resume: ${response.status} ${response.statusText}`);
  //     }
  //     
  //     const blob = await response.blob();
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = 'Abhishek_Arunkumar_Resume.pdf';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //     setMenuOpen(false);
  //   } catch (error) {
  //     console.error('Error downloading resume:', error);
  //     // Fallback: try direct download link
  //     const isDev = import.meta.env.DEV;
  //     const baseUrl = isDev ? '/' : (import.meta.env.BASE_URL || '/');
  //     const resumePath = `${baseUrl}resume.pdf`.replace(/\/\//g, '/');
  //     
  //     const link = document.createElement('a');
  //     link.href = resumePath;
  //     link.download = 'Abhishek_Arunkumar_Resume.pdf';
  //     link.target = '_blank';
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     setMenuOpen(false);
  //   }
  // };

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full z-40 flex flex-col items-center justify-center backdrop-blur-lg
                     transition-all duration-300 ease-in-out ${
                       isDark 
                         ? 'bg-[rgba(10,10,10,0.95)]' 
                         : 'bg-[rgba(255,255,255,0.95)]'
                     }
                     ${
                       menuOpen
                         ? "h-screen opacity-100 pointer-events-auto"
                         : "h-0 opacity-0 pointer-events-none"
                     }
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className={`absolute top-6 right-6 text-4xl focus:outline-none cursor-pointer transition-all duration-300 hover:scale-110 hover:rotate-90 ${
          isDark ? 'text-white hover:text-sky-400' : 'text-gray-900 hover:text-sky-600'
        }`}
        aria-label="Close Menu"
      >
        &times;
      </button>

      <nav className="flex flex-col items-center space-y-6">
        {menuItems.map((item, index) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleNavClick(e, item.id)}
            className={`text-3xl font-semibold transform transition-all duration-300 hover:scale-110 hover:text-sky-500 ${
              isDark ? 'text-white' : 'text-gray-900'
            }
            ${
              menuOpen
                ? `opacity-100 translate-y-0`
                : "opacity-0 translate-y-8"
            }`}
            style={{
              transitionDelay: menuOpen ? `${index * 100}ms` : '0ms'
            }}
          >
            {item.label}
          </a>
        ))}
        
        {/* Resume Download Button for Mobile - Commented out for now */}
        {/* <button
          onClick={handleResumeDownload}
          className={`group relative flex items-center space-x-3 px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 overflow-hidden ${
            isDark
              ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_10px_30px_rgba(14,165,233,0.4)]'
              : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_10px_30px_rgba(14,165,233,0.5)]'
          }
          ${
            menuOpen
              ? `opacity-100 translate-y-0`
              : "opacity-0 translate-y-8"
          }`}
          style={{
            transitionDelay: menuOpen ? `${menuItems.length * 100}ms` : '0ms'
          }}
          aria-label="Download Resume"
        >
          <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="relative z-10">Download Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button> */}
      </nav>
    </div>
  );
};