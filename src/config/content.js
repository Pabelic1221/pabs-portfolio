import award1Image from '../assets/Images/CCI_000088.jpg';
import award2Image from '../assets/Images/CCI_000084.jpg';

import introCip from '../assets/Images/introduction_to_cip.png';
import roadshow from '../assets/Images/Jushua pabelic Roadshow Certificate of Participation.pdf';
import operatingSystems from '../assets/Images/Operating_Systems_Basics_certificate_pabelicjush-gmail-com_9380fc60-6ba9-4a1e-a5dc-e3ac103bbf55 (1).pdf';
import udemyCert from '../assets/Images/UC-9267a626-45c6-44a3-a862-43426f493da1.pdf';

import { FaTools, FaCode, FaBug } from 'react-icons/fa';
import { MdHealthAndSafety } from 'react-icons/md';

export const aboutContent = {
  introduction: "I'm Jushua, a tech professional with a strong passion for creating digital solutions. My journey started in 2017 with web development, and since then I've grown into a full-stack developer with hands-on experience in IT support, DevOps, and government health systems.",
  experience: "I have worked as an IT Technical Support Specialist, a Fullstack Developer for capstone research projects, and a DevOps Intern at Apollotech Software Corporation — where I gained hands-on experience with Docker, Kubernetes, and cloud-based deployment workflows.",
  recentWork: "Currently, I'm working as a Software Engineer at the City Health Insurance Department in Cagayan de Oro, building the City Health Information System (CHIS) for the Yakap Program under PhilHealth — a system designed to streamline health data management and improve access to healthcare services.",
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

// 🏆 Awards Content
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

// 📜 Certificates Content
export const certificates = [
  {
    id: 1,
    title: 'Introduction to Critical Infrastructure Protection',
    issuer: 'CISA',
    date: 'Jun 2026', 
    type: 'image',
    src: introCip,
    tags: ['Cybersecurity', 'Infrastructure'],
  },
  {
    id: 2,
    title: 'Roadshow Certificate of Participation',
    issuer: 'Synctactics',
    date: 'Jan 2023',
    type: 'pdf',
    src: roadshow,
    tags: ['Participation', 'Event'],
  },
  {
    id: 3,
    title: 'Operating Systems Basics',
    issuer: 'Coursera',
    date: 'Jun 2026  12 Hours',
    type: 'pdf',
    src: operatingSystems,
    tags: ['OS', 'Fundamentals'],
  },
  {
    id: 4,
    title: 'Udemy Certificate of Completion',
    issuer: 'Udemy',
    date: 'Jun 2026',
    type: 'pdf',
    src: udemyCert,
    tags: ['Online Course'],
  },
];

// ✅ Experiences
export const experiences = [
  {
    title: "Software Engineer",
    company: "City Health Insurance Department, Cagayan de Oro",
    duration: "2025 - Present",
    description:
      "Currently developing the City Health Information System (CHIS) for the Yakap Program under PhilHealth. The system supports health data management and streamlines healthcare processes for the City Health Office, improving access to health services for Cagayan de Oro residents.",
    icon: MdHealthAndSafety,
  },
  {
    title: "IT Technical Support Specialist",
    company: "Freelance",
    duration: "2020 - Present",
    description:
      "Provided technical support, troubleshooting, PC assembly, maintenance, and system reformatting for clients. Installed software including Microsoft Office tools, Windows OS, and other essential applications.",
    icon: FaTools,
  },
  {
    title: "Fullstack Developer",
    company: "Freelance",
    duration: "2023 - 2025",
    description:
      "Designed UI/UX and developed both front-end and back-end system for capstone research projects.",
    icon: FaCode,
  },
  {
    title: "DevOps Intern",
    company: "Apollotech Software Solutions",
    duration: "Feb - May 2025",
    description:
      "Gained hands-on experience with Docker and Kubernetes during my internship at Apolllotech Software Corporation, which enhanced my understanding of modern development workflows and deployment practices.",
    icon: FaBug,
  },
];