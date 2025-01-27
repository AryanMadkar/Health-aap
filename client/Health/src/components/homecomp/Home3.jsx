import React from "react";
import card from "/card.jpg";
const Home3 = () => {
  return (
    <div className="bg-black min-h-[100vh] w-full">
      <div className="moving-text">
        <div className="con">
          <div className="gola"></div>
          <h1>EXPERIENCE</h1>
          <div className="gola"></div>
          <h1>HEALTH</h1>
          <div className="gola"></div>
          <h1>TECHNOLOGY</h1>
        </div>
        <div className="con">
          <div className="gola"></div>

          <h1>EXPERIENCE</h1>
          <div className="gola"></div>

          <h1>HEALTH</h1>
          <div className="gola"></div>

          <h1>TECHNOLOGY</h1>
        </div>
        <div className="con">
          <div className="gola"></div>

          <h1>EXPERIENCE</h1>
          <div className="gola"></div>

          <h1>HEALTH</h1>
          <div className="gola"></div>

          <h1>TECHNOLOGY</h1>
        </div>
      </div>
      <div className="flex w-full h-full flex-row items-center relative justify-between">
        <div className="min-h-[100vh] w-1/2 relative">
          {/* <div className="orangebox2  rounded-full  h-[60vh] w-[60vh] absolute top-20 -z-10 left-10 "></div> */}
          <div className="orangebox4 h-[20rem] w-[20rem] bottom-10 left-110 absolute bg-orange-700"></div>
          <div className="orangebox4 h-[20rem] w-[20rem] bottom-9 left-100 absolute bg-orange-700"></div>
          <h1 className="absolute niga top-40 text-3xl font-bold w-[50vw] z-10 left-20">
            We are a team of innovation-driven, future-focused developers,
            healthcare enthusiasts, and engineers who believe that early
            predictions save lives. With precision and dedication, we’ve crafted
            a tool where every detail matters, empowering users to take charge
            of their health with confidence and clarity
          </h1>
        </div>
        <div className="w-[23rem]   bg-black niga  flex items-center justify-center gap-2 p-2 flex-col rounded-4xl overflow-hidden h-fit right-10 min-h-[70vh] mr-10 absolute">
          <img src={card} className="" />
          <h1 className="text-white  text-[1.1rem] w-[22rem] text-center font-bold">
            Our mission is to empower individuals to make informed decisions
            about their health by providing real-time, personalized health
            predictions, insights, and support. We believe that everyone
            deserves to live healthy and be healthy, and that our tools are the
            key to achieving that goal.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home3;
