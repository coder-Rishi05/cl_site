import React from "react";
import Nav from "./Nav";

const Home = () => {
  return (
    <div className=" h-screen w-full bg-[#654ecd1a] ">
      <Nav />
      <div className="left">
        <h1 className="text-[#423385] text-[2.4rem] px-5 leading-[3rem] py-8 font-ubuntu font-bold tracking-tight text-center ">
        Never Have a Empty Sales Pipeline!
      </h1>
      <p className="text-3xl px-6 text-[#423385] leading-4xl text-center">
        Imagine having a People-Independent B2B LeadGen Engine using AI
      </p>
      <button className="px-6 py-4 my-12 text-2xl  font-medium text-center border-1 rounded-3xl mx-6 border-[#f87661] text-[#f87661]">
        See the 8-Step Revenue System Design
      </button>
      </div>
      <div className="right">
        
      </div>
    </div>
  );
};

export default Home;
