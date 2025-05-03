import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="p-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-white mb-8">&lt;projects&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="w-full h-48 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-400">[Project Image Placeholder]</p>
          </div>
          <h3 className="text-xl font-semibold text-white">Mobile Shop</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="w-full h-48 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-400">[Project Image Placeholder]</p>
          </div>
          <h3 className="text-xl font-semibold text-white">Express API</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg">
          <div className="w-full h-48 bg-gray-600 rounded-lg mb-4 flex items-center justify-center">
            <p className="text-gray-400">[Project Image Placeholder]</p>
          </div>
          <h3 className="text-xl font-semibold text-white">Community</h3>
          <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;