import React from "react";

const Skip = () => {
  return (
    <section className="w-full bg-[#F5F2FF] px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* LEFT: COPY */}
        <div className="flex flex-col gap-6 lg:gap-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-ubuntu font-bold text-[#423385]">
            You can skip us, if
          </h2>

          <ul className="space-y-4 lg:space-y-6 text-xl sm:text-2xl lg:text-3xl text-[#3F337F]">
            <li className="flex items-start gap-3">
              <span className="text-[#f87661] font-bold">1.</span>
              If you don't believe in our 8-step approach
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f87661] font-bold">2.</span>
              Founder/ Chief can't take out 4 hours/week
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#f87661] font-bold">3.</span>
              You don't have access to 3+ LinkedIn Accounts for Outreach
            </li>
          </ul>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative w-full h-64 sm:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] rounded-2xl overflow-hidden">
          <img
            src="./Images/whyUs.png"
            alt="Why Us"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* decorative gradient overlay (optional) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Skip;
