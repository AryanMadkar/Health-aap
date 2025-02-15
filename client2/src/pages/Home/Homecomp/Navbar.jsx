import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    "Dibeties",
    "Heart",
    "LungCancer",
    "BrestCancer",
    "Liver",
  ];

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-row fixed top-0 z-40 w-[98vw] items-center justify-between p-2"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
         <Link to={"/"}> <h1 className="cursor-pointer text-3xl font-bold">
            The Growth Accelerator
          </h1></Link>
        </motion.div>
      </div>
      <div>
        <ul className="flex gap-4 text-xl font-bold flex-row">
          {navItems.map((item, index) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "backOut",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  className="hover:underline cursor-pointer block p-2"
                  to={`/${item.toLowerCase()}`}
                >
                  {item}
                </Link>
              </motion.div>
            </motion.li>
          ))}
        </ul>
      </div>
      <Link to={"/register"}><motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{
          scale: 1.1,
          color: "black",
          backgroundColor: "white",
          borderColor: "black",
        }}
        whileTap={{ scale: 0.95 }}
        className="flex cursor-pointer font-semibold flex-row items-center border-2 p-2 rounded-2xl text-white justify-end gap-2"
      >
        Register <FaLocationArrow />
      </motion.button></Link>
    </motion.div>
  );
};

export default Navbar;
