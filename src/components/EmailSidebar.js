import React from 'react';

function EmailSidebar() {
  return (
    <div className="fixed bottom-0 right-10 h-auto flex flex-col items-center justify-end py-6 px-2 bg-navy z-50">
      <div className="mb-6 transform rotate-90 origin-bottom">
        <a
          href="mailto:yourname@example.com"
          className="text-slate hover:text-green transition-colors text-sm tracking-widest"
        >
          yourname@example.com
        </a>
      </div>
      <div className="w-px h-24 bg-lightest-slate"></div>
    </div>
  );
}

export default EmailSidebar;
