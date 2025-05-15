import React from 'react';
import profileImage from '../assets/Images/IMG_0103 2x2.jpg';

function About({ isDarkMode, accentColor }) {
  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'WordPress',
  ];

  return (
    <section id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className={`text-3xl font-semibold mb-8 ${isDarkMode ? 'text-lightest-slate' : 'text-gray-900'}`}>
          <span className={accentColor}>01.</span>
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
                Hello! My name is Jushua and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
              </p>
              <p className={`text-sm ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                Here are a few technologies I've been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 mt-4">
                {technologies.map((tech, index) => (
                  <li key={index} className={`flex items-center ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
                    <span className={accentColor}>◆</span>
                    <span className="ml-2">{tech}</span>
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
                {/* Main image with overlay */}
                <div className="relative z-10 transition-transform duration-300 group-hover:-translate-x-2 group-hover:-translate-y-2">
                  <img
                    src={profileImage}
                    alt="Jushua Pabelic"
                    className="rounded-lg relative z-10 w-full transition-all duration-300"
                  />
                  <div className={`absolute inset-0 rounded-lg mix-blend-multiply transition-all duration-300 ${
                    isDarkMode 
                      ? 'bg-green/50 group-hover:bg-opacity-0' 
                      : 'bg-pink-400/50 group-hover:bg-opacity-0'
                  }`} />
                </div>

                {/* Background frame */}
                <div className={`absolute top-4 left-4 w-full h-full rounded-lg border-2 -z-10 transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-green group-hover:translate-x-2 group-hover:translate-y-2' 
                    : 'border-pink-400 group-hover:translate-x-2 group-hover:translate-y-2'
                }`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
