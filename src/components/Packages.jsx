import React from "react";

export default function Packages() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-gray-900 lg:text-5xl">
            Discover The World From Above
          </h2>
          <p className="mt-3 text-sm text-gray-500 lg:text-base">
            Traveling Is A Wonderful Way To Explore New Places. Learn About
            Different Cultures.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
                alt="Various destinations"
                className="h-full w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <svg
                  className="h-8 w-8 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 20l-6 3V4l6-3 6 3 6-3v19l-6 3-6-3z" />
                  <path d="M9 3v17" />
                  <path d="M15 6v17" />
                </svg>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900">
                Various Destinations
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Traveling Is A Wonderful Way To Explore New Places. Learn About
                Different Cultures.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
                alt="Easy booking"
                className="h-full w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <svg
                  className="h-9 w-9 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L3 7l9 5 9-5-9-5z" />
                  <path d="M3 7v10l9 5 9-5V7" />
                  <path d="M12 12v10" />
                </svg>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900">
                Easy Booking
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Plan your trip with ease and enjoy a smooth booking process from
                start to finish.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div className="w-full aspect-[4/3] overflow-hidden">
              <img
                src="https://cdn.pixabay.com/photo/2017/08/05/22/46/notebook-2586328_1280.jpg"
                alt="Secure payment"
                className="h-full w-full object-cover transition duration-300 hover:scale-110"
              />
            </div>

            <div className="p-5">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                <svg
                  className="h-9 w-9 text-blue-700"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="6" width="18" height="12" rx="2" />
                  <path d="M3 10h18" />
                </svg>
              </div>

              <h3 className="text-xl font-extrabold text-gray-900">
                Secure Payment
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                Travel confidently with safe and reliable payment options for
                every booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}