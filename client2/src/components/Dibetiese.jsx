import React, { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const DiabetesForm = () => {
  const [formData, setFormData] = useState({
    pregnancies: "",
    glucose: "",
    bloodPressure: "",
    skinThickness: "",
    insulin: "",
    bmi: "",
    diabetesPedigreeFunction: "",
    age: "",
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
        "http://localhost:3000/health/v1/diabites",
        {
          Pregnancies: formData.pregnancies,
          Glucose: formData.glucose,
          BloodPressure: formData.bloodPressure,
          SkinThickness: formData.skinThickness,
          Insulin: formData.insulin,
          BMI: formData.bmi,
          DiabetesPedigreeFunction: formData.diabetesPedigreeFunction,
          Age: formData.age,
        }
      );
      setShowResults(true);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className="relative flex items-center justify-center h-full min-h-[100vh] w-screen p-[1rem] bg-slate-900 ">
      {/* Background elements with reduced darkness */}

      <div className="relative flex items-center justify-center min-h-[100vh] h-full w-full">
        <AnimatePresence>
          {!showResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="z-10 bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 shadow-xl w-full max-w-md"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Diabetes Prediction
                </h2>

                {Object.entries(formData).map(([key, value]) => (
                  <div key={key}>
                    <label className="block text-sm font-medium text-gray-300 capitalize">
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
                  className="w-full bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  disabled={loading}
                >
                  {loading ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="h-5 w-5 border-2 border-white/50 border-t-transparent rounded-full mx-auto"
                    />
                  ) : (
                    "Predict"
                  )}
                </motion.button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

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
    </div>
  );
};

export default DiabetesForm;
