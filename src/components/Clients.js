import React from 'react';

const Clients = () => {
  return (
    <section id="clients" className="p-8 bg-gray-800">
      <h2 className="text-4xl font-bold text-white mb-8">&lt;clients&gt;</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">[Client Logo Placeholder]</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">[Client Logo Placeholder]</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">[Client Logo Placeholder]</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-lg flex items-center justify-center">
          <p className="text-gray-400">[Client Logo Placeholder]</p>
        </div>
      </div>
    </section>
  );
};

export default Clients;