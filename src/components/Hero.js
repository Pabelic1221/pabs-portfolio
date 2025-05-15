import React from 'react';
import { motion } from 'framer-motion';

function Hero({ isDarkMode, accentColor }) {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-10" id="hero">
      <motion.div
        className="max-w-3xl"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.p 
          className={`${accentColor} transition-colors duration-300`}
          variants={itemVariants}
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          className={`text-5xl font-bold mt-2 ${isDarkMode ? 'text-lightest-slate' : 'text-gray-900'} transition-colors duration-300`}
          variants={itemVariants}
        >
          Jushua Pabelic.
        </motion.h1>
        <motion.h2 
          className={`text-5xl font-bold mt-2 ${isDarkMode ? 'text-slate' : 'text-gray-600'} transition-colors duration-300`}
          variants={itemVariants}
        >
          I build things for the web.
        </motion.h2>
        <motion.p 
          className={`text-base mt-6 ${isDarkMode ? 'text-slate' : 'text-gray-600'} transition-colors duration-300`}
          variants={itemVariants}
        >
          I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I'm focused on building accessibility as an Intern at Apollotech.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default Hero;
