import React, { useState } from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "motion/react";
const Navbar = () => {
  return (
    <div className="flex flex-row fixed top-0  w-[98vw] items-center justify-between p-2 ">
      <div>
        <motion.h1
          initial={{
            y: 0,
          }}
          animate={{
            opacity: 1,
            y: 10,
          }}
          transition={{
            duration: 0.6,
            ease: "easeInOut",
          }}
          className="cursor-pointer opacity-0 text-3xl font-bold"
        >
          The Growth Accelerator
        </motion.h1>
      </div>
      <div>
        <ul className="flex gap-2 flex-row">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <motion.h1
          whileHover={{
            scale: 1.1,
            color: "black",
            background: "white",
            borderColor: "black",
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            duration: 0.3,
            ease: "anticipate",
          }}
          className="flex cursor-pointer font-semibold flex-row items-center border-2 p-2 rounded-2xl text-white justify-center gap-2"
        >
          Let's talk <FaLocationArrow />
        </motion.h1>
      </div>
    </div>
  );
};

export default Navbar;
