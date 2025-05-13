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
    <section id="about" className="py-16 bg-background text-foreground">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-green dark:text-pink-400 mb-8">
          <span className="text-green dark:text-pink-400 mr-2">01.</span>
          About Me
        </h2>

        {/* Unified content container with margins */}
        <div className="mx-4 md:mx-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Left Column: Text Content */}
            <div
              className="space-y-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p className="text-slate text-sm">
                Hello! My name is Jushua and I enjoy creating things that live on the internet. My interest in web development started back in 2017 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
              </p>
              <p className="text-slate text-sm">
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients.
              </p>
              <p className="text-slate text-sm">
                I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
              </p>
              <p className="text-slate text-sm">
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className="grid grid-cols-2 gap-2 text-slate text-sm">
                {technologies.map((tech, index) => (
                  <li key={index} className="flex items-center">
                    <span className="text-green mr-2">◆</span> {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Larger Square Image Placeholder */}
            <div
              className="relative"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="w-80 h-80 bg-light-navy rounded-lg flex items-center justify-center border-2 border-green mx-auto">
                <span className="text-slate text-xs text-center">
                  Image Placeholder
                  <br />
                  (Replace with actual image)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
