import React from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-16 right-0 text-white z-50 py-4 px-6 flex justify-end items-center">
      <div className="space-x-6">
        {['About', 'Experience', 'Work', 'Contact'].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="text-gray-400 hover:text-teal-400 transition-colors"
          >
            {`0${index + 1}. ${item}`}
          </a>
        ))}
        <a
          href="#resume"
          className="ml-6 px-4 py-2 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition-colors"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}

export default Navbar;