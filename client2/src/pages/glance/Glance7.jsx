import React from "react";

const Glance7 = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-[4rem]">
      {" "}
      <div className="p-10 rounded-full border-4 border-white">
        {" "}
        <div
          className="radial-progress bg-primary text-primary-content border-primary border-4"
          style={{ "--value": 70 }}
          role="progressbar"
        >
          70%
        </div>
      </div>
      <div className="p-10 rounded-full border-4 border-white">
        {" "}
        <div
          className="radial-progress bg-primary text-primary-content border-primary border-4"
          style={{ "--value": 70 }}
          role="progressbar"
        >
          70%
        </div>
      </div>
    </div>
  );
};

export default Glance7;
