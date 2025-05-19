import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <div className="flex gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-4 flex gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-medium hover:bg-gray-700 transition-colors"
          >
            GitHub
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 