import React from "react";

const Form = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center  bg-white py-8 px-10">
        <div className="top">
          <h1 className="text-center font-medium text-[#756BEE] py-3 text-xl">
            For Special Requirement
          </h1>
          <h3 className="text-[#423385] font-bold  text-center text-4xl">
            Get in Touch
          </h3>
        </div>
        <form
          className="border-1  my-10 flex w-full lg:w-[45rem] flex-col px-4  lg:px-10  py-10 gap-3 border-gray-200  rounded-lg "
          action=""
        >
          <label className="text-xs font-medium  uppercase text-[#3F337B]">
            Website Url <sup>*</sup>{" "}
          </label>
          <input
            className="p-3 rounded-xl border-gray-100 focus:border-amber-500 border-2 foucs:border-none"
            type="text"
            placeholder="example.ai"
          />
          <label className="text-xs font-medium  uppercase text-[#3F337B]">
            Official Email <sup>*</sup>{" "}
          </label>
          <input
            type="email"
            className="p-3 rounded-xl border-gray-100 focus:border-amber-500 border-2 foucs:border-none"
            placeholder="akshat@bizamps.com"
          />
          <label className="text-xs font-medium  uppercase text-[#3F337B]">
            Mobile Number <sup>*</sup>{" "}
          </label>
          <input
            className="p-3 rounded-xl border-gray-100 focus:border-amber-500 border-2 foucs:border-none"
            type="text"
            placeholder="+1 510-443-NXYZ"
          />
          <label className="text-xs font-medium  uppercase text-[#3F337B]">
            Mention your goal
          </label>
          <textarea
            className="p-3 resize-none rounded-xl border-gray-100 focus:border-amber-500 border-2 foucs:border-none"
            name=""
            id=""
            rows="5"
            placeholder="tell us everything..."
          ></textarea>

          <button className="px-10 lg:px-8 py-2 lg:py-3 text-white cursor-pointer rounded-full font-medium font-sans bg-[#756BEE] hover:border-1 transition-all duration-500 hover:border-[#756BEE] hover:text-[#756BEE] hover:bg-[#FFFFFF]">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
