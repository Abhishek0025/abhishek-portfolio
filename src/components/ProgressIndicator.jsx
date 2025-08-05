import { useState, useEffect } from 'react';

export const ProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
            }`}
          >
            <span className="absolute right-full mr-3 px-2 py-1 text-xs bg-gray-900 text-white rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.label}
            </span>
            <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeSection === section.id ? 'bg-white' : 'bg-gray-400'
            }`} />
          </button>
        ))}
      </div>
    </div>
  );
}; 