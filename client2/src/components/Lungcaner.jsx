import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const LungCancer = () => {
  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    smoking: "",
    yellow_fingers: "",
    anxiety: "",
    peer_pressure: "",
    chronic_disease: "",
    fatigue: "",
    allergy: "",
    wheezing: "",
    alcohol_consuming: "",
    coughing: "",
    shortness_of_breath: "",
    swallowing_difficulty: "",
    chest_pain: "",
  });
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState("");
  const [count, setCount] = useState(1);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (count === 100 && loading) {
      setLoading(false);
      setShowResults(true);
    }
  }, [count, loading]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCount(0);

    let processingdata = {
      gender: formData.gender === "male" ? 0 : 1,
      age: parseInt(formData.age),
      smoking: formData.smoking === "Yes" ? 2 : 1,
      yellow_fingers: formData.yellow_fingers === "Yes" ? 2 : 1,
      anxiety: formData.anxiety === "Yes" ? 2 : 1,
      peer_pressure: formData.peer_pressure === "Yes" ? 2 : 1,
      chronic_disease: formData.chronic_disease === "Yes" ? 2 : 1,
      fatigue: formData.fatigue === "Yes" ? 2 : 1,
      allergy: formData.allergy === "Yes" ? 2 : 1,
      wheezing: formData.wheezing === "Yes" ? 2 : 1,
      alcohol_consuming: formData.alcohol_consuming === "Yes" ? 2 : 1,
      coughing: formData.coughing === "Yes" ? 2 : 1,
      shortness_of_breath: formData.shortness_of_breath === "Yes"? 2 : 1,
      swallowing_difficulty: formData.swallowing_difficulty === "Yes"? 2 : 1,
      chest_pain: formData.chest_pain === "Yes"? 2 : 1,

    };

    try {
      const response = await axios.post(
        "https://health-aap-backend.onrender.com/health/v1/lungcancer",
        processingdata,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setResults(response.data);
      console.log(response.data);

      intervalRef.current = setInterval(() => {
        setCount((prev) => (prev >= 100 ? 100 : prev + 1));
      }, 200);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const dropdownOptions = {
    gender: ["Male", "Female", "Other"],
    smoking: ["Yes", "No"],
    yellow_fingers: ["Yes", "No"],
    anxiety: ["Yes", "No"],
    peer_pressure: ["Yes", "No"],
    chronic_disease: ["Yes", "No"],
    fatigue: ["Yes", "No"],
    allergy: ["Yes", "No"],
    wheezing: ["Yes", "No"],
    alcohol_consuming: ["Yes", "No"],
    coughing: ["Yes", "No"],
    shortness_of_breath: ["Yes", "No"],
    swallowing_difficulty: ["Yes", "No"],
    chest_pain: ["Yes", "No"],
  };

  return (
    <div className="relative flex items-center justify-center h-[99vh] w-[99vw] bg-black overflow-hidden">
      {loading ? (
        <div
          className="radial-progress text-cyan-400"
          style={{ "--value": count, "--size": "18rem", "--thickness": "4px" }}
          role="progressbar"
        >
          {count}%
        </div>
      ) : !showResults ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="h-[67vh] p-[2rem] w-[50vw] overflow-auto border-2 border-white flex flex-wrap items-center justify-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Lung Cancer Prediction
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 flex flex-wrap gap-4"
            >
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="text-sm font-medium text-gray-300 capitalize">
                    {key.replace(/_/g, " ")}
                  </label>
                  {dropdownOptions[key] ? (
                    <select
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      required
                    >
                      <option value="">Select</option>
                      {dropdownOptions[key].map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type="number"
                      name={key}
                      value={value}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      required
                    />
                  )}
                </div>
              ))}
              <motion.button
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                type="submit"
                className="w-[40vw] bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Predict"}
              </motion.button>
            </form>
          </motion.div>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div className="h-[20rem] w-[30rem] flex flex-col items-center justify-center bg-gray-800 p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prediction Result
            </h3>
            <p className="text-gray-200 mb-6">
              {results.prediction || "No data available"}
            </p>
            <button
              onClick={() => setShowResults(false)}
              className="bg-cyan-500 hover:bg-cyan-400 text-white py-2 px-6 rounded-lg"
            >
              Test Again
            </button>
          </motion.div>
        </AnimatePresence>
      )}
        <div
        className="h-[99vh] absolute flex items-center justify-center   left-[-5rem] w-[25rem] bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#4361ee] "
        style={{ clipPath: "polygon(0 0, 100% 32%, 100% 68%, 0 100%)" }}
      >
        <div className="w-fit h-[10rem] ml-10 bg-black flex items-center justify-center">
          <div className="stat">
            <div className="stat-figure text-primary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                ></path>
              </svg>
            </div>
            <div className="stat-title">Model Accuracy</div>
            <div className="stat-value text-primary">98.24%</div>
            <div className="stat-desc">21% more than Aveage Model</div>
          </div>
        </div>
      </div>
      <div
        className="h-[99vh] absolute flex items-center justify-center  right-[-5rem] w-[25rem] bg-gradient-to-l from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 32%, 100% 0, 100% 100%, 0 68%)" }}
      >
        <div className="w-fit h-[10rem] mr-10 bg-black flex items-center justify-center">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            </div> 
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
          </div>
        </div>{" "}
      </div>
      <div
        className="h-[99vh] absolute flex items-center justify-center   top-[-5rem] w-full bg-gradient-to-b from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 28%, 30% 28%)" }}
      ></div>
      <div
        className="h-[99vh] absolute flex items-center justify-center  bottom-[-5rem] w-full bg-gradient-to-t from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(30% 72%, 70% 72%, 100% 100%, 0 100%)" }}
      ></div>
    </div>
  );
};

export default LungCancer;

{
}
