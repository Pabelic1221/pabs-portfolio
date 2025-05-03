import React from 'react';

function Awards() {
  return (
    <section className="py-16 bg-gray-900 text-white px-10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold text-teal-400">Awards</h2>
        <ul className="mt-6 space-y-4">
          {['Award 1', 'Award 2', 'Award 3'].map((award, index) => (
            <li key={index} className="text-gray-400 text-base">{award}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;