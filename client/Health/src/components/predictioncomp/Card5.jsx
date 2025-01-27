import React from "react";
import { Link } from "react-router-dom";

const Card5 = () => {
  return (
    <div>
      <div className="card bigl flex flex-col items-center justify-start card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://media.istockphoto.com/id/1417927026/photo/liver-damage-such-as-fatty-liver-fibrosis-cirrhosis-and-liver-cancer-3d-illustration.jpg?s=612x612&w=0&k=20&c=MDjUj84q31QCrQJWBRhGdR3QYA-LY8H5Bu2a_b1DR2Y=
"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex items-center justify-around h-full flex-col">
          <h2 className="card-title text-2xl mt-1 font-bold">Liver Problem</h2>
          <p className="w-[98%] font-medium">
            Liver disease is a group of diseases characterized by abnormalities
            in the hepatocytes, which are the cells that produce red blood
            cells.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-amber-400 text-black pad rounded-4xl font-bold cursor-pointer hover:bg-orange-400 transition-all ease-linear duration-300 hover:scale-110 hover:text-white">
              <Link to={"/liver"}>Predict Liver condition</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card5;
