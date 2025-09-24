import React from "react";

const Started = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-pink-100/45">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-[url('./Images/bgImage.png')]"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white/90">
            Get started for Free
          </h1>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl text-white/80">
            See how we build $100K worth Demand Gen Departments:
          </p>

          {/* Video Card */}
          <div className="mt-8 sm:mt-10 lg:mt-12 rounded-2xl overflow-hidden border border-white/30 bg-white/10 backdrop-blur-sm shadow-2xl">
            <img
              className="w-full h-auto object-cover"
              src="https://global.divhunt.com/892d0aa9a3db619cf25505cff3733756_1560837.gif"
              alt="Demo video"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Started;