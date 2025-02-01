import React from "react";
import { Link } from "react-router-dom";

const Card1 = () => {
  return (
    <div className="">
      <div className="card bigl flex flex-col  items-center justify-start card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
          className="baner1 shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]"
            src="https://www.bayhealth.org/-/media/images/community-health-and-wellness/blog/2024/heat-and-diabetes.jpg?h=438&iar=0&w=730&hash=56BB2EB3E5DE6BB32F8258217A9C90E4"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex items-center justify-around h-full flex-col">
          <h2 className="card-title text-2xl mt-1 font-bold">Dibetiese</h2>
          <p className="w-[98%] font-medium">
            The disease that causes your body to lose too much sugar and fat,
            leading to weight gain and poor overall health.
          </p>
          <div className="card-actions justify-end">
            <button className="btn  bg-amber-400 text-black pad rounded-4xl font-bold cursor-pointer hover:bg-orange-400 transition-all ease-linear duration-300 hover:scale-110 hover:text-white">
              <Link to={"/dibetiese"}>Predict Dibetiese</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
