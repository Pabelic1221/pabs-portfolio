import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen text-white flex items-center justify-center px-10">
      <div className="max-w-3xl">
        <p className="text-teal-400 text-base">Hi, my name is</p>
        <h1 className="text-5xl font-bold text-white mt-2">Jushua Pabelic.</h1>
        <h2 className="text-5xl font-bold text-gray-400 mt-2">I build things for the web.</h2>
        <p className="text-gray-400 text-base mt-6">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at Upstatement.
        </p>
        <a
          href="#work"
          className="mt-8 inline-block px-6 py-3 border border-teal-400 text-teal-400 rounded hover:bg-teal-400 hover:text-gray-900 transition-colors"
        >
          Check out my course!
        </a>
      </div>
    </section>
  );
}

export default Hero;