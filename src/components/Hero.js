import React from 'react';
import { motion } from 'framer-motion';

function Hero({ isDarkMode, accentColor }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <p className={`${accentColor} font-sfmono mb-5`}>Hi, my name is</p>
        <h1 className={`text-5xl sm:text-7xl font-bold mb-4 ${
          isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
        }`}>
          Jushua Pabelic.
        </h1>
        <h2 className={`text-4xl sm:text-6xl font-bold mb-8 ${
          isDarkMode ? 'text-slate' : 'text-gray-600'
        }`}>
          I build things for the web.
        </h2>
        <p className={`max-w-xl text-lg mb-12 ${
          isDarkMode ? 'text-slate' : 'text-gray-600'
        }`}>
          I'm a software engineer specializing in building (and occasionally designing) 
          exceptional digital experiences. Currently, I'm focused on building accessible, 
          human-centered products.
        </p>
        <a
          href="#projects"
          className={`inline-block px-8 py-4 border-2 rounded font-sfmono shadow-md transition-all duration-300
            ${isDarkMode 
              ? 'border-green text-green hover:bg-green hover:text-navy' 
              : 'border-gray-400 text-gray-500 hover:bg-gray-900 hover:text-white'}
          `}
        >
          Check out my work!
        </a>
      </motion.div>
    </section>
  );
}

export default Hero;
