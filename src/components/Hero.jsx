import react from "react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 overflow-hidden bg-white min-h-85vh flex items-center flex flex-col md:flex-row">
            <div className="max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center gap-12 relative order-2 md:order-1">
                <div className="lg:w-1/2 space-y-8 z-10">
                    <div>
                        <span className="w-12 h-7 p-2 bg-blue-500"></span>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-500">Elevate Your Travel Journey</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1]">Experience <br/>
                        the Magic of <br/>
                        Flight!
                    </h1>

                    <div className="flex items-center gap-4 pt-4">
                        <button className="px-8 py-4 bg-blue-500 rounded-lg font-semibold text-sm hover:bg-blue-700 transition-all duration-300 text-white">Book a Trip Now</button>
                        <button>▶️</button>
                    </div>
                </div>

                


            </div>

            <div className="lg:w-1/2 relative w-full order-1 md:order-2">
                <img src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="landing plane" className="w-full h-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl"/>
            </div>
        </section>
    );
}