import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Glance5 = () => {
  const lado = [
    "I’ve built an innovative device that takes health monitoring to the next level! This smart device doesn’t just collect data—it communicates with you.",
    "Using advanced AI, it provides real-time insights about its functionality and health status.",
    "Paired with my AI-powered medical app, this device helps predict multiple diseases, including diabetes, liver problems, lung cancer, breast cancer, and more.",
    "The app analyzes user data, offering early warnings and insights to support better health decisions.",
    "With a future-proof design, new diseases and features can be added seamlessly.",
    "This is not just technology—it's the future of personal healthcare! 🚀💡",
  ];

  const [text, setText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = lado[textIndex];

    if (isDeleting) {
      if (charIndex > 0) {
        setTimeout(() => setCharIndex((prev) => prev - 1), 40);
      } else {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % lado.length);
      }
    } else {
      if (charIndex < currentText.length) {
        setTimeout(() => setCharIndex((prev) => prev + 1), 60);
      } else {
        setTimeout(() => setIsDeleting(true), 2000);
      }
    }

    setText(currentText.substring(0, charIndex));
  }, [charIndex, isDeleting, textIndex, lado]);

  return (
    <div className="mockup-phone border-primary">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard flex items-start h-full justify-start m-2 p-2  phone2 artboard-demo phone-1">
          <h1 className=" font-semibold text-lg mb-2">
            Device Overview
          </h1>

          {/* Typing Animation Text */}
          <motion.h1
            key={text}
            className="text-white  font-bold text-xl text-center"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {text}
            {/* Blinking Cursor */}
           
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default Glance5;
