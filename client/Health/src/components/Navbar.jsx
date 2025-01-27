import React from "react";
import logo from "/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="text-red-400  border-b-4  border-white rounded-4xl w-full flex flex-row mt-8 items-center justify-between h-[6rem]">
      <div className="logo  ">
        <img
          src={logo}
          className="h-auto  rounded-full  w-[9rem] flex items-center justify-center"
        />
      </div>
      <div className="">
        <ul className="flex shero font-light text-2xl items-center justify-center gap-2  ml-2">
          <li><Link to="/">Home</Link></li>
          <li>About us</li>
          <li><Link to="/prediction">Prediction</Link></li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
