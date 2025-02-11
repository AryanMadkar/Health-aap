import React, { useRef } from "react";
import video from "/brain.mp4";
import { motion } from "motion/react";
import { useDragControls } from "motion/react"
const Highlights = () => {
  const controls = useDragControls()

  const scrollref = useRef();
  return (
    <div className="min-h-[100vh] w-full flex relative z-10 flex-col items-center justify-center">
      <video src={video} autoPlay muted loop className=""></video>
      <motion.h1
        initial={{
          opacity: 0,
          y: 0,
        }}
        whileInView={{
          y: 20,
          opacity: 1,
          stiffness: 100,
          damping: 30,
          restDelta: 0.001,
        }}
        transition={{
          duration: 1,
          ease: "linear",
        }}
        viewport={{ once: false }}
        className="text-[3.4rem] opacity-0 font-semibold text-center leading-tight my-10"
      >
        We blend the power of strategy, design,
        <br /> and performance marketing to transform founders'
        <br /> visions into remarkable brands.{" "}
        <span className="hover:underline cursor-pointer ">
          See our services.
        </span>
      </motion.h1>
      <div className="w-[97vw] opacity-0 bg-neutral-400 h-[0.6px]"></div>
      <div className="w-full text-[2rem] flex flex-row items-start justify-between font-semibold p-[1rem]">
        <motion.div className="relative">
          <motion.div
            animate={{
              y: [30, -30, 30], // Smooth up and down motion
              x: [-10, 10, -10], // Slight sway effect
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="rounded-full orangebox top-10 h-[60vh] w-[60vh]  absolute shadow-2xl shadow-orange-300 opacity-80 "
          ></motion.div>
          <motion.div
            animate={{
              y: [28, -33, 36], // Smooth up and down motion
              x: [-10, 10, -10], // Slight sway effect
            }}
            transition={{
              duration: 6,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="orangebox3  rounded-full  h-[60vh] w-[60vh] absolute   right-14 "
          ></motion.div>
          <motion.div
            animate={{
              y: [40, -39, 20], // Smooth up and down motion
              x: [-10, 10, -10], // Slight sway effect
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="orangebox2  rounded-full  h-[60vh] w-[60vh] absolute   right-1 "
          ></motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 0,
            }}
            whileInView={{
              opacity: 1,
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
              y: 20,
            }}
            transition={{
              duration: 1,
              ease: "linear",
            }}
          >
            Tomorrow’s brands, today.
          </motion.h1>
        </motion.div>
        <div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 0,
            }}
            whileInView={{
              y:20,
              opacity: 1,
              stiffness: 100,
              damping: 30,
              restDelta: 0.001,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
            className="opacity-0"
          > 
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
          </motion.h1>
        </div>
      </div>
      <div className="w-[97vw] h-[1px] bg-neutral-500 z-10"></div>
    </div>
  );
};

export default Highlights;
