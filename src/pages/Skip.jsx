import React from "react";

const Skip = () => {
  return (
    <div className="w-full md:h-screen px-4 md:px-2 flex flex-col mt-10 lg:justify-around">
      <div className="top md:pt-4">
        <h1 className="text-3xl md:text-[2.5rem] px-4 text-[#423385] font-bold">
          You can skip us, if
        </h1>

        <div className="texts py-4 mx-4">
          <p className="text-3xl text-[#3F337F]">
            1. If you don't believe in our 8-step approach
          </p>
          <p className="text-3xl text-[#3F337F] md:py-3">
            2. Founder/ Chief can't take out 4 hours/week.
          </p>
          <p className="text-3xl text-[#3F337F]">
            3. You don't have access to 3+ LinkedIn Accounts for Outreach
          </p>
        </div>
      </div>

      {/* =============================
          FIX: outer wrapper has overflow-hidden,
          inner wrapper defines the clipping box (height).
          Image is positioned absolute inside it and scaled.
         ============================= */}
      <div className="relative w-full my-10 overflow-hidden bg-green-400">
        {/* IMPORTANT: this inner div *defines* the clipping area on each breakpoint */}
        <div className="relative w-full h-64 md:h-[520px] lg:h-[680px]">
          <img
            src="./Images/whyUs.png"
            alt="Why Us"
            className="
              absolute
              top-1/2 left-1/2                 /* center reference point */
              md:left-[110%]                   /* your original right shift on md */
              transform
              -translate-x-1/2 -translate-y-1/2 /* center by offset */
              md:-translate-x-1/2 md:-translate-y-1/2
              md:scale-[2] lg:scale-[2.2]      /* scaling on md/lg as you wanted */
              w-auto md:w-[80%]                /* keep width behavior */
              object-contain
              transition-transform duration-500
            "
          />
        </div>
      </div>
    </div>
  );
};

export default Skip;
