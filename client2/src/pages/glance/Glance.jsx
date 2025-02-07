import React from "react";
import image from "/aihig.jpg";
import Glance2 from "./Glance2";
const Glance = () => {
  return (
    <div className="flex flex-col w-full min-h-[100vh] p-[2rem] items-center justify-center">
      <div className="flex flex-row justify-between w-full text-[2rem]">
        <h1>Highlights</h1>
        <h1>See the work ↗</h1>
      </div>
      <img className="h-auto mt-10 w-[96vw]" src={image} />
      <div className="flex flex-row items-center justify-center gap-2">
        <img
          className="h-[86vh] mt-6 w-auto"
          src="https://cdn.pixabay.com/photo/2023/12/22/09/51/ai-generated-8463482_640.jpg"
        />
        <img
          className="h-[86vh] mt-6 w-auto"
          src="https://cdn.pixabay.com/photo/2022/11/08/07/53/generated-7577945_640.jpg"
        />
        <img
          className="h-[86vh] mt-6 w-auto"
          src="https://cdn.pixabay.com/photo/2023/10/21/00/36/ai-8330457_640.jpg"
        />
      </div>
      <Glance2 />
    </div>
  );
};

export default Glance;
