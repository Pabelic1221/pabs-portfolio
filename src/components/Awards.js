import React from 'react';

function Awards() {
  const awardList = ['Award 1', 'Award 2', 'Award 3'];

  return (
    <section className="py-16 text-white px-10 bg-light-navy" id="awards">
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl font-semibold text-green"
          data-aos="fade-up"
        >
          Awards
        </h2>
        <ul className="mt-6 space-y-4">
          {awardList.map((award, index) => (
            <li
              key={index}
              className="text-light-slate text-base"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)} // staggered animation
            >
              {award}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Awards;
