import React from "react";
import Glace3 from "./Glace3";
import Glance4 from "./Glance4";
import Glance5 from "./Glance5";
import GLance6 from "./GLance6";
import Glance7 from "./Glance7";

const Glance2 = () => {
  const brestmodel = {
    error: 20,
    info: 40,
    success: 60,
    secondary: 80,
  };
  return (
    <div className="h-[116vh] border-2 w-full flex flex-col items-start p-[2rem] justify-between">
      <div className="flex text-[2rem] font-semibold items-center w-full justify-between">
        <h1>Rejouice at a Glance.</h1>
        <h1>hello@rejouice.com</h1>
      </div>
      <div className="flex flex-col h-full flex-wrap items-start justify-start ">
        <div className="h-full flex flex-row  items-center justify-between w-[86vw]">
          <div>
            <Glace3 />
            <Glance4 />
            <GLance6/>
          </div>
          <Glance5 />
          <Glance7/>
        </div>
      </div>
    </div>
  );
};

export default Glance2;
