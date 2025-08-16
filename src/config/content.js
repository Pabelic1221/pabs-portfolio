export const aboutContent = {
  introduction: "Hello! My name is Jushua and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try HTML and CSS.",
  experience: "I have been working as a junior web developer for 3 years now. I have worked with a variety of technologies and basic frameworks, but my favorite is React.",
  recentWork: "I also recently learned basic Kubernetes and Docker from my internship at a company called 'Apollotech Software Corporation'.",
  technologies: [
    'JavaScript',
    'MySQL',
    'Python',
    'Laravel',
    'WordPress',
    'MongoDB',
    'React',
    'Firebase',
    'Node.js',
    'Kubernetes',
    'Tailwind CSS',
    'Docker',
    
  ]
};

export const navLinks = [
  { name: 'About', path: '#about' },
  { name: 'Experience', path: '#experience' },
  { name: 'Work', path: '#work' },
  { name: 'Contact', path: '#contact' }
];

export const socialLinks = {
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  twitter: 'https://twitter.com/yourusername',
  email: 'your.email@example.com'
};

export const seoConfig = {
  title: 'Jushua Pabelic - Web Developer',
  description: 'Personal portfolio of Jushua Pabelic, a web developer specializing in building exceptional digital experiences.',
  keywords: 'web developer, frontend developer, react developer, javascript developer',
  ogImage: '/path-to-your-og-image.jpg',
  siteUrl: 'https://your-portfolio-url.com'
}; 

// 🏆 Awards Content moved here
export const awards = [
  {
    title: 'Digital Solution Showcase',
    description:
      'Participated and showcased innovative mobile application solutions at the Digital Solution Showcase event, demonstrating technical expertise in React Native mobile development and creative problem-solving abilities in cross-platform mobile applications.',
    tech: ['React Native', 'Mobile Development', 'Cross-Platform', 'UI/UX Design'],
    date: 'November 20, 2024',
    location: 'University of Science and Technology of Southern Philippines (USTP), Cagayan de Oro City',
    image: award1Image,
  },
  {
    title: '2nd Place - Pitching Competition',
    description:
      'Awarded 2nd place in the Pitching Competition during the CDO b.i.t.e.s & Synctactics Pink Roadshow Event, showcasing exceptional presentation skills and innovative business solutions.',
    tech: ['Business Pitch', 'Innovation', 'Entrepreneurship', 'Tech Solutions'],
    date: 'January 21, 2023',
    location: 'Synctactics, RAMI Corporate Building Corner Tiano, Mabini St. Cagayan de Oro City',
    image: award2Image,
  },
];

// ✅ Experiences moved here
export const experiences = [
  {
    title: "IT Support Specialist",
    company: "Freelance",
    duration: "2021 - 2024",
    description:
      "Provided technical support, troubleshooting, PC assembly, maintenance, and system reformatting for clients. Installed software including Microsoft Office tools, Windows OS, and other essential applications.",
    icon: FaTools,
  },
  {
    title: "Frontend Developer",
    company: "Freelance",
    duration: "2023 - 2025",
    description:
      "Designed UI/UX and developed responsive front-end systems for capstone research projects.",
    icon: FaCode,
  },
  {
    title: "Intern Devops Engineer",
    company: "Apollotech Software Solutions",
    duration: "Feb - May 2025",
    description:
      "Gained hands-on experience with Docker and Kubernetes during my internship at Apolllotech Software Corporation, which enhanced my understanding of modern development workflows and deployment practices.",
    icon: FaBug,
  },
];