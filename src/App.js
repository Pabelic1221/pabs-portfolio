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
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Initialize AOS for components that still use it
    AOS.init({ 
      duration: 800, 
      once: true,
      disable: 'mobile' 
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  useEffect(() => {
    // Apply theme classes with transition
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.documentElement.classList.toggle('light', !isDarkMode);
    
    // Update body classes with transition
    document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
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
    localStorage.setItem('theme', newTheme);
  };

  const commonProps = {
    isDarkMode,
    accentColor: isDarkMode ? 'text-green' : 'text-pink-400',
    hoverAccentColor: isDarkMode ? 'hover:text-green' : 'hover:text-pink-500',
  };

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      <SocialSidebar {...commonProps} />
      <EmailSidebar {...commonProps} />
      
      <div className="ml-16 mr-16">
        <Navbar toggleTheme={toggleTheme} {...commonProps} />
        <Hero {...commonProps} />
        <About {...commonProps} />
        <Awards {...commonProps} />
        <Projects {...commonProps} />
        <Contact {...commonProps} />
        <Footer {...commonProps} />
      </div>
    </div>
  );
}

export default App;
