import React from "react";

const Offring = () => {
  return (
    <section id="services" className="w-full py-12 px-4 sm:px-6 lg:px-12 2xl:px-20">
      {/* Header */}
      <div className="px-2">
        <h2 className="text-xl sm:text-2xl text-gray-700">Our</h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-6xl font-bold text-[#423385] mt-2">
          Offerings
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 2xl:gap-10">
        {/* Left Card */}
        <div className="rounded-3xl bg-[#DAD1FF] flex flex-col justify-between">
          <div className="p-6 sm:p-8 lg:p-10 2xl:p-12 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
              Setup & Strategy
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-800">
              Upskill your revenue generation department
            </p>
            <button className="mt-4 px-6 py-2 bg-white border border-amber-600 text-base sm:text-lg lg:text-xl text-[#423385] underline rounded-lg w-fit">
              Training Pricing
            </button>
          </div>
          <img
            className="w-full h-40 sm:h-48 lg:h-56 2xl:h-64 object-cover rounded-b-3xl"
            src="./Images/bt-1.png"
            alt="Setup"
          />
        </div>

        {/* Right Card */}
        <div className="rounded-3xl bg-[#2A207B] flex flex-col justify-between">
          <div className="p-6 sm:p-8 lg:p-10 2xl:p-12 flex flex-col gap-4">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Outreach & Strategy
            </h3>
            <p className="text-lg sm:text-xl lg:text-2xl text-white">
              Setup system and build your team.
            </p>
            <button className="mt-4 px-6 py-2 bg-white border border-amber-600 text-base sm:text-lg lg:text-xl text-[#423385] underline rounded-lg w-fit">
              Agency Pricing
            </button>
          </div>
          <img
            className="w-full h-40 sm:h-48 lg:h-56 2xl:h-64 object-cover rounded-b-3xl"
            src="./Images/bt-1.png"
            alt="Outreach"
          />
        </div>
      </div>
    </section>
  );
};

export default Offring;
