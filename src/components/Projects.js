import React from 'react';

function Projects() {
  const projectList = [
    { name: 'Project 1', description: 'A description of project 1.' },
    { name: 'Project 2', description: 'A description of project 2.' },
  ];

  return (
    <section id="work" className="py-16 bg-gray-900 text-white px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-400">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {projectList.map((project, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-teal-400">{project.name}</h3>
              <p className="mt-2 text-gray-400">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;