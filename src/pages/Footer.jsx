import React from "react";

const Footer = () => {
  return (
    <div className="w-full pb-10 px-6 bg-linear-to-t from-[#3A3554] to-[#3E3473] ">
      <div className="top w-full   ">
        <img src="./Images/logo.png" className="pt-10 w-1/2 " alt="" />
        <p className="pt-4 text-white text-2xl tracking-tight ">
          Your Business Amplifier
        </p>
        <h6 className="font-medium text-gray-300/50">
          Demand Generates Power!
        </h6>
      </div>
      <div className="bottom flex gap-4 mt-10  ">
        <div className="contact flex gap-6 flex-col  ">
          <h2 className="uppercase font-medium text-gray-300/50   ">
            Connect:
          </h2>
          <p className="text-white font-normal text-xl ">Founder's LinkedIn</p>
          <p className="text-white font-normal text-xl ">Company's LinkedIn</p>
          <p className="text-white font-normal text-xl ">Youtube</p>
        </div>
        <div className="services flex flex-col gap-6  ">
          <h2 className="text-gray-300/50 font-medium uppercase ">Services:</h2>
          <p className="text-white font-normal text-xl ">Speaking</p>
          <p className="text-white font-normal text-xl ">Pricing</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
