
import { useState, createContext, useContext } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { ProgressIndicator } from './components/ProgressIndicator'
import { ScrollProgress } from './components/ScrollProgress'
import { BackToTop } from './components/BackToTop'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import "./index.css"

// Theme Context
export const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`min-h-screen transition-all duration-500 ${
        theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900 text-gray-100' 
          : 'bg-gradient-to-br from-sky-50 via-white to-cyan-50/30 text-gray-900'
      }`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#home"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-500 focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-300"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <ProgressIndicator />
        <BackToTop />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>        
    </ThemeContext.Provider>
  )
}

export default App
