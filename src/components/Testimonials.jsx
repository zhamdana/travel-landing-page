import React from "react";

export default function Testimonials() {
  return (
    <section className="px-4 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black text-gray-900 lg:text-5xl">
            Loved By Thousand Travelers
          </h2>
          <p className="mt-3 text-sm text-gray-500 lg:text-base">
            Experience real stories from satisfied travelers who discovered their perfect journeys with us
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <p className="text-gray-500 text-sm leading-7">
              ⭐⭐⭐⭐⭐ <br />
              "I recently returned from my vacation in Africa, all thanks to this incredible travel agency. Since I started using their services, my travel experience has been far less stressful and completely hassle-free.Their quality is outstanding, and I would happily use them again. I highly recommend them to anyone."
            </p>

            <hr className="my-5 border-gray-200" />

            <div className="flex items-center gap-3">
              <img
                src="https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop"
                alt="Sandra Wu"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Sandra Wu</h3>
                <p className="text-sm text-gray-500">Architect</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl bg-blue-500 p-6 shadow-xl text-white">
            <p className="text-sm leading-7">
              ⭐⭐⭐⭐⭐ <br />
              "I recently returned from my vacation in Africa, all thanks to this incredible travel agency. Since I started using their services, my travel experience has been far less stressful and completely hassle-free. Their quality is outstanding, and I would happily use them again. I highly recommend them to anyone."
            </p>

            <hr className="my-5 border-white/30" />

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=3087&auto=format&fit=crop"
                alt="Jonathan Fluckr"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Jonathan Fluckr</h3>
                <p className="text-sm text-white/80">Architect</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl bg-white p-6 shadow-xl">
            <p className="text-gray-500 text-sm leading-7">
              ⭐⭐⭐⭐⭐ <br />
              "I recently returned from my vacation in Africa, all thanks to this incredible travel agency. Since I started using their services, my travel experience has been far less stressful and completely hassle-free. Their quality is outstanding, and I would happily use them again. I highly recommend them to anyone."
            </p>

            <hr className="my-5 border-gray-200" />

            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?q=80&w=687&auto=format&fit=crop"
                alt="Ruth Bellese"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold">Ruth Bellese</h3>
                <p className="text-sm text-gray-500">Architect</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}