import React, { useState } from "react";
import { Link } from "react-router";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black lg:bg-[#0F063C]">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 2xl:px-24">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              className="h-8 sm:h-10 lg:h-12 2xl:h-10 w-auto object-contain"
              src="./Images/logo.png"
              alt="Logo"
            />
          </div>

          {/* Desktop Nav – explicit <li> elements */}
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-white">
            <li>
              <a
                href="#home"
                className="relative text-base xl:text-lg font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative text-base xl:text-lg font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="relative text-base xl:text-lg font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative text-base xl:text-lg font-medium after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            aria-label="Open menu"
            onClick={() => setIsOpen(true)}
          >
            <svg
              className="w-6 h-6 sm:w-7 sm:h-7"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu – explicit <li> elements */}
      <div
        className={`fixed inset-0 bg-[#0F063C] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden z-50`}
      >
        <div className="flex flex-col items-center justify-center h-full relative">
          <button
            className="absolute top-6 right-6 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-7 h-7 sm:w-8 sm:h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <ul className="space-y-8 text-white text-2xl sm:text-3xl font-semibold">
            <li>
             
              <Link
                to={"/"}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 hover:text-gray-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-sm transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Nav;