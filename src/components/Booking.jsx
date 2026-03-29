import React from "react";

export default function Booking() {
  return (
    <section className="bg-white px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Image block */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="beach"
            className="w-full rounded-2xl object-cover shadow-2xl aspect-[4/3]"
          />

          <div className="absolute bottom-4 left-4 rounded-2xl bg-white p-4 shadow-xl sm:bottom-6 sm:left-6 sm:p-5">
            <h2 className="text-xl font-bold text-blue-800 sm:text-2xl">20% OFF</h2>
            <p className="mt-1 text-sm leading-snug text-gray-500">
              Till 28 September
              <br />
              2026.
            </p>
          </div>
        </div>

        {/* Content block */}
        <div className="w-full">
          <p className="text-sm leading-6 text-gray-500">
            TRAVELING IS A WONDERFUL WAY TO EXPLORE NEW PLACES.
            <br />
            LEARN ABOUT DIFFERENT CULTURES
          </p>

          <h2 className="mt-3 text-3xl font-black leading-tight text-gray-900 lg:text-5xl">
            UNLEASH
            <br />
            WANDERLUST
            <br />
            WITH
            <br />
            SKWEING&apos;S
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Traveling Is A Wonderful Way To Explore New Places.
          </p>

          <div className="mt-5 flex items-center justify-between gap-4 rounded-2xl bg-gray-100 p-4 shadow-xl">
            <h3 className="text-base font-semibold text-gray-900 sm:text-lg">
              Book A Flight Now
            </h3>

            <button
              type="button"
              aria-label="Book a flight now"
              className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-black text-white transition hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-7 w-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}