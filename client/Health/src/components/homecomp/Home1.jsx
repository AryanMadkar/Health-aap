import React from "react";
import image from "/back1.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin"; // Import TextPlugin

gsap.registerPlugin(TextPlugin); // Register TextPlugin

const Home1 = () => {
  const lado = [
    " GREATEST WEALTH",
    " FOUNDATION OF HAPPINESS",
    " KEY TO A LONG LIFE AND COMMUNITY",
    " TRUE MEASURE OF SUCCESS",
  ];

  useGSAP(() => {
    let time1 = gsap.timeline();

    // Animation for image (card1)
    gsap.to(".card1", {
      x: 300,
      duration: 3,
      opacity: 1,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to(".card1", {
      y: 20,
      delay: 3,
      ease: "circ.Out",
      repeat: -1,
      yoyo: true,
      duration: 2,
    });

    // Blinking cursor animation
    gsap.to(".cursor", {
      opacity: 0,
      ease: "power3.inOut",
      repeat: -1,
      yoyo: true,
      duration: 0.5,
    });

    time1.to(".box2", { opacity: 1, duration: 1 });

    // ✅ Text Animation using GSAP TextPlugin
    let mastertl = gsap.timeline({ repeat: -1 });

    lado.forEach((word) => {
      let tl = gsap.timeline({ repeat: 1, yoyo: true });
      tl.to(".text", {
        duration: 3,
        text: word, // ✅ Uses GSAP TextPlugin
        ease: "power3.inOut",
        delay: 0.5,
      });
      mastertl.add(tl);
    });
  });

  return (
    <div className="h-[80vh] flex seaborn items-center justify-center w-full m-2 p-2.5 home1 relative">
      <div>
        <img
          src={image}
          alt="Health App"
          className="w-auto opacity-0 card1 h-[18rem] shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] top-10 rounded-4xl object-cover absolute -left-60"
        />
        <h1 className="w-[80vh] font-bold text-start leading-none text-3xl ml-10 absolute bottom-7 left-10">
          The health predictor is a multi-disciplinary App focused on creating
          Health Prediction, end-to-end experiences and environments.
        </h1>
      </div>
      <h1 className="w-1/2 top-10 inline-block text-start font-bold text-[6.5vw] absolute right-0 leading-none">
        <span className="box2"></span>
        <span className="hi beon text-white">HEALTH IS THE</span>
        <span className="text"></span> {/* Animated Text */}
        <span className="cursor">_</span> {/* Blinking Cursor */}
      </h1>

      <div className="w-[97vw] h-[2px] rounded-b-full line1 absolute bottom-0"></div>
    </div>
  );
};

export default Home1;
