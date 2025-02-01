import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/src";
const Navbar = () => {
  useGSAP(() => {
    gsap.to("#navbarco", {
      opacity: 1,
      y: 50,
      duration: 2,
      delay: 1,
      ease: "elastic.out(1, 0.3)",
    });
    gsap.to(".min ul li , .logo", {
      opacity: 1,
      stagger: 0.1,
      y: 50,
      duration: 2,
      delay: 2,
      ease: "elastic.out(1, 0.3)",
    });
  });

  return (
    <div
      id="navbarco"
      className="text-red-400 relative  border-white border-b-4 opacity-0   rounded-4xl w-full flex flex-row mt-8 items-center justify-between  h-[4.3rem]"
    >
      <div className="logo relative w-full h-full ">
        <img
          src={logo}
          className="h-auto absolute  -top-26 rounded-full  w-[9rem] flex items-center justify-center"
        />
      </div>
      <div className="min">
        <ul className="flex shero relative w-full h-full font-light text-2xl items-center justify-center gap-2  ml-2">
          <li className="absolute -top-14 opacity-0">
            <Link to="/">Home</Link>
          </li>
          <li className="absolute -top-14 opacity-0">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="absolute -top-14 opacity-0">
            <Link to="/prediction">Prediction</Link>
          </li>
          <li className="absolute -top-14 opacity-0">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
