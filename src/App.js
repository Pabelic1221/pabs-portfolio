import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';
import EmailSidebar from './components/EmailSidebar';
import Achieves from './components/Awards';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return React.createElement(
    'div',
    { className: 'bg-navy text-white min-h-screen relative' },

    // Sticky Sidebars
    React.createElement(SocialSidebar),
    React.createElement(EmailSidebar),

    // Main content
    React.createElement(
      'div',
      { className: 'ml-16' },
      React.createElement(Navbar),
      React.createElement(Hero),
      React.createElement(About),
      React.createElement(Projects),
      React.createElement(Awards),
      React.createElement(Contact),
      React.createElement(Footer)
    )
  );
}

export default App;
