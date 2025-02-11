import React from "react";
import logo from "/logo1.png";
import { motion } from "motion/react";
const HOme2 = () => {
  return (
    <div className="w-full relative h-full ">
      <motion.h1
        initial={{ y: 0 }}
        whileHover={{
          y: 30,
        }}
        animate={{
          opacity: 1,
          scale: 1.02,
          y: 20,
        }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        className="absolute z-10 opacity-0 top-2 font-extrabold left-26 text-[18rem] "
      >
        𝗠𝗲𝗱𝗶𝗜𝗻𝘀𝗶𝗴𝗵𝘁
      </motion.h1>
     

      <div className="flex flex-row absolute z-10 bottom-10 text-2xl ml-12 gap-[12rem] items-end justify-start">
        <motion.h1
          initial={{ y: 0 }}
          whileHover={{
            y: 30,
          }}
          animate={{
            opacity: 1,
            scale: 1.02,
            y: 20,
          }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
        >
          Strategy, Design,
          <br />
          and Performance
        </motion.h1>
        <motion.h1
          initial={{ y: 0 }}
          whileHover={{
            y: 30,
          }}
          transition={{
            duration: 1,
            ease: "anticipate",
          }}
          animate={{
            opacity: 1,
            scale: 1.02,
            y: 20,
          }}
        >
          Two Engagement
          <br />
          Models: Cash or Equity.
        </motion.h1>
      </div>
    </div>
  );
};

export default HOme2;
