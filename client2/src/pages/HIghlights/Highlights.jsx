import React from "react";
import video from "/brain.mp4";
const Highlights = () => {
  return (
    <div className="min-h-[100vh] w-full flex flex-col items-center justify-center">
      <video src={video} autoPlay muted loop className=""></video>
      <h1 className="text-[4.4rem] font-semibold text-center leading-tight my-10">
        We blend the power of strategy, design,
        <br /> and performance marketing to transform founders'
        <br /> visions into remarkable brands.{" "}
        <span className="hover:underline cursor-pointer ">
          See our services.
        </span>
      </h1>
      <div className="w-[97vw] bg-neutral-400 h-[0.6px]"></div>
      <div className="w-full text-[2rem] flex flex-row items-start justify-between font-semibold p-[1rem]">
        <div className="">
          <h1>Tomorrow’s brands, today.</h1>
        </div>
        <div>
          <h1>
            We are a growth accelerator.
            <br />
            <br /> Since 2013, we have been recognized
            <br />
            globally for helping founders build
            <br /> market-defining brands that drive
            <br /> sustainable revenue and shape culture.
            <br />
            <br /> In 2023, we launched our Venture Model
            <br /> to further support founders.
            <br />
            <br /> We partner with five clients a year to give
            <br /> each one the focus and care they
            <br /> deserve
            <br />
            <br />
          </h1>
        </div>
      </div>
      <div className="w-[97vw] h-[1px] bg-neutral-500"></div>
    </div>
  );
};

export default Highlights;
