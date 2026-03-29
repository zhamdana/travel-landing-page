import React, { useEffect, useState } from "react";
import logo from "../assets/aeroplane.svg";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Packages", href: "#" },
  { name: "Tour", href: "#" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="flex shrink-0 items-center gap-2">
          <img
            src={logo}
            alt="Airline Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="text-base font-bold tracking-wider text-blue-500 sm:text-lg">
            Travel - Beta
          </span>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-6 text-sm font-semibold text-gray-600 md:flex lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-blue-900"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop button */}
        <button className="hidden rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 hover:shadow-md md:block">
          Book Trip
        </button>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white shadow-md transition-all duration-300 md:hidden ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-4 py-4 text-sm font-semibold text-gray-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-md px-2 py-3 transition hover:bg-gray-50 hover:text-blue-900"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}

          <button className="mt-3 rounded-lg bg-blue-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-600 hover:shadow-md">
            Book Trip
          </button>
        </div>
      </div>
    </nav>
  );
}