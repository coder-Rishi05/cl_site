import React from "react";

const Funnel = () => {
  return (
    <div className="w-full h-screen bg-red-500 flex flex-col lg:flex-row gap-6 ">
      <div className="top">
        <h2>Our Proprietary</h2>
        <h1>8-Step Full Funnel System</h1>
      </div>
      <div className="boxes  ">
        <div className="box1 bg-blue-500 rounded-xl ">
          <h1 className="text-xl text-white ">
            1. Message-Market Fit for Leads
          </h1>
          <p className="text-xl text-white ">
            Timeline : upto 12 weeks for U.S
          </p>
          <div className="image w-[20rem] ">
            <img className="object-cover object-center " src="./Images/message.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funnel;
