import React from "react";

const Home4 = () => {
  return (
    <div className="min-h-[100vh] home4 text-white w-full bg-black flex flex-col ">
      <h1 className="flex flex-row items-center gap-2">
        <div className="dot h-[10px] w-[10px] bg-amber-600 rounded-full"></div>
        Featured Projects
      </h1>
      <div className="flex flex-col h-full w-[94vw] items-center justify-center">
        <div className="h-[10rem] F nitro w-[94vw] flex flex-row items-center justify-between ">
          <h1>DIABITESE</h1>
        </div>
        <div className="h-[10rem]  nitro w-[94vw] flex flex-row items-center justify-between">
          <h1>CANCER</h1>
        </div>

        <div className="h-[10rem]  nitro w-[94vw] flex flex-row items-center justify-between">
          <h1>HEART</h1>
        </div>

        <div className="h-[10rem]  nitro w-[94vw] flex flex-row items-center justify-between">
          <h1>LIVER</h1>
        </div>

        <div className="h-[10rem]  nitro w-[94vw] flex flex-row items-center justify-between">
          <h1>LUNG CANCER</h1>
        </div>
      </div>
    </div>
  );
};

export default Home4;
