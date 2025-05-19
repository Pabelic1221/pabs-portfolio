import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Import social icons from react-icons

function SocialSidebar({ isDarkMode, accentColor, hoverAccentColor }) {
  const socialLinks = [
    { icon: FaFacebookF, url: 'https://www.facebook.com/pabelicjush1221' },
    { icon: FaTwitter, url: 'https://x.com/PabelicJushua' },
    { icon: FaInstagram, url: 'https://www.instagram.com/pabszxx/' },
    { icon: FaLinkedinIn, url: 'https://www.linkedin.com/in/jushua-pabelic-6b1bb3262/' },
    { icon: FaGithub, url: 'https://github.com/Pabelic1221' },
  ];

  return (
    <div className="fixed bottom-0 left-6 h-auto flex flex-col items-center justify-end py-6 px-2 z-50">
      <div className="flex flex-col space-y-6 mb-6">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            className={`${isDarkMode ? 'text-slate' : 'text-gray-400'} ${hoverAccentColor} transition-colors`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <social.icon className="text-xl" />
          </a>
        ))}
      </div>
      <div className={`w-px h-24 ${isDarkMode ? 'bg-lightest-slate' : 'bg-gray-300'}`}></div>
    </div>
  );
}

export default SocialSidebar;
