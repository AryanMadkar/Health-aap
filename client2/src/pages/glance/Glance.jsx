import React from "react";
import image from "/aihig.jpg";
import Glance2 from "./Glance2";
import { motion } from "motion/react";
const Glance = () => {
  return (
    <div className="flex flex-col relative z-10 w-full min-h-[100vh] p-[2rem] items-center justify-center">
      <div className="">
        <motion.div
          animate={{
            y: [30, -30, 30], // Smooth up and down motion
            x: [-10, 10, -10], // Slight sway effect
          }}
          transition={{
            duration: 7,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="rounded-full hib -top-48 h-[60vh] w-[60vh] -z-10  absolute shadow-2xl shadow-orange-300 opacity-80 -right-10 "
        ></motion.div>
        <motion.div
          animate={{
            y: [28, -33, 36], // Smooth up and down motion
            x: [-10, 10, -10], // Slight sway effect
          }}
          transition={{
            duration: 9,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
          className="hib2  rounded-full  h-[60vh] w-[60vh] -z-10 absolute -top-[8rem] shadow-2xl shadow-orange-300 opacity-80   right-1 "
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
      </div>
      <div className="flex flex-row justify-between w-full text-[2rem]">
        <h1>Highlights</h1>
        <h1>See the work ↗</h1>
      </div>
      <img className="h-auto mt-10 w-[96vw]" src={image} />
      <motion.img
        src="https://cdn.pixabay.com/photo/2023/12/22/09/51/ai-generated-8463482_640.jpg"
        className="h-[86vh] mt-6 absolute -left-[25rem] bottom-2 w-auto"
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0, scale: 1.1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.2 }}
      />
      <div className="flex relative  h-full w-full border-white flex-row items-center justify-center gap-2">
        <motion.img
          className="h-[86vh] mt-6 w-auto mr-[11rem] bottom-2 "
          src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_640.jpg"
        />
        <motion.img
          className="h-[86vh] mt-6 w-auto absolute right-0"
          src="https://cdn.pixabay.com/photo/2023/10/21/00/36/ai-8330457_640.jpg"
        />
      </div>
      <Glance2 />
    </div>
  );
};

export default Glance;
