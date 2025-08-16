import React, { useState } from "react";
import Modal from "./Modal";
import { experiences } from "../Content"; // import from content.js

function Experience({ isDarkMode, accentColor }) {
  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <section className="py-32 px-6 sm:px-12 scroll-mt-20" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className={`${accentColor} text-lg font-sfmono mb-4`}>Experience</h2>

        {experiences.map((exp, index) => {
          const Icon = exp.icon; // dynamic icon component
          return (
            <div
              key={index}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-8 mb-12`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left Column (Clickable Block with Dynamic Icon) */}
              <div className="md:w-1/2">
                <div
                  className={`w-full h-64 rounded-md overflow-hidden cursor-pointer flex items-center justify-center text-center p-6 ${
                    isDarkMode
                      ? "shadow-lg shadow-navy/50 bg-navy-light"
                      : "shadow-lg shadow-gray-200/50 bg-gray-100"
                  }`}
                  onClick={() => setSelectedExp(exp)}
                >
                  <Icon className={`${accentColor} text-5xl`} />
                </div>
              </div>

              {/* Right Column (Details) */}
              <div className="md:w-1/2">
                <p className={`${accentColor} text-sm font-sfmono mb-2`}>
                  Professional Role
                </p>
                <h3
                  className={`text-2xl font-semibold mb-4 flex items-center gap-2 font-sfmono ${
                    isDarkMode ? "text-lightest-slate" : "text-gray-900"
                  }`}
                >
                  <Icon className={accentColor} /> {exp.title}
                </h3>

                {/* Company & Duration */}
                <ul className="text-xs font-sfmono mb-4">
                  <li
                    className={
                      isDarkMode ? "text-slate-400" : "text-gray-500"
                    }
                  >
                    <strong>Company:</strong> {exp.company}
                  </li>
                  <li
                    className={
                      isDarkMode ? "text-slate-400" : "text-gray-500"
                    }
                  >
                    <strong>Duration:</strong> {exp.duration}
                  </li>
                </ul>

                {/* Description */}
                <p
                  className={`text-sm mb-4 ${
                    isDarkMode ? "text-light-slate" : "text-gray-600"
                  }`}
                >
                  {exp.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal for Expanded Experience */}
      <Modal
        isOpen={selectedExp !== null}
        onClose={() => setSelectedExp(null)}
        award={selectedExp} // reuse modal by passing exp data
        isDarkMode={isDarkMode}
        accentColor={accentColor}
      />
    </section>
  );
}

export default Experience;
