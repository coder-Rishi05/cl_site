import React from "react";

const Skip = () => {
  return (
    <div className="w-full h-screen px-4 flex flex-col lg:flex-row mt-10 ">
      <div className="top">
        <h1 className="text-3xl px-4 text-[#423385] font-bold">
          You can skip us, if
        </h1>
        <div className="texts py-4 mx-4">
          <p className="text-3xl  ">
            1. If you don't believe in our 8-step approach{" "}
          </p>
          <p className="text-3xl  ">
            2. Founder/ Chief can't take out 4 hours/week.
          </p>
          <p className="text-3xl  ">
            3. You don't have access to 3+ LinkedIn Accounts for Outreach
          </p>
        </div>
      </div>
      <div className="Image w-full my-10 ">
        <img className="w-full  " src="./Images/whyUs.png" alt="" />
      </div>
    </div>
  );
};

export default Skip;
