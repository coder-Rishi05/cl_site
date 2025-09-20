import React from "react";

const Offring = () => {
  return (
    <div className="w-full bg-green-400 px-5  ">
      <div className="top md:pt-12">
        <h2 className="text-2xl">Our</h2>
        <h1 className="text-4xl md:text-5xl mt-5 text-ubuntu font-bold text-[#423385]">
          Offrings
        </h1>
      </div>
      <div className="boxes w-full  my-10  py-10 md:py-2  flex items-center flex-col gap-4  lg:flex-row">
        <div className="left   rounded-4xl bg-[#DAD1FF]">
          <div className="center flex flex-col gap-2   py-8  px-10  ">
            <h1 className="text-3xl md:font-medium   font-bold">
              Setup & Stretagy
            </h1>
            <h3 className="text-[1.6rem] md:text-2xl ">
              Upskill your revenue generation department
            </h3>
            <button className="px-8 md:mx-auto md:ml-0  py-2 bg-white border-1 border-amber-600 text-[1.6rem] underline text-[#423385]">
              Training Pricing
            </button>
            <img
              className=" object-fit object-cover"
              src="./Images/bt-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="right  rounded-4xl bg-[#2A207B]">
          <div className="center flex   flex-col gap-2 py-8 px-10  ">
            <h1 className="text-3xl md:font-medium text-white  font-bold">
              Setup & Stretagy
            </h1>
            <h3 className="text-[1.6rem] md:text-2xl text-white ">
              Setup system and build your team.
            </h3>
            <button className="px-8 py-3 md:mx-auto md:ml-0  bg-white border-1 border-amber-600 text-[1.6rem] underline text-[#423385]">
              Training Pricing
            </button>
            <img
              className=" object-fit object-cover"
              src="./Images/bt-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offring;
