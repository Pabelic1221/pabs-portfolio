import React from 'react';
import { FaTrophy } from 'react-icons/fa';
import award1Image from '../assets/Images/CCI_000088.jpg';
import award2Image from '../assets/Images/CCI_000084.jpg';

function Awards({ isDarkMode, accentColor }) {
  const awards = [
    {
      title: 'Digital Solution Showcase',
      description:
        'Participated and showcased innovative mobile application solutions at the Digital Solution Showcase event, demonstrating technical expertise in React Native mobile development and creative problem-solving abilities in cross-platform mobile applications.',
      tech: ['React Native', 'Mobile Development', 'Cross-Platform', 'UI/UX Design'],
      date: 'November 20, 2024',
      location: 'University of Science and Technology of Southern Philippines (USTP), Cagayan de Oro City',
      image: award1Image,
    },
    {
      title: '2nd Place - Pitching Competition',
      description:
        'Awarded 2nd place in the Pitching Competition during the CDO b.i.t.e.s & Synctactics Pink Roadshow Event, showcasing exceptional presentation skills and innovative business solutions.',
      tech: ['Business Pitch', 'Innovation', 'Entrepreneurship', 'Tech Solutions'],
      date: 'January 21, 2023',
      location: 'Synctactics, RAMI Corporate Building Corner Tiano, Mabini St. Cagayan de Oro City',
      image: award2Image,
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${accentColor} text-lg font-sfmono mb-4`}>03. Notable Achievements</h2>
        
        {awards.map((award, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              index % 2 !== 0 ? 'md:flex-row-reverse' : ''
            } items-center gap-8 mb-12`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="md:w-1/2">
              <div className={`w-full h-64 rounded-md overflow-hidden ${
                isDarkMode 
                  ? 'shadow-lg shadow-navy/50' 
                  : 'shadow-lg shadow-gray-200/50'
              }`}>
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <p className={`${accentColor} text-sm font-sfmono mb-2`}>Featured Achievement</p>
              <h3 className={`text-2xl font-semibold mb-4 flex items-center gap-2 font-sfmono ${
                isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
              }`}>
                <FaTrophy className={accentColor} /> {award.title}
              </h3>
              <div className={`p-5 rounded-md text-sm mb-4 ${
                isDarkMode 
                  ? 'text-light-slate border border-slate' 
                  : 'text-gray-600 border border-gray-200'
              }`}>
                {award.description}
              </div>
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-sfmono mb-4">
                {award.tech.map((item, i) => (
                  <li key={i} className={isDarkMode ? 'text-slate-400' : 'text-gray-500'}>
                    {item}
                  </li>
                ))}
              </ul>
              <div className={`text-xs ${isDarkMode ? 'text-light-slate' : 'text-gray-600'}`}>
                <p className="italic mb-1">Date: {award.date}</p>
                <p className="italic">Location: {award.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
