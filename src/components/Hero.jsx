import React from "react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-28">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 lg:grid-cols-2">
        
        {/* Text */}
        <div className="order-2 space-y-6 lg:order-1">
          <div className="flex items-center gap-3">
            <span className="inline-block h-2 w-10 rounded-full bg-blue-500"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">
              Elevate Your Travel Journey
            </span>
          </div>

          <h1 className="text-4xl font-black leading-tight text-gray-900 lg:text-6xl">
            Experience the Magic of Flight!
          </h1>

          <p className="text-sm text-gray-500 max-w-md">
            Discover unforgettable destinations and seamless travel experiences
            designed just for you.
          </p>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
            <button className="rounded-lg bg-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700">
              Book a Trip Now
            </button>

            <button className="flex items-center gap-3 text-sm font-semibold text-gray-700 hover:text-blue-600">
              <span className="flex h-12 w-12 items-center justify-center rounded-full border">
                ▶
              </span>
              Watch Intro
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 w-full lg:order-2">
          <img
            src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg"
            alt="Airplane"
            className="h-[300px] w-full rounded-3xl object-cover shadow-2xl lg:h-[500px]"
          />
        </div>
      </div>
    </section>
  );
}