import React from 'react';

const Navbar = () => {
  const handleNavigation = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold text-teal-400">BRDG Developer</div>
      <div className="space-x-6 text-sm">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={() => handleNavigation('hero')} className="hover:text-teal-400">Home</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={() => handleNavigation('about')} className="hover:text-teal-400">About</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={() => handleNavigation('projects')} className="hover:text-teal-400">Projects</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={() => handleNavigation('clients')} className="hover:text-teal-400">Clients</button>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <button onClick={() => handleNavigation('contact')} className="hover:text-teal-400">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;