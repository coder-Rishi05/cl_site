import React from "react";

const Offring = () => {
  return (
    <div className="w-full py-12 px-5  ">
      <div className="top md:pt-12 ">
        <h2 className="text-2xl">Our</h2>
        <h1 className="text-4xl md:text-5xl mt-5 text-ubuntu font-bold text-[#423385]">
          Offrings
        </h1>
      </div>
      <div className="boxes w-full myMD:my-2 myMD:flex-row  my-10  py-10 md:py-2  flex items-center flex-col gap-4  lg:flex-row">
        <div className="left  rounded-4xl bg-[#DAD1FF]">
          <div className="center flex flex-col gap-2 myMD:gap-6  py-8  px-10  ">
            <h1 className="text-3xl md:font-medium   font-bold">
              Setup & Stretagy
            </h1>
            <h3 className="text-[1.6rem] myMD:pr-8 md:text-2xl ">
              Upskill your revenue generation department
            </h3>
            <button className="px-8 md:mx-auto mt-2  md:ml-0  py-2 bg-white border-1 border-amber-600 text-[1.6rem] underline text-[#423385]">
              Training Pricing
            </button>
            <img
              className=" myMD:scale-[1.3] object-fit object-cover"
              src="./Images/bt-1.png"
              alt=""
            />
          </div>
        </div>
        <div className="right  rounded-4xl bg-[#2A207B]">
          <div className="center flex   flex-col gap-2 myMD:gap-6 py-8 px-10  ">
            <h1 className="text-3xl md:font-medium text-white  font-bold">
              Outreach & Stretagy
            </h1>
            <h3 className="text-[1.6rem] md:text-2xl myMD:pr-8 text-white ">
              Setup system and build your team.
            </h3>
            <button className="px-8 py-3 md:mx-auto md:ml-0  bg-white border-1 border-amber-600 text-[1.6rem] underline text-[#423385]">
              Agency Pricing
            </button>
            <img
              className="myMD:scale-[1.3] object-fit object-cover"
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
