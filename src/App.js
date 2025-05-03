import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Awards from './components/Awards';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SocialSidebar from './components/SocialSidebar';

function App() {
  return React.createElement(
    'div',
    { className: 'bg-navy text-white min-h-screen relative' },
    // Sticky Social Sidebar (Lower Left)
    React.createElement(SocialSidebar),
    // Main Content
    React.createElement(
      'div',
      { className: 'ml-16' },
      React.createElement(Navbar),
      React.createElement(Hero),
      React.createElement(About),
      React.createElement(Projects),
      React.createElement(Awards),
      React.createElement(Clients),
      React.createElement(Contact),
      React.createElement(Footer)
    ),
    // Vertical Name on Right
    React.createElement(
      'div',
      { className: 'fixed right-0 top-1/2 transform -translate-y-1/2 writing-mode-vertical-rl text-slate text-xs rotate-180 origin-center' },
      'brittanychiang.com'
    )
  );
}

export default App;