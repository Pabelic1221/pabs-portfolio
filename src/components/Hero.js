import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col md:flex-row items-center justify-between p-8 bg-gray-900 min-h-screen">
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-5xl font-bold text-white">
          &lt;b&gt;Hello&lt;/b&gt;<br />
          I'm Max, Back-end<br />
          Web Developer
        </h1>
        <p className="text-gray-400">
          A passionate hypergiant company which creates efficient and<br />
          suitable. The central have the spirits & client have awesome look
        </p>
        <button className="bg-teal-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-teal-500">
          Scroll Down Now
        </button>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0">
        <div className="w-full h-96 bg-gray-700 flex items-center justify-center rounded-lg">
          <p className="text-gray-400">[Profile Image Placeholder]</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;