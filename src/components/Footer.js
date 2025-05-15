import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className="py-8 px-10">
      <div className="max-w-7xl mx-auto">
        <p className={`text-center text-base ${isDarkMode ? 'text-slate' : 'text-gray-400'}`}>
          © 2025 Jushua Pabelic. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;