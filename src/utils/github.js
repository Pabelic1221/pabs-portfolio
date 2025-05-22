export const fetchGithubRepos = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&direction=desc&type=public`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    const repos = await response.json();
    
    // Filter out forked repositories and repos without a language
    const filteredRepos = repos.filter(repo => !repo.fork && repo.language);
    
    // Custom stacks for specific repositories
    const customStacks = {
      'pabs-portfolio': ['React', 'Tailwind CSS'],
      'carmedic-latest': ['React Native', 'Redux', 'Firebase'],
      'LOGIN-CITC-CONEXT': ['ReactJS', 'MongoDB'],
      // Add more custom stacks for other repositories as needed
    };
    
    return filteredRepos.map(repo => ({
      id: repo.id,
      title: repo.name,
      description: repo.description || 'No description available',
      tech: customStacks[repo.name] || repo.topics || [],
      link: repo.homepage || '',
      github: repo.html_url,
      createdAt: repo.created_at,
      language: repo.language,
      stars: repo.stargazers_count,
      forks: repo.forks_count
    }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
}; 