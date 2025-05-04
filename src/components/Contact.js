import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 text-white px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-400">Contact Me</h2>
        <p className="mt-4 text-gray-400 text-base">
          Feel free to reach out to me for collaborations or just to chat!
        </p>
        <div className="mt-6 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-gray-800 text-white rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-gray-800 text-white rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 bg-gray-800 text-white rounded-lg h-32"
          />
          <button
            type="button"
            className="px-6 py-2 bg-teal-400 rounded-lg hover:bg-teal-500 transition-colors"
          >
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;