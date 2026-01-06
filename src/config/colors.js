// Color Theme Configuration
// Easy to switch between different color schemes

export const colorThemes = {
  // Option 1: Ocean Deep (Recommended) - Professional & Modern
  ocean: {
    primary: '#0ea5e9',      // Sky Blue
    secondary: '#06b6d4',    // Cyan
    accent: '#22d3ee',       // Light Cyan
    gradient: 'from-sky-500 via-cyan-500 to-cyan-400',
    gradientText: 'from-sky-500 via-cyan-400 to-cyan-300',
    hover: 'hover:text-sky-400',
    bgGradient: 'from-sky-900/40 via-black to-cyan-900/40',
    lightBgGradient: 'from-sky-50/60 via-white to-cyan-50/60',
    glow: 'rgba(6, 182, 212, 0.25)',
    lightGlow: 'rgba(6, 182, 212, 0.15)',
    shadow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    border: 'border-sky-500/50',
    bgAccent: 'bg-sky-500/10',
    textAccent: 'text-sky-400',
    buttonGradient: 'from-sky-500 to-cyan-500',
    cursorGlow: {
      main: 'rgba(14, 165, 233, 0.25)',
      secondary: 'rgba(6, 182, 212, 0.2)',
      tertiary: 'rgba(34, 211, 238, 0.15)',
      purple: 'rgba(147, 51, 234, 0.12)',
      cyan: 'rgba(6, 182, 212, 0.12)'
    }
  },

  // Option 2: Sunset Vibes - Creative & Energetic
  sunset: {
    primary: '#f97316',
    secondary: '#ec4899',
    accent: '#a855f7',
    gradient: 'from-orange-500 via-pink-500 to-purple-500',
    gradientText: 'from-orange-400 via-pink-400 to-purple-400',
    hover: 'hover:text-orange-400',
    bgGradient: 'from-orange-900/40 via-black to-purple-900/40',
    lightBgGradient: 'from-orange-50/60 via-white to-pink-50/60',
    glow: 'rgba(236, 72, 153, 0.25)',
    lightGlow: 'rgba(236, 72, 153, 0.15)',
    shadow: 'shadow-[0_0_30px_rgba(236,72,153,0.3)]',
    border: 'border-orange-500/50',
    bgAccent: 'bg-orange-500/10',
    textAccent: 'text-orange-400',
    buttonGradient: 'from-orange-500 to-pink-500',
    cursorGlow: {
      main: 'rgba(249, 115, 22, 0.25)',
      secondary: 'rgba(236, 72, 153, 0.2)',
      tertiary: 'rgba(168, 85, 247, 0.15)',
      purple: 'rgba(168, 85, 247, 0.12)',
      cyan: 'rgba(236, 72, 153, 0.12)'
    }
  },

  // Option 3: Forest Fresh - Fresh & Balanced
  forest: {
    primary: '#10b981',
    secondary: '#14b8a6',
    accent: '#06b6d4',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500',
    gradientText: 'from-emerald-400 via-teal-400 to-cyan-400',
    hover: 'hover:text-emerald-400',
    bgGradient: 'from-emerald-900/40 via-black to-teal-900/40',
    lightBgGradient: 'from-emerald-50/60 via-white to-teal-50/60',
    glow: 'rgba(20, 184, 166, 0.25)',
    lightGlow: 'rgba(20, 184, 166, 0.15)',
    shadow: 'shadow-[0_0_30px_rgba(20,184,166,0.3)]',
    border: 'border-emerald-500/50',
    bgAccent: 'bg-emerald-500/10',
    textAccent: 'text-emerald-400',
    buttonGradient: 'from-emerald-500 to-teal-500',
    cursorGlow: {
      main: 'rgba(16, 185, 129, 0.25)',
      secondary: 'rgba(20, 184, 166, 0.2)',
      tertiary: 'rgba(6, 182, 212, 0.15)',
      purple: 'rgba(147, 51, 234, 0.12)',
      cyan: 'rgba(6, 182, 212, 0.12)'
    }
  },

  // Option 4: Royal Purple - Premium & Sophisticated
  royal: {
    primary: '#6366f1',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    gradient: 'from-indigo-500 via-purple-500 to-pink-500',
    gradientText: 'from-indigo-400 via-purple-400 to-pink-400',
    hover: 'hover:text-indigo-400',
    bgGradient: 'from-indigo-900/40 via-black to-purple-900/40',
    lightBgGradient: 'from-indigo-50/60 via-white to-purple-50/60',
    glow: 'rgba(139, 92, 246, 0.25)',
    lightGlow: 'rgba(139, 92, 246, 0.15)',
    shadow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    border: 'border-indigo-500/50',
    bgAccent: 'bg-indigo-500/10',
    textAccent: 'text-indigo-400',
    buttonGradient: 'from-indigo-500 to-purple-500',
    cursorGlow: {
      main: 'rgba(99, 102, 241, 0.25)',
      secondary: 'rgba(139, 92, 246, 0.2)',
      tertiary: 'rgba(236, 72, 153, 0.15)',
      purple: 'rgba(139, 92, 246, 0.12)',
      cyan: 'rgba(236, 72, 153, 0.12)'
    }
  },

  // Option 5: Minimalist Blue - Clean & Trustworthy
  minimalist: {
    primary: '#3b82f6',
    secondary: '#60a5fa',
    accent: '#93c5fd',
    gradient: 'from-blue-600 via-blue-500 to-blue-400',
    gradientText: 'from-blue-500 via-blue-400 to-blue-300',
    hover: 'hover:text-blue-400',
    bgGradient: 'from-blue-900/40 via-black to-blue-800/40',
    lightBgGradient: 'from-blue-50/60 via-white to-blue-50/60',
    glow: 'rgba(59, 130, 246, 0.25)',
    lightGlow: 'rgba(59, 130,246, 0.15)',
    shadow: 'shadow-[0_0_30px_rgba(59,130,246,0.3)]',
    border: 'border-blue-500/50',
    bgAccent: 'bg-blue-500/10',
    textAccent: 'text-blue-400',
    buttonGradient: 'from-blue-500 to-blue-400',
    cursorGlow: {
      main: 'rgba(59, 130, 246, 0.25)',
      secondary: 'rgba(96, 165, 250, 0.2)',
      tertiary: 'rgba(147, 197, 253, 0.15)',
      purple: 'rgba(147, 51, 234, 0.12)',
      cyan: 'rgba(96, 165, 250, 0.12)'
    }
  }
};

// Current theme - Change this to switch themes: 'ocean', 'sunset', 'forest', 'royal', 'minimalist'
export const currentTheme = colorThemes.ocean;

