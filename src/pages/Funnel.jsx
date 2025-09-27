import Grid from "./Grid";

const Funnel = () => {
  return (
    <div id="about" className="w-full  mb-10 flex flex-col  gap-6 ">
      <div className="top px-10 myLg:px-50 md:pt-8  ">
        <h2 className="text-2xl  text-blue-700">Our Proprietary</h2>
        <h1 className="text-3xl my-5 md:text-[2.8rem] text-[#0F114D] font-bold">
          8-Step Full Funnel System
        </h1>
      </div>
      <div className="boxes px-6 flex  gap-6 ">
        <Grid />
      </div>
    </div>
  );
};

export default Funnel;
