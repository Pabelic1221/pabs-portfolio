import React from 'react';

function Clients() {
  return (
    <section className="py-16 text-white px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-400">Clients</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-6">
          {['Client 1', 'Client 2', 'Client 3'].map((client, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg text-center">
              <p className="text-gray-400 text-base">{client}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;