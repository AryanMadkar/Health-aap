import React from "react";
import { Link } from "react-router-dom";

const Card4 = () => {
  return (
    <div>
      <div className="card bigl2 flex flex-col items-center justify-start card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            src="https://prdmspst.blob.core.windows.net/images/articles/fuzuloparib-apatinib-improves-pfs-in-brca-mutated-metastatic-breast-cancer-3c6e8652-30ca-4877-aadf-dc45de73fda1-thumbnail.jpg
"
            alt="Shoes"
          />
        </figure>
        <div className="card-body flex items-center justify-around h-full flex-col">
          <h2 className="card-title text-2xl mt-1 font-bold">Brest Cancer</h2>
          <p className="w-[98%] font-medium">
            Brest cancer is a type of breast cancer that arises in the breast
            tissue. The most common type of breast cancer is invasive ductal
            carcinoma in situ (IDC), which forms as a result of breast cells
            growing uncontrollably.
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary bg-amber-400 text-black pad rounded-4xl font-bold cursor-pointer hover:bg-orange-400 transition-all ease-linear duration-300 hover:scale-110 hover:text-white">
             <Link to={"/brestcancer"}>Predict Brest cancer</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card4;
