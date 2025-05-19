import React, { memo } from 'react';
import profileImage from '../assets/Images/IMG_0103 2x2.jpg';
import { aboutContent } from '../config/content';

const About = memo(({ isDarkMode, accentColor }) => {
  const { introduction, experience, recentWork, technologies } = aboutContent;

  return (
    <section id="about" className="py-16" aria-labelledby="about-title">
      <div className="max-w-5xl mx-auto px-6">
        <h2 
          id="about-title"
          className={`text-3xl font-semibold mb-8 ${isDarkMode ? 'text-lightest-slate' : 'text-gray-900'}`}
        >
          <span className={accentColor}></span>
          About Me
        </h2>

        <div className="mx-4 md:mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                {introduction}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                {experience}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                {recentWork}
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                Here are a few technologies I've been working with recently:
              </p>
              <ul 
                className="grid grid-cols-2 gap-2 mt-4"
                aria-label="Technologies I work with"
              >
                {technologies.map((tech, index) => (
                  <li 
                    key={index} 
                    className={`flex items-center`}
                  >
                    <span className={`${accentColor} mr-2 text-[10px]`} aria-hidden="true">◆</span>
                    <span className={`${isDarkMode ? 'text-green' : 'text-pink-400'} text-[11px] font-sfmono`}>{tech}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="relative group"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="relative max-w-[300px] mx-auto">
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <img
                    src={profileImage}
                    alt="Jushua Pabelic"
                    className="rounded-lg relative z-10 w-full transition-all duration-300"
                    loading="lazy"
                  />
                  <div 
                    className={`absolute inset-0 rounded-lg mix-blend-multiply transition-all duration-300 ${
                      isDarkMode 
                        ? 'bg-green/50 group-hover:bg-opacity-0' 
                        : 'bg-pink-400/50 group-hover:bg-opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </div>

                <div 
                  className={`absolute top-4 left-4 w-full h-full rounded-lg border-2 -z-10 transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-green group-hover:translate-x-2 group-hover:translate-y-2' 
                      : 'border-gray-400 group-hover:translate-x-2 group-hover:translate-y-2'
                  }`}
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = 'About';

export default About;
