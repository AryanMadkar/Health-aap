import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import Highlights from "./pages/HIghlights/Highlights";
import "./App.css";
import Glance from "./pages/glance/Glance";
import Footer from "./pages/Footer/Footer";
import Approach from "./pages/Approach/Approach";
import Work from "./work/Work";
import { motion, useScroll } from "motion/react";

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
      mixBlendMode:"difference"
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
      <Home />
      <Highlights />
      <Glance />
      <Work />
      <Approach />
      <Footer />
    </div>
  );
}

export default App;
