import React from 'react';

const Awards = () => {
  return (
    <section id="awards" className="p-8 bg-gray-900">
      <h2 className="text-4xl font-bold text-white mb-8">&lt;awards&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="w-full h-64 bg-gray-700 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">[Image Placeholder]</p>
          </div>
          <h3 className="text-2xl font-semibold text-white">The Best Site Of The Day For Weather Conditions</h3>
          <ul className="text-gray-400 list-disc list-inside">
            <li>Social environment</li>
            <li>Web App</li>
            <li>Secure Programming</li>
          </ul>
          <p className="text-gray-400 italic">
            In metus disquiat eu lorem fermentum. Fusce maximus massa ut arcu placerat metus placerat quis.
            Integer porta porta eros. Nunc nec eros nec eros nec eros.
          </p>
          <p className="text-white font-semibold">Ellie Watson</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">The Best For The April 2015</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">The Best For The June 2017</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">The Best For The January 2018</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="bg-gray-700 p-4 rounded-lg">
            <h4 className="text-lg font-semibold text-white">The Best For The June 2018</h4>
            <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;