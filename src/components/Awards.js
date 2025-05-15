import React from 'react';
import { FaTrophy } from 'react-icons/fa';

function Awards({ isDarkMode, accentColor }) {
  const awards = [
    {
      title: 'Outstanding Developer Award',
      description:
        'Awarded for exceptional contribution in building and maintaining high-quality code across multiple full-stack projects.',
      tech: ['React', 'Node.js', 'Firebase', 'Tailwind CSS'],
      date: 'December 2024',
    },
    {
      title: 'Top Innovator Recognition',
      description:
        'Recognized for leading innovative solutions that improved team productivity and user experience across the platform.',
      tech: ['AI Integration', 'UX Research', 'Agile Leadership'],
      date: 'August 2023',
    },
  ];

  return (
    <section className="py-20 px-6 sm:px-12" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${accentColor} text-lg font-mono mb-4`}>03. Notable Achievements</h2>
        
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
              <div className={`w-full h-64 rounded-md flex items-center justify-center border ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-600 text-slate-400' 
                  : 'bg-gray-100 border-gray-200 text-gray-400'
              }`}>
                Image Placeholder
              </div>
            </div>

            <div className="md:w-1/2">
              <p className={`${accentColor} text-sm font-mono mb-2`}>Featured Award</p>
              <h3 className={`text-2xl font-semibold mb-4 flex items-center gap-2 ${
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
              <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono mb-4">
                {award.tech.map((item, i) => (
                  <li key={i} className={isDarkMode ? 'text-slate-400' : 'text-gray-500'}>
                    {item}
                  </li>
                ))}
              </ul>
              <span className={`text-xs italic ${isDarkMode ? 'text-slate-500' : 'text-gray-400'}`}>
                Awarded: {award.date}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Awards;
