import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form data logged to console (form submission not allowed).');
    setFormData({ email: '', message: '' });
  };

  return (
    <section id="contact" className="p-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-white mb-8">&lt;hire me for the next projects&gt;</h2>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 space-y-4">
          <p className="text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin integer posuere sodales mi donec quam.
          </p>
        </div>
        <div className="md:w-1/2 mt-8 md:mt-0">
          <div className="bg-gray-700 p-6 rounded-lg">
            <div className="space-y-4">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full p-2 rounded-lg bg-gray-600 text-white placeholder-gray-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Text Here"
                className="w-full p-2 rounded-lg bg-gray-600 text-white placeholder-gray-400 h-32"
              ></textarea>
              <button
                onClick={handleSubmit}
                className="bg-teal-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-teal-500"
              >
                Send Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;