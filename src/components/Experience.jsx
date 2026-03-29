import React from 'react'

export default function Experience() {
    return (
        
        <section className="px-4 py-16 lg:px-8 lg:py-24">
            <div className="mx-auto flex max-w-6xl flex-col justify-between gap-20 px-8 lg:flex-row lg:items-center lg:px-20">
                
                {/* Left */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <img
                        src="https://images.unsplash.com/photo-1519046904884-53103b34b206"
                        alt="beach"
                        className="h-48 w-48 rounded-full object-cover shadow-xl lg:h-56 lg:w-56"
                    />
                    <h2 className="mt-8 max-w-md text-xl font-black leading-tight text-[#0f172a] lg:text-3xl">
                        EXPLORE THE SKIES WITH CONFIDENCE!
                    </h2>
                </div>

                {/* Right */}
                <div className="flex flex-col items-center lg:items-end">
                    
                    {/* Text first on desktop */}
                    <h2 className="mt-8 max-w-md text-xl font-black leading-tight text-[#0f172a] lg:text-right order-2 lg:order-1 lg:text-3xl">
                        DISCOVER THE WORLD ONE STEP AT A TIME
                    </h2>

                    {/* Image first on mobile */}
                    <img
                        src="https://images.unsplash.com/photo-1569949380643-6e746ecaa3bd"
                        alt="Eiffel Tower"
                        className="h-48 w-48 rounded-full object-cover shadow-xl order-1 lg:order-2 lg:h-56 lg:w-56"
                    />
                </div>

            </div>
        </section>
    )
}