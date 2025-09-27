import React from "react";

const Footer = () => (
  <footer className="w-full bg-gradient-to-t from-[#3A3554] to-[#3E3473] px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 py-12 lg:py-16">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

      {/* Brand column */}
      <div className="lg:col-span-1 flex flex-col items-start">
        <img
          src="./Images/logo.png"
          alt="BizAmps Logo"
          className="h-10 sm:h-12 lg:h-14 w-auto object-contain"
        />
        <p className="mt-4 text-white text-lg sm:text-xl font-semibold">
          Your Business Amplifier
        </p>
        <p className="text-gray-300/70 text-sm sm:text-base">
          Demand Generates Power!
        </p>
      </div>

      {/* Connect column */}
      <div className="lg:col-span-1">
        <h3 className="text-xs uppercase tracking-wider text-gray-300/60 font-semibold mb-4">
          Connect
        </h3>
        <ul className="space-y-3 text-white">
          <li>
            <a
              href="https://linkedin.com/in/founder"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              Founder's LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/company/bizamps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              Company's LinkedIn
            </a>
          </li>
          <li>
            <a
              href="https://youtube.com/@bizamps"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors"
            >
              YouTube
            </a>
          </li>
        </ul>
      </div>

      {/* Services column */}
      <div className="lg:col-span-1">
        <h3 className="text-xs uppercase tracking-wider text-gray-300/60 font-semibold mb-4">
          Services
        </h3>
        <ul className="space-y-3 text-white">
          <li>
            <a
              href="#speaking"
              className="hover:text-amber-300 transition-colors"
            >
              Speaking
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-amber-300 transition-colors"
            >
              Pricing
            </a>
          </li>
        </ul>
      </div>

      {/* CTA / Copyright column */}
      <div className="lg:col-span-1 flex flex-col items-start lg:items-end justify-between text-white">
        <div className="mb-6 lg:mb-0">
          <p className="text-sm sm:text-base">
            Ready to amplify your pipeline?
          </p>
          <a
            href="#form"
            className="inline-block mt-2 px-5 py-2 rounded-full bg-amber-500 text-black font-semibold hover:bg-amber-400 transition"
          >
            Get in Touch
          </a>
        </div>

        <p className="text-xs text-gray-300/60 mt-6 lg:mt-0">
          © {new Date().getFullYear()} BizAmps. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;