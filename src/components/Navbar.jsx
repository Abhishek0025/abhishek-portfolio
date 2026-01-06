import { useEffect, useState } from "react";
import { useTheme } from "../App";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['home', 'about', 'projects', 'contact'];
          const scrollPosition = window.scrollY + 150;

          for (const section of sections) {
            const element = document.getElementById(section);
            if (element) {
              const { offsetTop, offsetHeight } = element;
              if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                setActiveSection(section);
                break;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMenuOpen(false);
    }
  };

  // Resume download handler - commented out for now
  // const handleResumeDownload = (e) => {
  //   // Let the browser handle the download naturally
  //   // The download attribute on the <a> tag will handle it
  //   // This ensures compatibility across all browsers
  // };

  return (
    <nav       className={`fixed top-0 w-full z-40 backdrop-blur-md border-b shadow-lg transition-all duration-300 ${
        theme === 'dark'
          ? 'bg-[rgba(10,10,10,0.9)] border-white/10'
          : 'bg-[rgba(255,255,255,0.95)] border-gray-200/50'
      }`}>
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home')}
            className={`font-mono text-xl font-bold transition-colors duration-300 hover:scale-105 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}
          >
            Abhishek<span className="text-sky-500">.portfolio</span>
          </a>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                theme === 'dark' 
                  ? 'text-gray-300 hover:text-white hover:bg-white/10' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <button
              className={`relative w-8 h-8 flex flex-col justify-center items-center z-40 md:hidden transition-all duration-300 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}></span>
              <span className={`absolute w-6 h-0.5 bg-current transform transition-all duration-300 ${
                menuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
              }`}></span>
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'projects', label: 'Projects' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
                className={`relative transition-all duration-300 px-2 py-1 rounded ${
                  activeSection === item.id
                    ? theme === 'dark'
                      ? 'text-white font-semibold'
                      : 'text-gray-900 font-semibold'
                    : theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span className={`absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full ${
                    theme === 'dark' ? 'shadow-[0_0_8px_rgba(14,165,233,0.6)]' : ''
                  }`}></span>
                )}
              </a>
            ))}
            
            {/* Resume Download Button - Commented out for now */}
            {/* <a
              href="/resume.pdf"
              download="Abhishek_Arunkumar_Resume.pdf"
              onClick={(e) => {
                // Try programmatic download first, fallback to default behavior
                handleResumeDownload(e);
              }}
              className={`group relative flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_8px_20px_rgba(14,165,233,0.4)] border border-sky-400/30'
                  : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:shadow-[0_8px_20px_rgba(14,165,233,0.5)] border border-sky-400/40'
              }`}
              title="Download Resume PDF"
              aria-label="Download Resume"
            >
              <svg className="w-4 h-4 transition-all duration-300 group-hover:translate-y-[-2px] group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className={`absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ${
                theme === 'dark' ? 'bg-gradient-to-r from-transparent via-white/20 to-transparent' : 'bg-gradient-to-r from-transparent via-white/30 to-transparent'
              }`}></div>
            </a> */}
          </div>
        </div>
      </div>
    </nav>
  );
};