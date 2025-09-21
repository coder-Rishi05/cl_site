import React from "react";
import { IoReorderThree } from "react-icons/io5";
// import {IoReorderThreeOutline} from 'react-icons'

const Nav = () => {
  return (
    <nav className="py-6 px-4 w-full bg-black md:py-8   flex items-center justify-between">
      <div className="left px-4  md:px-3  w-1/2 h-full">
        <img
          className="object-cover md:w-[8rem]  object-center w-full"
          src="./Images/logo.png"
          alt=""
        />
      </div>
      {/* <div className="right1 h-screen bg-black top-0 left-0 w-full flex  flex-col absolute ">
        <p className="text-white text-xl " >Homepage</p>
        <div className="mid">
          <div className="child">
            <h2>Don't buy if</h2>
            <p>scroll to section</p>
          </div>
          <div className="child">
            <h2>Don't buy if</h2>
            <p>scroll to section</p>
          </div>
          <div className="child">
            <h2>Don't buy if</h2>
            <p>scroll to section</p>
          </div>
          <div className="child">
            <h2>Don't buy if</h2>
            <p>scroll to section</p>
          </div>
        </div>
        <p className="text-white text-xl " >Homepage</p>
        <p className="text-white text-xl " >Homepage</p>
      </div> */}
      <div className="right2 relative flex items-end gap-[6px] cursor-pointer lg:hidden flex-col ">
        <div className="line h-[2px] rounded w-10 md:w-8 bg-white "></div>
        <div className="line h-[2px] rounded w-10 md:w-8 bg-white "></div>
        <div className="line h-[2px] rounded w-10 md:w-8 bg-white "></div>
      </div>
    </nav>
  );
};

export default Nav;
