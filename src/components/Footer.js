import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 p-4 flex justify-between items-center">
      <p>© 2025 Max, BRDG Developer. All rights reserved.</p>
      <div className="flex space-x-4">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;