import React, { useState } from 'react';

function Navbar({ toggleTheme, isDarkMode, accentColor, hoverAccentColor }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex items-center justify-between backdrop-blur-md ${
        isDarkMode ? 'shadow-lg shadow-navy/50' : 'shadow-lg shadow-gray-200/50'
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className={`text-xl font-bold font-sfmono ${accentColor}`}>
          Pabs
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-lg ${isDarkMode ? 'text-gray-400 hover:text-green' : 'text-gray-600 hover:text-pink-400'} transition-colors`}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-10 items-center">
        {['About', 'Achievements', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`font-sfmono ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${hoverAccentColor} transition-colors`}
          >
            {item}
          </a>
        ))}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`ml-4 px-4 py-2 border-2 font-sfmono ${isDarkMode ? 'border-green text-green hover:bg-green/10' : 'border-gray-300 text-pink-400 hover:bg-pink-400/10'} rounded transition-colors`}
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden ${accentColor} focus:outline-none`}
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 w-full p-6 ${
          isDarkMode ? 'bg-navy/95' : 'bg-white/95'
        } backdrop-blur-md flex flex-col space-y-4 md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        {['About', 'Achievements', 'Projects', 'Contact'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`font-sfmono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${hoverAccentColor} transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`mt-2 px-4 py-2 border-2 font-sfmono ${
            isDarkMode
              ? 'border-green text-green hover:bg-green/10'
              : 'border-gray-300 text-pink-400 hover:bg-pink-400/10'
          } rounded transition-colors text-center`}
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
