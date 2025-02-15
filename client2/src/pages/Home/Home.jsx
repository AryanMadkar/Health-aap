import React from "react";
import Navbar from "./Homecomp/Navbar";
import HOme2 from "./Homecomp/HOme2";
import Highlights from "../HIghlights/Highlights";
import Glance from "../glance/Glance";
import Work from "../../work/Work";
import Approach from "../Approach/Approach";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="h-[84vh] w-full ">
        <HOme2 />
      </div>
      <Highlights />
      <Glance />
      <Work />
      <Approach />
      <Footer />
      
    </div>
  );
};

export default Home;
