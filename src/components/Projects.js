import React, { useEffect } from 'react';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';

function Projects() {
  const projectList = [
    {
      title: 'Integrating Algolia Search with WordPress Multisite',
      description: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
      tech: ['Algolia', 'WordPress', 'PHP'],
      link: '#',
      github: '#',
    },
    {
      title: 'Time to Have More Fun',
      description: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase'],
      link: '#',
      github: '#',
    },
    {
      title: 'Building a Headless Mobile App CMS From Scratch',
      description: 'Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement',
      tech: ['Node', 'Express', 'Firebase', 'Vue'],
      link: '#',
      github: '#',
    },
    {
      title: 'OctoProfile',
      description: 'A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.',
      tech: ['Next.js', 'Chart.js', 'GitHub API'],
      link: '#',
      github: '#',
    },
    {
      title: 'Google Keep Clone',
      description: 'A simple Google Keep clone built with Vue and Firebase.',
      tech: ['Vue', 'Firebase'],
      link: '#',
      github: '#',
    },
    {
      title: 'Apple Music Embeddable Web Player Widget',
      description: 'Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.',
      tech: ['MusicKit.js', 'JS', 'SCSS'],
      link: '#',
      github: '#',
    },
  ];

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation happens once
      easing: 'ease-out', // Smooth easing
    });
  }, []);

  return (
    <section id="projects" className="py-20 px-6 bg-dark-navy text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-lightest-slate mb-3">Other Noteworthy Projects</h2>
        <p className="text-center text-green text-sm mb-12 cursor-pointer hover:underline">view the archive</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              data-aos="fade-up" // AOS animation effect
              className="bg-light-navy p-6 rounded-md shadow-md transform transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg flex flex-col justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ opacity: { duration: 1 } }} // Duration of fade-in
            >
              <div className="flex items-center justify-between mb-4">
                <FaFolderOpen className="text-green text-2xl" />
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
                    <FaGithub />
                  </a>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-slate hover:text-green transition-colors">
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-lightest-slate mb-2">{project.title}</h3>
              <p className="text-sm text-slate mb-4">{project.description}</p>

              <ul className="flex flex-wrap gap-2 mt-auto text-xs text-slate">
                {project.tech.map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
