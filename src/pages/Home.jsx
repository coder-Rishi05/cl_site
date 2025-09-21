import React from "react";
import Nav from "./Nav";
import Offring from "./Offring";
import Faq from "./Faq";
import Skip from "./Skip";
import Funnel from "./Funnel";
import Started from "./Started";
import Form from "./Form";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="  w-full  bg-[#654ecd1a] ">
      <Nav />
      <main className="flex flex-col h-full w-full items-center md:flex-col-reverse lg:flex-row justify-between">
        <div className="left w-full  px-10 ">
          <h1 className="text-[#423385] md:text-6xl md:leading-[4.5rem] md:px-20 text-[2.4rem] leading-[3rem] py-8 font-ubuntu font-bold tracking-tight text-center ">
            Never Have a Empty Sales Pipeline!
          </h1>
          <p className="text-3xl px-6 text-[#423385] md:px-20  leading-4xl text-center">
            Imagine having a People-Independent B2B LeadGen Engine using AI
          </p>
          <button className="px-4 md:px-6 md:relative md:top-1/2 md:left-1/2 md:-translate-y-1/2 md:-translate-x-1/2  py-3 mt-16  text-2xl   font-medium text-center border-1 rounded-4xl  border-[#f87661] text-[#f87661]">
            See the 8-Step Revenue System Design
          </button>
        </div>
        <div className="right  w-full md:w-1/2  md:px-1 px-5  ">
          <img
            className="object-fit object-center w-full"
            src="./Images/rightImg.png"
            alt=""
          />
        </div>
      </main>
      <Offring />
      <Skip />
      <Funnel />
      <Started />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
