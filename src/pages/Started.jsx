import React from "react";

const Started = () => {
  return (
    <div className="w-full py-10 bg-pink-100/45    h-screen  ">
      <div className="w-full bg-center bg-cover bg-no-repeat  bg-[url('./Images/bgImage.png')] h-full">
        <div className="top flex flex-col items-center gap-18 justify-between ">
          <div className="top-text">
            <h1 className="text-4xl text-white/70 font-bold py-8 px-10 text-center">
              Get started for Free
            </h1>
            <h2 className="text-white text-center text-2xl px-12 ">
              See how we build $100K worth Demand Gen Departments:
            </h2>
          </div>
          <div className="video mx-6 py-4 px-6 rounded-xl  bg-white/20  border-1 border-white ">
            <img
              className="w-full object-center  object-fit  "
              autoPlay
              muted
              loop
              src="https://global.divhunt.com/892d0aa9a3db619cf25505cff3733756_1560837.gif"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Started;
