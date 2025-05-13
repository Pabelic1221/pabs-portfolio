import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(currentScrollPos < prevScrollPos || currentScrollPos === 0);
      setPrevScrollPos(currentScrollPos);
    };

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('theme', newTheme); // Save theme in localStorage

    // Apply theme to body
    if (newTheme === 'dark') {
      document.body.classList.add('bg-navy', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-navy', 'text-white');
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 flex items-center justify-between backdrop-blur-md transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      {/* Logo or Name Placeholder */}
      <div
        className={`text-xl font-bold cursor-pointer ${
          isDarkMode ? 'text-teal-400' : 'text-pink-400'
        }`}
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
            className={`${
              isDarkMode ? 'text-gray-400' : 'text-pink-400'
            } hover:${isDarkMode ? 'text-teal-400' : 'text-pink-500'} transition-colors`}
          >
            {`0${index + 1}. ${item}`}
          </a>
        ))}
        <a
          href="#resume"
          className="ml-4 px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition-colors"
        >
          Resume
        </a>
      </div>

      {/* Hamburger for Mobile */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-teal-400 focus:outline-none"
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
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`absolute top-full left-0 w-full p-6 flex flex-col space-y-4 md:hidden transform transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? 'opacity-100 translate-y-0 visible'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
        }`}
      >
        {['About', 'Achievements', 'Projects', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={`${
              isDarkMode ? 'text-gray-300' : 'text-pink-300'
            } hover:${isDarkMode ? 'text-teal-400' : 'text-pink-400'} transition-colors`}
            onClick={() => setIsMenuOpen(false)}
          >
            {`0${index + 1}. ${item}`}
          </a>
        ))}
        <a
          href="#resume"
          className="mt-2 px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition-colors"
          onClick={() => setIsMenuOpen(false)}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
