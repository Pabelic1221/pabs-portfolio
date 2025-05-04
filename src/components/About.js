import React from 'react';

function About() {
  const technologies = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'WordPress',
  ];

  return (
    <section id="about" className="py-16 bg-navy text-white px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-green mb-8">
          <span className="text-green mr-2">01.</span> About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Text Content */}
          <div className="space-y-4">
            <p className="text-slate text-base">
              Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
            </p>
            <p className="text-slate text-base">
              Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
            </p>
            <p className="text-slate text-base">
              I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
            </p>
            <p className="text-slate text-base">
              Here are a few technologies I’ve been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 text-slate text-base">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green mr-2">◆</span> {tech}
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column: Image Placeholder */}
          <div className="relative">
            <div className="w-full h-96 bg-light-navy rounded-lg flex items-center justify-center border-2 border-green">
              <span className="text-slate text-base">Image Placeholder (Replace with actual image)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;