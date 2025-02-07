import React from "react";
import leo from "/videoplayback.mp4";
const Approach1 = () => {
  return (
    <div className="flex flex-col p-[2rem] w-full h-full ">
      <h1 className="text-[3rem] font-semibold">OUR APPROACH</h1>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="w-[97vw] bg-neutral-600 h-[1px] mt-10"></div>
        <div className="flex leading-tight flex-row items-start mt-10 font-semibold text-[2rem] justify-around w-full ">
          <h1>
            A simple philosophy:
            <br /> quality over quantity.
          </h1>
          <h1>
            We don’t do volume. We partner with only
            <br /> five clients a year, focusing our expertise
            <br /> on their success. Every detail is crafted,
            <br />
            every decision strategic, and every <br />
            outcome transformative. We build brands <br /> that set new
            benchmarks.
          </h1>
        </div>
      </div>
      <div className="flex flex-col items-center w-full justify-center">
        <div className="w-[97vw] bg-neutral-600 h-[1px] mt-10"></div>
        <div className="flex flex-row leading-tight items-start mt-10 font-semibold text-[2rem] justify-around w-full ">
          <h1>
            Performance & emotion.
            <br />
            You need both.
          </h1>
          <h1>
            Data is vital. Fostering an emotional <br />
            connection with your audience is equally <br />
            vital if you want to drive retention and <br />
            advocacy. That’s why we create brands <br />
            that not only captivate but also deliver <br />
            measurable and sustainable growth.
          </h1>
        </div>
      </div>
      <video
        className="mt-10 rounded-2xl overflow-hidden"
        src={leo}
        loop
        muted
        autoPlay
      ></video>
      <div className="h-[100vh] w-full flex items-center justify-center">
        <h1 className="text-[5rem]">Get to Know Us</h1>
      </div>
    </div>
  );
};

export default Approach1;
