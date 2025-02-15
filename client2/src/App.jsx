import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";

import { motion, useScroll } from "motion/react";
import { Route,  Routes } from "react-router-dom";
import Dibetiese from "./components/Dibetiese";
import Lungcaner from "./components/Lungcaner";
import Brestcancer from "./components/Brestcancer";
import Heartdiseases from "./components/Heartdiseases";
import Liver from "./components/Liver";

function App() {
  const { scrollYProgress } = useScroll();
  const [mouseposition, setMouseposition] = useState({
    x: 0,
    y: 0,
  });
  useEffect(() => {
    const mouseMove = (e) => {
      setMouseposition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);
  const varients = {
    default: {
      x: mouseposition.x - 16,
      y: mouseposition.y - 16,
      mixBlendMode: "difference",
    },
  };
  const [cursorvarient, setCursorvarient] = useState("default");

  return (
    <div className="bg-black z-50 overflow-hidden text-white min-h-[100vh] w-full">
      <motion.div
        variants={varients}
        animate={cursorvarient}
        className="cursor"
      ></motion.div>
      <motion.div
        className=" h-[0.4rem] origin-left left-0 fixed top-0 bg-cyan-500 w-full"
        style={{
          scaleX: scrollYProgress,
          transition: { duration: 0.5 },
          default: { type: "Accelerator" },
          opacity: { ease: "linear" },
        }}
      ></motion.div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dibeties" element={<Dibetiese/>} />
        <Route exact path="/lungcancer" element={<Lungcaner />} />
        <Route exact path="/brestcancer" element={<Brestcancer />} />
        <Route exact path="/heart" element={<Heartdiseases />} />
        <Route exact path="/liver" element={<Liver />} />
      </Routes> 
    </div>
  );
}

export default App;
