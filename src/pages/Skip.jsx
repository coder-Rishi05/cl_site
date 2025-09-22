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

      {/* IMAGE CONTAINER WITH FIXED OVERFLOW */}
      <div className="relative w-full my-10 overflow-hidden ">
        <img
          className="w-full myMD:w-[60%] lg:w-[50%] md:w-[80%]  md:scale-[2] myMD:scale-[1.3] myMD:translate-x-1/4 md:relative md:-translate-x-1/2 md:left-[110%] md:top-[90%] md:-translate-y-1/2"
          src="./Images/whyUs.png"
          alt="Why Us"
        />
      </div>
    </div>
  );
};

export default Skip;
