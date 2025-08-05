import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import { useTheme } from "../../App";

export const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Enhanced Background with Theme Support */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900/40 via-black to-slate-800/40' 
          : 'bg-gradient-to-br from-blue-50/60 via-white to-purple-50/60'
      }`}></div>
      
      {/* Matte Background Effect */}
      <div className={`absolute inset-0 ${
        isDark 
          ? 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]' 
          : 'bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]'
      }`}></div>
      
      {/* Animated background elements */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${
            isDark ? 'rgba(59, 130, 246, 0.15)' : 'rgba(59, 130, 246, 0.1)'
          }, transparent 40%)`,
          transition: 'all 0.3s ease-out'
        }}
      ></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full animate-pulse ${
              isDark ? 'bg-blue-400/40' : 'bg-blue-500/30'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>
      
      <RevealOnScroll>
        <div className="text-center z-10 px-4 max-w-4xl mx-auto relative">
          {/* Professional greeting with enhanced animations */}
          <div className="mb-6 transform transition-all duration-500 hover:scale-105">
            <p className={`text-lg font-medium mb-2 animate-fade-in ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            }`}>Hey, I'm</p>
            <h1 
              className={`text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 bg-clip-text text-transparent leading-tight hover:scale-105 transition-transform duration-300 ${
                isDark ? '' : 'drop-shadow-lg'
              }`}
              style={{
                textShadow: isHovering ? `0 0 30px ${isDark ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.2)'}` : 'none',
                transition: 'all 0.3s ease'
              }}
            >
              Abhishek Arunkumar
            </h1>
            <h2 
              className={`text-2xl md:text-3xl font-semibold mb-6 transition-colors duration-300 ${
                isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
              }`}
              style={{
                transform: isHovering ? 'translateY(-2px)' : 'translateY(0)',
                transition: 'all 0.3s ease'
              }}
            >
              Software Engineer
            </h2>
          </div>

          {/* Value proposition with enhanced styling */}
          <p className={`text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed transition-colors duration-300 ${
            isDark ? 'text-gray-300 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}>
            I craft efficient, scalable web applications that deliver exceptional user experiences. 
            With expertise in both frontend and backend development, I build solutions that drive 
            measurable business impact and user satisfaction.
          </p>

          {/* Enhanced call to action buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 px-8 rounded-lg font-semibold transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.4)] hover:scale-105 relative overflow-hidden"
              style={{
                transform: isHovering ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="#contact"
              className={`group border-2 py-4 px-8 rounded-lg font-semibold transition-all duration-300 
             hover:-translate-y-2 hover:scale-105 relative overflow-hidden ${
               isDark 
                 ? 'border-blue-500/50 text-blue-400 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-400' 
                 : 'border-blue-600/50 text-blue-600 hover:shadow-[0_20px_40px_rgba(59,130,246,0.2)] hover:bg-blue-500/10 hover:border-blue-600'
             }`}
              style={{
                transform: isHovering ? 'scale(1.02)' : 'scale(1)',
                transition: 'all 0.3s ease'
              }}
            >
              <span className="relative z-10">Let's Connect</span>
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                isDark ? 'bg-blue-500/5' : 'bg-blue-500/10'
              }`}></div>
            </a>
          </div>

          {/* Enhanced social media links */}
          <div className="flex justify-center items-center space-x-6">
            {[
              {
                href: "https://github.com/Abhishek0025",
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                )
              },
              {
                href: "https://linkedin.com/in/abhishek-arunkumar",
                icon: (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                )
              },
              {
                href: "mailto:abhishek.arunkumar@wisc.edu",
                icon: (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-all duration-300 hover:scale-125 hover:rotate-12 p-2 rounded-full group ${
                  isDark 
                    ? 'text-gray-400 hover:text-blue-400 hover:bg-blue-500/10' 
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-500/10'
                }`}
                style={{
                  transform: isHovering ? 'scale(1.1)' : 'scale(1)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="group-hover:animate-pulse">
                  {social.icon}
                </div>
              </a>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};