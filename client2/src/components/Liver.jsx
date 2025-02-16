import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
const Liver = () => {
  const [formData, setFormData] = useState({
    Age: "",
    Gender: "",
    BMI: "",
    AlcoholConsumption: "",
    Smoking: "",
    GeneticRisk: "",
    PhysicalActivity: "",
    Diabetes: "",
    Hypertension: "",
    LiverFunctionTest: "",
  });
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Demo API call
      const response = await axios.post(
        "http://localhost:3000/health/v1/liver",
        formData
      );
      setShowResults(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <div className="relative flex items-center justify-center h-[99vh] w-[99vw] bg-black overflow-hidden">
      <div className="h-[67vh] p-[2rem] w-[50vw] overflow-auto    leo  border-2 border-white flex flex-wrap flex-row items-start justify-center">
        <h2 className="text-2xl font-bold text-white mb-6 text-center">
          Heart Disease Prediction
        </h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 items-center  justify-center gap-4 flex flex-row flex-wrap"
        >
          {Object.entries(formData).map(([key, value]) => (
            <div key={key}>
              <label className="flex flex-row text-sm font-medium text-gray-300 capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="number"
                name={key}
                value={value}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-slate-700/50 border border-slate-600/50 text-white py-2 px-3 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                required
              />
            </div>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-[40vw] mb-5 bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
            disabled={loading}
          >
            {loading ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="h-5 w-4 mb-10 border-2 border-white/50 border-t-transparent rounded-full mx-[2rem]"
              />
            ) : (
              "Predict"
            )}
          </motion.button>
        </form>
        <AnimatePresence>
          {showResults && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="z-10 bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Prediction Result
              </h3>
              <p className="text-gray-200 mb-6">
                Diabetes prediction result here...
              </p>
              <button
                onClick={() => setShowResults(false)}
                className="bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Test Again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      {/* Left Section - Moved further out */}
      <div
        className="h-[99vh] absolute left-[-5rem] w-[25rem] bg-gradient-to-r from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 0, 100% 32%, 100% 68%, 0 100%)" }}
      ></div>

      {/* Right Section - Moved further out */}
      <div
        className="h-[99vh] absolute right-[-5rem] w-[25rem] bg-gradient-to-l from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 32%, 100% 0, 100% 100%, 0 68%)" }}
      ></div>

      {/* Top Section - More inward to increase black space */}
      <div
        className="h-[99vh] absolute top-[-5rem] w-full bg-gradient-to-b from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(0 0, 100% 0, 70% 28%, 30% 28%)" }}
      ></div>

      {/* Bottom Section - More inward to increase black space */}
      <div
        className="h-[99vh] absolute bottom-[-5rem] w-full bg-gradient-to-t from-[#3a0ca3] via-[#7209b7] to-[#4361ee] shadow-xl"
        style={{ clipPath: "polygon(30% 72%, 70% 72%, 100% 100%, 0 100%)" }}
      ></div>
    </div>
  );
};

export default Liver;
