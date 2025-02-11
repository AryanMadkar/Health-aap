import React from "react";
import Footer2 from "./Footer2";

const Footer = () => {
  return (
    <div className="bg-black h-full w-full">
      <div className="flex flex-row border-t-2 bg-black items-start justify-between p-[2rem]">
        <div className="flex flex-col items-start justify-center">
          <h1 className="text-[4rem]">Do it once. Do it right.</h1>
          <h1 className="text-xl mt-10">
            New Business:
            <br />
            HEllo@rejoucide.com
          </h1>
          <h1 className="text-xl mt-10">
            Sign up for our newsletter (No spam)
          </h1>
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent text-lg w-[20vw] mt-4 border-b-2"
          ></input>
        </div>
        <div className="flex text-[1.4rem] gap-10 flex-row items-start justify-center">
          <div className="flex  flex-col gap-2">
            <h1>Home</h1>
            <h1>Work</h1>
            <h1>About</h1>
            <h1>Services</h1>
            <h1>Contacts</h1>
          </div>
          <div className="flex gap-2 flex-col ">
            <h1>Instagram</h1>
            <h1>LinkedIn</h1>
          </div>
        </div>
      </div>
      <Footer2 />
    </div>
  );
};

export default Footer;
