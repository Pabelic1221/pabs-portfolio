import React, { useState, useEffect } from 'react';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fetchGithubRepos } from '../utils/github';
import { Link } from 'react-router-dom';

function Projects({ isDarkMode, accentColor, hoverAccentColor }) {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGithubRepos('Pabelic1221'); // Replace with your GitHub username
        setRepos(githubRepos);
      } catch (err) {
        setError('Failed to load repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-20">
        <p className={`text-lg ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>{error}</p>
      </div>
    );
  }

  if (repos.length === 0) {
    return (
      <div className="text-center py-20">
        <p className={`text-lg ${isDarkMode ? 'text-slate' : 'text-gray-600'}`}>
          No repositories with specified languages found.
        </p>
      </div>
    );
  }

  return (
    <section id="projects" className={`py-20 px-6 ${isDarkMode ? 'bg-dark-navy' : 'bg-white'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${
          isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
        }`}>
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {repos.slice(0, 6).map((project) => (
            <motion.div
              key={project.id}
              className={`p-6 rounded-md shadow-md transform transition-all duration-300 ease-in-out hover:-translate-y-2 ${
                isDarkMode 
                  ? 'bg-light-navy hover:shadow-lg hover:shadow-navy/50' 
                  : 'bg-white border border-gray-200 hover:border-gray-300 hover:shadow-xl hover:shadow-gray-200/50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center justify-between mb-4">
                <FaFolderOpen className={accentColor + ' text-2xl'} />
                <div className="flex space-x-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className={`${isDarkMode ? 'text-slate' : 'text-gray-400'} ${hoverAccentColor} transition-colors`}
                  >
                    <FaGithub />
                  </a>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${isDarkMode ? 'text-slate' : 'text-gray-400'} ${hoverAccentColor} transition-colors`}
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>

              <h3 className={`text-lg font-semibold mb-2 font-sfmono ${
                isDarkMode ? 'text-lightest-slate' : 'text-gray-900'
              }`}>
                {project.title}
              </h3>
              <p className={`text-sm mb-4 ${
                isDarkMode ? 'text-slate' : 'text-gray-600'
              }`}>
                {project.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  {project.language && (
                    <span className={`${isDarkMode ? 'text-slate' : 'text-gray-500'} ${hoverAccentColor} font-sfmono font-semibold text-[10px]`}>
                      {project.language}
                    </span>
                  )}
                  {project.tech.slice(0, 2).map((tech, i) => (
                    <span key={i} className={`${isDarkMode ? 'text-slate' : 'text-gray-500'} ${hoverAccentColor} text-[10px]`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  {project.stars > 0 && (
                    <span className="flex items-center space-x-1">
                      <FaStar className={accentColor} />
                      <span className={isDarkMode ? 'text-slate' : 'text-gray-600'}>{project.stars}</span>
                    </span>
                  )}
                  {project.forks > 0 && (
                    <span className="flex items-center space-x-1">
                      <FaCodeBranch className={accentColor} />
                      <span className={isDarkMode ? 'text-slate' : 'text-gray-600'}>{project.forks}</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <Link 
          to="/all-projects"
          className={`block text-center ${accentColor} text-sm font-sfmono hover:underline`}
        >
          View All Projects →
        </Link>
      </div>
    </section>
  );
}

export default Projects;
