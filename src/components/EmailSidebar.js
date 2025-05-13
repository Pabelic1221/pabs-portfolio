import React from 'react';

function EmailSidebar() {
  return (
    <div className="fixed bottom-5 right-[60px] h-auto items-center justify-end z-50">
      <div className="flex items-center transform rotate-90 origin-bottom-right">
        <div className="mr-6">
          <a
            href="mailto:pabelicjush@gmail.com"
            className="text-slate hover:text-green transition-colors text-sm tracking-widest"
          >
            pabelicjush@gmail.com
          </a>
        </div>
        <div className="w-24 h-px bg-lightest-slate"></div>
      </div>
    </div>
  );
}

export default EmailSidebar;
