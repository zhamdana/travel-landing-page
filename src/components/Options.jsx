import React from "react";

export default function Options() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-gray-900 lg:text-5xl">
            Journey To The Skies Made Simple!
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-500 lg:text-base">
            Traveling Is A Wonderful Way To Explore New Places. Learn About
            Different Cultures And Gain Unique Experiences
          </p>
        </div>

        {/* FLEX container */}
        <div className="flex flex-col gap-6 lg:flex-row">

          {/* Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl w-full lg:flex-1 aspect-[4/3]">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
              alt="Find your destination"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0"></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <svg className="mb-3 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.69 2 6 4.69 6 8c0 4.5 6 12 6 12s6-7.5 6-12c0-3.31-2.69-6-6-6zm0 8.5A2.5 2.5 0 1 1 12 5a2.5 2.5 0 0 1 0 5.5z" />
              </svg>
              <p className="text-lg font-bold lg:text-xl">
                Find Your Destination
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl w-full lg:flex-1 aspect-[4/3]">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
              alt="Book a ticket"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0"></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <svg className="mb-3 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z" />
              </svg>
              <p className="text-lg font-bold lg:text-xl">
                Book A Ticket
              </p>
            </div>
          </div>

          {/* Card */}
          <div className="group relative overflow-hidden rounded-2xl shadow-xl w-full lg:flex-1 aspect-[4/3]">
            <img
              src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
              alt="Play and journey"
              className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
            />

            <div className="absolute inset-0"></div>

            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center text-white px-4">
              <svg className="mb-3 h-10 w-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="text-lg font-bold lg:text-xl">
                Play &amp; Journey
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}