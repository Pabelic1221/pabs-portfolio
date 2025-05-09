import React from 'react';

function Contact() {
  return (
    <section
      id="contact"
      className="py-32 px-6 text-center text-light-slate"
    >
      <p className="text-green text-sm font-mono mb-4">04. What’s Next?</p>
      <h2 className="text-4xl font-bold text-lightest-slate mb-6">
        Get In Touch
      </h2>
      <p className="mb-12 max-w-xl mx-auto text-base text-slate-400 leading-relaxed">
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>
      <a
        href="mailto:youremail@example.com"
        className="inline-block border border-green text-green px-6 py-3 rounded-md font-mono text-sm hover:bg-green hover:bg-opacity-10 transition"
      >
        Say Hello
      </a>
    </section>
  );
}

export default Contact;
