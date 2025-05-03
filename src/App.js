import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Clients from './components/Clients';
import Awards from './components/Awards';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="bg-gray-900">
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Clients />
      <Awards />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;