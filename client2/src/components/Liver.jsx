import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const Liver = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "1", // Default Male
    BMI: "",
    AlcoholConsumption: "",
    Smoking: "0", // Default No
    GeneticRisk: "0", // Default No
    PhysicalActivity: "",
    Diabetes: "0", // Default No
    Hypertension: "0", // Default No
    LiverFunctionTest: "",
  });

  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [count, setCount] = useState(1);
  const [result, setResult] = useState("")
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
    const { name, value } = e.target;

    // Convert necessary fields to numbers
    const updatedValue = [
      "Gender",
      "Smoking",
      "GeneticRisk",
      "Diabetes",
      "Hypertension",
    ].includes(name)
      ? parseInt(value, 10)
      : value;

    setFormData({ ...formData, [name]: updatedValue });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setCount(0);

    try {
      const response = await axios.post(
        "https://health-aap-backend.onrender.com/health/v1/liver",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          //
          withCredentials: true,
        }
      );
      console.log(response.data); // Check values in console before API call
      setResult(response.data.result);

      intervalRef.current = setInterval(() => {
        setCount((prev) => {
          if (prev >= 100) {
            clearInterval(intervalRef.current);
            return 100;
          }
          return prev + 1;
        });
      }, 200);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
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
            className="h-[67vh] p-[2rem] w-[50vw] overflow-auto border-2 border-white flex flex-wrap flex-row items-start justify-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Liver Disease Prediction
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 items-center justify-center gap-4 flex flex-row flex-wrap"
            >
              {/* Age Input */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Age
                </label>
                <input
                  type="number"
                  name="Age"
                  value={formData.Age}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                  required
                />
              </div>

              {/* Gender Select */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Gender
                </label>
                <select
                  name="Gender"
                  value={formData.Gender}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                >
                  <option value="1">Male</option>
                  <option value="0">Female</option>
                </select>
              </div>

              {/* BMI Input */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  BMI
                </label>
                <input
                  type="number"
                  name="BMI"
                  value={formData.BMI}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                  required
                />
              </div>
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  AlcoholConsumption
                </label>
                <input
                  type="number"
                  name="AlcoholConsumption"
                  value={formData.AlcoholConsumption}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                  required
                />
              </div>

              {/* Smoking Select */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Smoking
                </label>
                <select
                  name="Smoking"
                  value={formData.Smoking}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              {/* Genetic Risk Select */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Genetic Risk
                </label>
                <select
                  name="GeneticRisk"
                  value={formData.GeneticRisk}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  PhysicalActivity{" "}
                </label>
                <input
                  type="number"
                  name="PhysicalActivity"
                  value={formData.PhysicalActivity}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                  required
                />
              </div>

              {/* Diabetes Select */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Diabetes
                </label>
                <select
                  name="Diabetes"
                  value={formData.Diabetes}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>

              {/* Hypertension Select */}
              <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  Hypertension
                </label>
                <select
                  name="Hypertension"
                  value={formData.Hypertension}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                >
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </div>
               <div>
                <label className="flex flex-row text-sm font-medium text-gray-300">
                  LiverFunctionTest{" "}
                </label>
                <input
                  type="number"
                  name="LiverFunctionTest"
                  value={formData.LiverFunctionTest}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3"
                  required
                />
              </div>
              

              {/* Submit Button */}
              <motion.button
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                type="submit"
                className="w-[40vw] mb-5 bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                disabled={loading}
              >
                {loading ? "Loading..." : "Predict"}
              </motion.button>
            </form>
          </motion.div>
        </AnimatePresence>
      ) :  <AnimatePresence>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="z-10 h-[20rem] w-[30rem] flex flex-col items-center justify-center backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center"
                >
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Prediction Result
                  </h3>
                  <p className="text-gray-200 mb-6">
                    {result?.prediction}
                  </p>
                  <button
                    onClick={() => setShowResults(false)}
                    className="bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    Test Again
                  </button>
                </motion.div>
              </AnimatePresence>}
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

export default Liver;
