import React from "react";
import Card3 from "./Card3";
import Card4 from "./Card4";
import Card5 from "./Card5";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Lionsin2 = () => {
  useGSAP(() => {
    let time1 = gsap.timeline();
    gsap.to(".ball3", {
      opacity: 1,
      duration: 3,
      scale: 1,
      y: 30,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".ball3",
        start: "top 80%",
        end: "top bottom",
      },
    });
    gsap.to(".ball4", {
      opacity: 1,
      duration: 2,
      scale: 1,
      y: -30,
      ease: "power3.inOut",
      scrollTrigger: {
        trigger: ".ball3",
        start: "-220rem 40%",
        end: "top bottom",
      },
    });
  });
  return (
    <div className="min-h-[140vh] pad flex flex-row items-start  w-full relative">
      <div className="hib h-[23rem] w-[23rem] -top-20 right-20 -z-10 absolute "></div>
      <div className=" hib2 h-[23rem] w-[23rem] -top-20 right-24 -z-10 absolute "></div>

      <div className="absolute ball3 opacity-0 left-30 top-10">
        <Card3 />
      </div>
      <div className="absolute ball4 opacity-0 right-180 -top-30">
        <Card4 />
      </div>
      <div className="absolute left-220 top-84">
        <Card5 />
      </div>
      <div className="hib3 h-[23rem] w-[23rem] top-90 left-20 -z-10 absolute bg-orange-700"></div>
      <div className=" hib3 h-[23rem] w-[23rem] top-90 left-24 -z-10 absolute bg-orange-700"></div>
    </div>
  );
};

export default Lionsin2;
