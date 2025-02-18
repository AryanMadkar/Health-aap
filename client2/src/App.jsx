import { useEffect, useState } from "react";
import Home from "./pages/Home/Home";
import { motion, useScroll } from "framer-motion";
import { Route, Routes } from "react-router-dom";
import Dibetiese from "./components/Dibetiese";
import Lungcaner from "./components/Lungcaner";
import Brestcancer from "./components/Brestcancer";
import Heartdiseases from "./components/Heartdiseases";
import Liver from "./components/Liver";
import Register from "./pages/auth/Register";
import Loing from "./pages/auth/Loing";
import Navbar from "./pages/Home/Homecomp/Navbar";

function App() {
  const { scrollYProgress } = useScroll();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [hideCursor, setHideCursor] = useState(false); // State to hide cursor

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setHideCursor(true);
    const handleMouseLeave = () => setHideCursor(false);

    window.addEventListener("mousemove", mouseMove);

    // Attach event listeners only once
    const interactiveElements = document.querySelectorAll("input, textarea, button");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      mixBlendMode: "difference",
      opacity: hideCursor ? 0 : 1, // Hide cursor when needed
      transition: { ease: "linear", duration: 0.05 },
    },
  };

  return (
    <div className="bg-black  desiui-scroll-container z-50 overflow-hidden text-white min-h-[100vh] w-full">
      {/* Custom Cursor */}
      {!hideCursor && (
        <motion.div
          variants={variants}
          animate="default"
          className="cursor fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none z-50"
        />
      )}

      {/* Scroll Progress Bar */}
      <motion.div
        className="h-[0.4rem] origin-left left-0 fixed top-0 bg-cyan-500 z-40 w-full"
        style={{ scaleX: scrollYProgress }}
      ></motion.div>

      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dibeties" element={<Dibetiese />} />
        <Route exact path="/lungcancer" element={<Lungcaner />} />
        <Route exact path="/brestcancer" element={<Brestcancer />} />
        <Route exact path="/heart" element={<Heartdiseases />} />
        <Route exact path="/liver" element={<Liver />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Loing />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
