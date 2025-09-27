import React from "react";
import Nav from "./Nav";
import Offring from "./Offring";
import Skip from "./Skip";
import Funnel from "./Funnel";
import Started from "./Started";
import Form from "./Form";
import Footer from "./Footer"
// import Footer from "./Footer";

const Home = () => {
  return (
    <div className="w-full bg-[#654ecd1a]">
      <Nav />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section id="home" className="px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-32 pt-10 pb-16 lg:pt-20 lg:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* LEFT: COPY BLOCK */}
          <div className="flex flex-col justify-center text-center lg:text-left">
            <h1
              className="text-[#423385] font-ubuntu font-bold
                           text-4xl  sm:text-5xl  lg:text-6xl  xl:text-7xl  2xl:text-8xl
                           leading-tight lg:leading-[1.15]"
            >
              Never Have a
              <br />
              Empty Sales
              <br />
              Pipeline!
            </h1>

            <p
              className="text-[#423385]
                          text-lg  sm:text-xl  lg:text-2xl  xl:text-3xl
                          mt-4 lg:mt-6 max-w-xl mx-auto lg:mx-0"
            >
              Imagine having a People-Independent
              <br />
              B2B LeadGen Engine using AI
            </p>

            <div className="mt-8 lg:mt-10">
              <button
                className="inline-flex items-center justify-center
                                px-6  sm:px-8  lg:px-10  py-3  sm:py-4
                                text-lg  sm:text-xl  lg:text-2xl
                                font-semibold
                                border-2 border-[#f87661] text-[#f87661]
                                rounded-full
                                hover:bg-[#f87661] hover:text-white
                                transition-all duration-300"
              >
                See the 8-Step Revenue System Design
              </button>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center lg:justify-end">
            <img
              src="./Images/rightImg.png"
              alt="Sales Pipeline"
              className="w-full max-w-md  sm:max-w-lg  lg:max-w-full  lg:w-[90%]
                         h-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* ── REST OF PAGE ──────────────────────────────────────── */}
      <Offring />
      <Skip />
      <Funnel />
      <Started />
      <Form />
      {/* <Footer /> */}
      <Footer />
    </div>
  );
};

export default Home;
