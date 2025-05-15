import React from 'react';

function Contact({ isDarkMode, accentColor }) {
  return (
    <section
      id="contact"
      className="py-32 px-6 text-center"
    >
      <p className={`${accentColor} text-sm font-mono mb-4`}>04. What's Next?</p>
      <h2 className={`text-4xl font-bold mb-6 ${isDarkMode ? 'text-lightest-slate' : 'text-gray-900'}`}>
        Get In Touch
      </h2>
      <p className={`mb-12 max-w-xl mx-auto text-base leading-relaxed ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
        Although I'm not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a
        href="mailto:pabelicjush@gmail.com"
        className={`inline-block px-6 py-3 rounded-md font-mono text-sm transition-colors ${
          isDarkMode 
            ? 'border border-green text-green hover:bg-green/10' 
            : 'border border-pink-400 text-pink-400 hover:bg-pink-400/10'
        }`}
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
