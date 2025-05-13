import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import social icons from react-icons

function SocialSidebar() {
  return (
    <div className="fixed bottom-0 left-10 h-auto flex flex-col items-center justify-end py-6 px-2 bg-navy z-50">
      <div className="flex flex-col space-y-6 mb-6">
        <a 
          href="https://www.facebook.com/pabelicjush1221" 
          className="text-slate hover:text-green transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaFacebookF className="text-xl" />
        </a>
        <a 
          href="https://x.com/PabelicJushua" 
          className="text-slate hover:text-green transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-xl" />
        </a>
        <a 
          href="https://www.instagram.com/pabszxx/" 
          className="text-slate hover:text-green transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-xl" />
        </a>
        <a 
          href="https://www.linkedin.com/in/jushua-pabelic-6b1bb3262/" 
          className="text-slate hover:text-green transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="text-xl" />
        </a>
        <a 
          href="https://github.com/Pabelic1221" 
          className="text-slate hover:text-green transition-colors" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className="text-xl" />
        </a>
      </div>
      <div className="w-px h-24 bg-lightest-slate"></div>
    </div>
  );
}

export default SocialSidebar;
