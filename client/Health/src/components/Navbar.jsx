import React from "react";
import logo from "/logo.png";
const Navbar = () => {
  return (
    <div className="text-red-400  border-b-4  border-black rounded-4xl w-full flex flex-row mt-8 items-center justify-between h-[6rem]">
      <div className="logo  ">
        <img
          src={logo}
          className="h-auto  rounded-full  w-[9rem] flex items-center justify-center"
        />
      </div>
      <div className="">
        <ul className="flex shero items-center justify-center gap-2  ml-2">
          <li>Home</li>
          <li>About us</li>
          <li>Prediction</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
