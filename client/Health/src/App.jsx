import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contactpage from "./pages/Contactpage";
import Dibetiese from "./pages/Dibetiese";
import Heart from "./pages/Heart";
import Lungcancer from "./pages/Lungcancer";
import Liver from "./pages/Liver";
import BreastCancer from "./pages/BreastCancer";
import Insurance from "./pages/Insurance";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contactpage />} />
        <Route path="/dibetiese" element={<Dibetiese />} />
        <Route path="/heart" element={<Heart />} />
        <Route path="/lungcancer" element={<Lungcancer />} />
        <Route path="/liver" element={<Liver />} />
        <Route path="/brestcancer" element={<BreastCancer />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="*" element={() => <h2>Page not found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
