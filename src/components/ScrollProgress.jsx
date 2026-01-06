import { useState, useEffect } from 'react';
import { useTheme } from '../App';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = (window.scrollY / windowHeight) * 100;
          setScrollProgress(scrolled);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className="fixed top-0 left-0 right-0 h-1 z-50 transition-opacity duration-300"
      style={{ opacity: scrollProgress > 5 ? 1 : 0 }}
    >
      <div 
        className={`h-full bg-gradient-to-r from-sky-500 via-cyan-400 to-cyan-300 transition-all duration-150 ${
          theme === 'dark' ? 'shadow-[0_0_10px_rgba(14,165,233,0.5)]' : ''
        }`}
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
};
