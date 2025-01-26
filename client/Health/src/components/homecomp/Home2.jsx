import React from "react";
import video1 from "F:/dektop241205/health_app/client/Health/public/first.mp4";
const Home2 = () => {
  return (
    <div className="h-full mb-10   w-full flex flex-col items-center justify-center   m-2  p-2.5  home1 relative  ">
      <div className="orangebox  rounded-full  h-[60vh] w-[60vh] absolute -top-40 -z-10 right-14 "></div>
      <div className="orangebox2  rounded-full  h-[60vh] w-[60vh] absolute -top-20 -z-10 right-1 "></div>
      <div className="orangebox3  rounded-full  h-[60vh] w-[60vh] absolute -top-50 -z-10 right-0 "></div>
      <video
        src={video1}
        className="w-auto h-[100vh] rounded-4xl overflow-hidden vide"
        autoPlay
        muted
        loop
      ></video>
    </div>
  );
};

export default Home2;
