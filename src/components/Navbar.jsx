import react from "react";

export default function Navbar () {
    return (
        <nav className="fixed top-0 left-0 z-50 w-full bg-white-90 backdrop-blur-md border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <div>for logo</div>
                    <span className="font-bold text-lg text-blue-500 tracking-wider">Travel - Bete</span>
                </div>

                <div className="flex items-center gap-10 text-sm font-semibold text-grey-500">
                    <a href="#" className="hover:text-blue-900">Home</a>
                    <a href="#" className="hover:text-blue-900">About Us</a>
                    <a href="#" className="hover:text-blue-900">Packages</a>
                    <a href="#" className="hover:text-blue-900">Tour</a>
                    <a href="#" className="hover:text-blue-900">Contact Us</a>
                </div>

                <div>
                    <button className="px-6 py-3 bg-blue-500 text-white rounded-lg text-sm font-bold hover:shadow-md hover:scale-105 transition-all duration-300">Book Trip</button>
                </div>
            </div>
        </nav>
    );
}