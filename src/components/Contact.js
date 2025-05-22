import React from 'react';

function Contact({ isDarkMode, accentColor }) {
  return (
    <section
      id="contact"
      className="py-20 px-6 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <p className={`${accentColor} text-sm font-sfmono mb-4`}>What's Next?</p>
        <h2 className={`text-4xl font-bold mb-6 font-sfmono ${
          isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
        }`}>
          Get In Touch
        </h2>
        <p className={`mb-12 font-sfmono ${
          isDarkMode ? 'text-slate' : 'text-gray-600'
        }`}>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        <a
          href="mailto:jushuapabelic@gmail.com"
          className={`inline-block px-8 py-4 border-2 rounded font-sfmono shadow-md transition-all duration-300
            ${isDarkMode 
              ? 'border-green text-green hover:bg-green hover:text-navy' 
              : 'border-gray-400 text-gray-500 hover:bg-gray-900 hover:text-white'}
          `}
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}

export default Contact;
