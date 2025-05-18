import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className="py-6 text-center">
      <p className={`text-sm font-sfmono ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
        Built with ❤️ by Jushua Pabelic
      </p>
    </footer>
  );
}

export default Footer;