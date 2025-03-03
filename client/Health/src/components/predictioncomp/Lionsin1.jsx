import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Lionsin1 = () => {
  useGSAP(() => {
    let time1 = gsap.timeline();
    let time2 = gsap.timeline();
    time1.to(".ball1", {
      scale: 1,
      y: -140,
      duration: 3,
      opacity: 1,
      ease: "expo.in",
    });
    time2.to(".ball2", {
      scale: 1,
      y: -260,
      duration: 3,
      opacity: 1,
      ease: "expo.in",
    });
    
   
  });
  return (
    <div className="min-h-[100vh]  flex flex-row items-center justify-between w-full relative">
      <div className="w-1/3 ball1 opacity-0">
        <Card2 />
      </div>
      <div className="w-1/3 h-full flex items-center justify-center text-center font-semibold ">
        <div className="orangebox4 h-[23rem] w-[23rem] top-0 left-70 -z-10 absolute bg-orange-700"></div>
        <div className="orangebox2 h-[23rem] w-[23rem] top-0 left-70 -z-10 absolute bg-orange-700"></div>
        <h1 className="text-[3.3rem]  font-bold">
          THE POWER OF AI AND THE REVOLUTION OF MEDICAL SCIENCE
        </h1>
      </div>
      <div className="w-1/3  ball2 opacity-0  h-full ">
        <Card1 />
      </div>
    </div>
  );
};

export default Lionsin1;
