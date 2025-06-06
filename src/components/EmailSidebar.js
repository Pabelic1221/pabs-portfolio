import React from 'react';

const EmailSidebar = ({ isDarkMode, hoverAccentColor }) => {
  return (
    <div className="fixed bottom-5 right-[35px] h-auto items-center justify-end z-50">
      <div className="flex items-center transform rotate-90 origin-bottom-right">
        <div className="mr-6">
          <a
            href="mailto:jushuapabelic@gmail.com"
            className={`font-sfmono ${isDarkMode ? 'text-slate' : 'text-gray-400'} ${hoverAccentColor} transition-colors text-sm tracking-widest`}
          >
            pabelicjush@gmail.com
          </a>
        </div>
        <div className={`w-24 h-px ${isDarkMode ? 'bg-lightest-slate' : 'bg-gray-300'}`}></div>
      </div>
    </div>
  );
};

export default EmailSidebar;
