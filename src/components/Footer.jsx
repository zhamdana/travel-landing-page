import React from "react";
import logo from "../assets/aeroplane.svg";

export default function Footer() {
    return (
        <section className="bg-[#0b1a2b] text-gray-300 px-4 py-10 lg:px-8">
            <footer className="bg-[#0b1a2b] text-gray-300 px-4 py-16 lg:px-8 lg:py-20">
                <div className="mx-auto max-w-7xl flex flex-col gap-10 lg:flex-row lg:justify-between">

                    {/* Left: Logo */}
                    <div className="max-w-md">
                    <div className="flex items-center gap-3">
                        <img src={logo} alt="Airline Logo" className="h-10 w-10" />
                        <span className="text-white font-bold text-xl tracking-wider">
                        Travels - Beta
                        </span>
                    </div>

                    <p className="mt-5 text-sm text-gray-400 leading-relaxed">
                        Experience the magic of flight and discover new destinations around the world
                    </p>

                    <div className="flex gap-3 mt-6">
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#13263f] hover:bg-blue-500 transition cursor-pointer">f</div>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#13263f] hover:bg-blue-500 transition cursor-pointer">🔔</div>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#13263f] hover:bg-blue-500 transition cursor-pointer">📷</div>
                        <div className="h-10 w-10 flex items-center justify-center rounded-full bg-[#13263f] hover:bg-blue-500 transition cursor-pointer">P</div>
                    </div>
                    </div>

                    {/* Right: Links (FORCED same row) */}
                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">

                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Careers</li>
                        <li className="hover:text-white cursor-pointer">Partners</li>
                        <li className="hover:text-white cursor-pointer">Blog</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Travel</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer">Flights</li>
                        <li className="hover:text-white cursor-pointer">Hotels</li>
                        <li className="hover:text-white cursor-pointer">North Africa</li>
                        <li className="hover:text-white cursor-pointer">Vacation Planner</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer">Travel Experts</li>
                        <li className="hover:text-white cursor-pointer">Travel Blog</li>
                        <li className="hover:text-white cursor-pointer">How To Help</li>
                        <li className="hover:text-white cursor-pointer">Help Center</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Extra Links</h3>
                        <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer">Customer Service</li>
                        <li className="hover:text-white cursor-pointer">Terms Of Use</li>
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Accessibility</li>
                        </ul>
                    </div>

                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Travels - Beta. All rights reserved.
                </div>
            </footer>
        </section>
  );
}