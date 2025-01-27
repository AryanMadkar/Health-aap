import React from "react";
import image from "/lungcan.jpg";
import { Link, Links } from "react-router-dom";
const Card3 = () => {
  return (
    <div>
      <div className="card bigl2 flex flex-col items-center justify-start card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://cdn.cancercenter.com/-/media/ctca/images/feature-block-images/medical-illustrations/lung-cancer-illustration-feature-dtm.png"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex items-center justify-around h-full flex-col">
          <h2 className="card-title text-2xl mt-1 font-bold">Lung Cancer</h2>
          <p className="w-[98%] font-medium">
            Lung cancer is the most common form of cancer in the lung, making it
            the second-most common cause of death in people aged 50 to 74.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-amber-400 text-black pad rounded-4xl font-bold cursor-pointer hover:bg-orange-400 transition-all ease-linear duration-300 hover:scale-110 hover:text-white">
             <Link to={"/lungcancer"}>predict lung Cancer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card3;
