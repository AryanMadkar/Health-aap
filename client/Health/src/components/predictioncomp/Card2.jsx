import React from "react";
import { Link } from "react-router-dom";

const Card2 = () => {
  return (
    <div>
      <div className="card bigl2 flex flex-col items-center justify-start card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="baner1"
            src="https://media.istockphoto.com/id/1359314170/photo/heart-attack-and-heart-disease-3d-illustration.jpg?s=612x612&w=0&k=20&c=K5Y-yzsfs7a7CyuAw-B222EMkT04iRmiEWzhIqF0U9E="
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex items-center justify-around h-full flex-col">
          <h2 className="card-title text-2xl mt-1 font-bold">Heart Disease</h2>
          <p className="w-[98%] font-medium">
            Heart disease is a chronic condition that affects the heart muscle
            and blood vessels. It can lead to various symptoms, including chest
            pain, shortness of breath, and unexplained death.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-amber-400 text-black pad rounded-4xl font-bold cursor-pointer hover:bg-orange-400 transition-all ease-linear duration-300 hover:scale-110 hover:text-white">
              <Link to={"/heart"}>Predict Heart condition</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
