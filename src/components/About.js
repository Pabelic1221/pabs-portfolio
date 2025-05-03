import React from 'react';

const About = () => {
  return (
    <section id="about" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-white mb-8">&lt;about me&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="flex justify-between">
            <p className="text-gray-400">2013</p>
            <p className="text-gray-400">Junior Developer</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">2014</p>
            <p className="text-gray-400">Technical Intern</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">2015</p>
            <p className="text-gray-400">Senior Developer</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-400">2016</p>
            <p className="text-gray-400">Software Engineer</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">[Image Placeholder]</p>
          </div>
          <h3 className="text-2xl font-semibold text-white">Cooperation With International Clients</h3>
          <div className="flex space-x-4">
            <div>
              <p className="text-4xl font-bold text-teal-400">112</p>
              <p className="text-gray-400">International Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-teal-400">86</p>
              <p className="text-gray-400">Projects Done</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;