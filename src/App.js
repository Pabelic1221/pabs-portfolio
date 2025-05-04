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
import EmailSidebar from './components/EmailSidebar'; // 👈 Import EmailSidebar

function App() {
  return React.createElement(
    'div',
    { className: 'bg-navy text-white min-h-screen relative' },
    // Sticky Social Sidebar (Lower Left)
    React.createElement(SocialSidebar),
    React.createElement(EmailSidebar),

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
    
  );
}

export default App;
