import React from 'react';
import { FaTrophy } from 'react-icons/fa';

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

function Awards() {
  return (
    <section className="py-20 px-6 sm:px-12 text-white" id="achievements">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-green text-lg font-mono mb-4">03. Notable Achievements</h2>
        <div className="space-y-20">
          {awards.map((award, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              } items-center gap-8`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="md:w-1/2">
                <div className="w-full h-64 bg-slate-800 rounded-md flex items-center justify-center text-slate-400 border border-slate-600">
                  Image Placeholder
                </div>
              </div>

              <div className="md:w-1/2">
                <p className="text-green text-sm font-mono mb-2">Featured Award</p>
                <h3 className="text-2xl font-semibold text-lightest-slate mb-4 flex items-center gap-2">
                  <FaTrophy className="text-green" /> {award.title}
                </h3>
                <div className="p-5 rounded-md text-sm text-light-slate border border-slate mb-4">
                  {award.description}
                </div>
                <ul className="flex flex-wrap gap-x-4 gap-y-2 text-xs font-mono text-slate-400 mb-4">
                  {award.tech.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <span className="text-xs text-slate-500 italic">Awarded: {award.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
