import React from 'react';

function Modal({ isOpen, onClose, award, isDarkMode, accentColor }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className={`relative w-full max-w-4xl rounded-lg ${
          isDarkMode ? 'bg-navy' : 'bg-white'
        } p-6 shadow-xl`}
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className={`absolute top-4 left-4 p-2 rounded-full ${
            isDarkMode ? 'hover:bg-slate/20' : 'hover:bg-gray-100'
          } transition-colors`}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Modal content */}
        <div className="mt-8">
          <div className="w-full max-h-[60vh] rounded-lg overflow-hidden flex items-center justify-center">
            <img
              src={award.image}
              alt={award.title}
              className="w-auto h-auto max-h-[60vh] object-contain"
            />
          </div>

          <div className="space-y-4 mt-6">
            <h3 className={`text-2xl font-semibold ${isDarkMode ? 'text-lightest-slate' : 'text-gray-900'}`}>
              {award.title}
            </h3>

            <div className={`p-4 rounded-md ${
              isDarkMode 
                ? 'bg-slate/20 text-light-slate' 
                : 'bg-gray-50 text-gray-600'
            }`}>
              <p className="text-sm leading-relaxed">{award.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {award.tech.map((item, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-xs font-sfmono ${
                    isDarkMode 
                      ? 'bg-slate/20 text-slate-400' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {item}
                </span>
              ))}
            </div>

            <div className={`text-sm ${isDarkMode ? 'text-light-slate' : 'text-gray-600'}`}>
              <p className="mb-1">Date: {award.date}</p>
              <p>Location: {award.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal; 