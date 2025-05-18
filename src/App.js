import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load components that are not immediately visible
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const AllProjects = lazy(() => import('./components/AllProjects'));
const Awards = lazy(() => import('./components/Awards'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));
const SocialSidebar = lazy(() => import('./components/SocialSidebar'));
const EmailSidebar = lazy(() => import('./components/EmailSidebar'));

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  useEffect(() => {
    // Initialize AOS once
    AOS.init({ 
      duration: 800, 
      once: true,
      disable: 'mobile' 
    });
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

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  const commonProps = {
    isDarkMode,
    accentColor: isDarkMode ? 'text-green' : 'text-pink-400',
    hoverAccentColor: isDarkMode ? 'hover:text-green' : 'hover:text-pink-500',
  };

  return (
    <Router>
      <div className="min-h-screen relative transition-colors duration-300">
        <SEO />
        <Suspense fallback={<LoadingSpinner />}>
          <SocialSidebar {...commonProps} />
          <EmailSidebar {...commonProps} />
          
          <div className="ml-16 mr-16">
            <Navbar toggleTheme={toggleTheme} {...commonProps} />
            <Routes>
              <Route 
                path="/" 
                element={
                  <>
                    <Hero {...commonProps} />
                    <About {...commonProps} />
                    <Awards {...commonProps} />
                    <Projects {...commonProps} />
                    <Contact {...commonProps} />
                    <Footer {...commonProps} />
                  </>
                } 
              />
              <Route 
                path="/all-projects" 
                element={<AllProjects {...commonProps} />} 
              />
            </Routes>
          </div>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
