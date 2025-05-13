import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';

function App() {
  // Set default theme to dark mode
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    // Check for saved theme in localStorage and default to dark mode if none exists
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // No theme saved, default to dark mode
      localStorage.setItem('theme', 'dark');
    }

    // Apply theme to body on load
    if (isDarkMode) {
      document.body.classList.add('bg-navy', 'text-white');
      document.body.classList.remove('bg-white', 'text-black');
    } else {
      document.body.classList.add('bg-white', 'text-black');
      document.body.classList.remove('bg-navy', 'text-white');
    }
  }, [isDarkMode]);

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

  return React.createElement(
    'div',
    { className: 'min-h-screen relative' },

    // Sticky Sidebars
    React.createElement(SocialSidebar),
    React.createElement(EmailSidebar),

    // Main content
    React.createElement(
      'div',
      { className: 'ml-16 mr-16' },
      React.createElement(Navbar, { toggleTheme }),  // Pass the toggleTheme to Navbar
      React.createElement(Hero),
      React.createElement(About),
      React.createElement(Awards),
      React.createElement(Projects),
      React.createElement(Contact),
      React.createElement(Footer)
    )
  );
}

export default App;
