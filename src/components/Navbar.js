import React, { useState, useEffect } from 'react';

function Navbar({ toggleTheme, isDarkMode, accentColor, hoverAccentColor }) {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex items-center justify-between backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isDarkMode ? 'shadow-lg shadow-navy/50' : 'shadow-lg shadow-gray-200/50'}`}
    >
      {/* Logo */}
      <div
        className={`text-xl font-bold cursor-pointer ${accentColor}`}
        onClick={toggleTheme}
      >
        Pabs
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {['About', 'Achievements', 'Projects', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} ${hoverAccentColor} transition-colors`}
          >
            <span className={accentColor}>{`0${index + 1}. `}</span>
            {item}
          </a>
        ))}
        <a
          href="#resume"
          className={`ml-4 px-4 py-2 border ${isDarkMode ? 'border-green text-green hover:bg-green/10' : 'border-pink-400 text-pink-400 hover:bg-pink-400/10'} rounded transition-colors`}
        >
          Resume
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`md:hidden ${accentColor} focus:outline-none`}
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
        {['About', 'Achievements', 'Projects', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} ${hoverAccentColor} transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            <span className={accentColor}>{`0${index + 1}. `}</span>
            {item}
          </a>
        ))}
        <a
          href="#resume"
          className={`mt-2 px-4 py-2 border ${
            isDarkMode
              ? 'border-green text-green hover:bg-green/10'
              : 'border-pink-400 text-pink-400 hover:bg-pink-400/10'
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
