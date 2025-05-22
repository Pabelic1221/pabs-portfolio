import React, { useState, useEffect } from 'react';
import { FaFolderOpen, FaExternalLinkAlt, FaGithub, FaStar, FaCodeBranch, FaSearch, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fetchGithubRepos } from '../utils/github';
import { useNavigate } from 'react-router-dom';

function AllProjects({ isDarkMode, accentColor, hoverAccentColor }) {
  const navigate = useNavigate();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [filteredRepos, setFilteredRepos] = useState([]);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const githubRepos = await fetchGithubRepos('Pabelic1221'); // Replace with your GitHub username
        setRepos(githubRepos);
        setFilteredRepos(githubRepos);
      } catch (err) {
        setError('Failed to load repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  useEffect(() => {
    let result = [...repos];

    // Apply search filter
    if (searchTerm) {
      result = result.filter(repo => 
        repo.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        repo.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (repo.language && repo.language.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Apply sorting
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      case 'oldest':
        result.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        break;
      case 'stars':
        result.sort((a, b) => b.stars - a.stars);
        break;
      case 'forks':
        result.sort((a, b) => b.forks - a.forks);
        break;
      default:
        break;
    }

    setFilteredRepos(result);
  }, [repos, searchTerm, sortBy]);

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

  return (
    <section className={`py-20 px-6 ${isDarkMode ? 'bg-dark-navy' : ''} min-h-screen`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate('/')}
            className={`${accentColor} hover:opacity-80 transition-all duration-300 p-2 rounded-full hover:-translate-x-1`}
            aria-label="Back to Home"
          >
            <FaArrowLeft size={24} />
          </button>
          <h1 className={`text-4xl font-bold text-center ${
            isDarkMode ? 'text-lightest-slate' : 'text-dark-navy'
          }`}>
            All Projects
          </h1>
          <div className="w-8"></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-64">
            <FaSearch className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-slate' : 'text-dark-navy/60'}`} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full pl-10 pr-4 py-2 rounded-md border-2 ${
                isDarkMode 
                  ? 'bg-light-navy text-slate focus:bg-lightest-navy border-gray-700' 
                  : 'bg-white text-dark-navy placeholder-dark-navy/50 border-gray-200'
              } focus:outline-none focus:border-green-500`}
            />
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className={`px-4 py-2 rounded-md ${
              isDarkMode 
                ? 'bg-light-navy text-slate focus:bg-lightest-navy' 
                : 'bg-white text-dark-navy'
            } border border-transparent focus:outline-none focus:border-green-500`}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="stars">Most Stars</option>
            <option value="forks">Most Forks</option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRepos.map((project) => (
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
                    className={`${isDarkMode ? 'text-slate' : 'text-dark-navy/70'} ${hoverAccentColor} transition-colors`}
                  >
                    <FaGithub />
                  </a>
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className={`${isDarkMode ? 'text-slate' : 'text-dark-navy/70'} ${hoverAccentColor} transition-colors`}
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
                  {project.tech.map((tech, i) => (
                    <span key={i} className={`${isDarkMode ? 'text-slate' : 'text-gray-500'} ${hoverAccentColor} text-[10px]`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col items-end space-y-1">
                  <span className={`text-xs ${isDarkMode ? 'text-slate' : 'text-gray-500'}`}>
                    {new Date(project.createdAt).toLocaleDateString()}
                  </span>
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
              </div>
            </motion.div>
          ))}
        </div>

        {filteredRepos.length === 0 && (
          <div className="text-center py-20">
            <p className={`text-lg ${isDarkMode ? 'text-slate' : 'text-dark-navy/80'}`}>
              No projects found matching your search criteria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default AllProjects; 