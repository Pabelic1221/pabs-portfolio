import React from 'react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-10 bg-background" id="hero">
      <div className="max-w-3xl" data-aos="fade-up" data-aos-duration="1000">
        <p className="text-green" data-aos="fade-up" data-aos-delay="100">
          Hi, my name is
        </p>
        <h1 className="text-5xl font-bold mt-2" data-aos="fade-up" data-aos-delay="200">
          Jushua Pabelic.
        </h1>
        <h2 className="text-5xl font-bold mt-2" data-aos="fade-up" data-aos-delay="300">
          I build things for the web.
        </h2>
        <p className="text-base mt-6" data-aos="fade-up" data-aos-delay="400">
          I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          Currently, I’m focused on building accessibility as an Intern at Apollotech.
        </p>
      </div>
    </section>
  );
}

export default Hero;
