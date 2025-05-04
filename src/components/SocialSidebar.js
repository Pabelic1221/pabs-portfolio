import React from 'react';

function SocialSidebar() {
  return (
    <div className="fixed bottom-0 left-0 h-auto flex flex-col items-center justify-end py-6 px-2 bg-navy z-50">
      <div className="flex flex-col space-y-6 mb-6">
        <a href="https://example.com/chat" className="text-slate hover:text-green transition-colors"><span className="text-xl">💬</span></a>
        <a href="https://example.com/photos" className="text-slate hover:text-green transition-colors"><span className="text-xl">📷</span></a>
        <a href="https://example.com/instagram" className="text-slate hover:text-green transition-colors"><span className="text-xl">📸</span></a>
        <a href="https://example.com/twitter" className="text-slate hover:text-green transition-colors"><span className="text-xl">🐦</span></a>
        <a href="https://example.com/linkedin" className="text-slate hover:text-green transition-colors"><span className="text-xl">in</span></a>
        <a href="https://example.com/cube" className="text-slate hover:text-green transition-colors"><span className="text-xl">🧊</span></a>
      </div>
      <div className="w-px h-24 bg-lightest-slate"></div>
    </div>
  );
}

export default SocialSidebar;