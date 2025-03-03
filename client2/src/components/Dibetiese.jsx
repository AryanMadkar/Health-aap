import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { useTheme } from "../context/Context.jsx";

const DiabetesForm = () => {
  const { authen } = useTheme();

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
  const [count, setCount] = useState(1);
  const intervalRef = useRef(null); // Ref for interval
  const [response, setResponse] = useState("");

  // Handle cleanup on unmount
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

    try {
      if (authen) {
        const response = await axios.post(
          "https://health-aap-backend.onrender.com/health/v1/diabites",
          {
            Pregnancies: formData.pregnancies,
            Glucose: formData.glucose,
            BloodPressure: formData.bloodPressure,
            SkinThickness: formData.skinThickness,
            Insulin: formData.insulin,
            BMI: formData.bmi,
            DiabetesPedigreeFunction: formData.diabetesPedigreeFunction,
            Age: formData.age,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );

        console.log(response.data);
        setResponse(response.data);
        intervalRef.current = setInterval(() => {
          setCount((prev) => {
            if (prev >= 100) {
              clearInterval(intervalRef.current);
              return 100;
            }
            return prev + 1;
          });
        }, 200);
      } else {
        toast.error("Please sign in to access the feature");
        setLoading(false); // Ensure loading is reset even on failure
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setLoading(false); // Ensure loading is reset even on failure
    }
  };

  return (
    <div className="relative  flex items-center justify-center h-[99vh] w-[99vw] bg-black overflow-hidden">
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
            className="h-[67vh] bird p-[2rem] w-[50vw] overflow-auto border-2 border-white flex flex-wrap flex-row items-start justify-center"
          >
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Breast Cancer Prediction
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 items-center justify-center gap-4 flex flex-row flex-wrap"
            >
              {Object.entries(formData).map(([key, value]) => (
                <div key={key}>
                  <label className="flex flex-row text-sm font-medium text-gray-300 capitalize">
                    {key.replace(/_/g, " ")}
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
                whileHover={!loading ? { scale: 1.05 } : {}}
                whileTap={!loading ? { scale: 0.95 } : {}}
                type="submit"
                className="w-[40vw] mb-5 bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
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
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="z-10 h-[20rem] w-[30rem] flex flex-col items-center justify-center backdrop-blur-lg rounded-2xl p-8 shadow-xl text-center"
          >
            <h3 className="text-2xl font-bold text-white mb-4">
              Prediction Result
            </h3>
            <p className="text-gray-200 mb-6">{response?.prediction}</p>
            <button
              onClick={() => setShowResults(false)}
              className="bg-cyan-500/90 hover:bg-cyan-400 text-white font-semibold py-2 px-6 rounded-lg transition-colors"
            >
              Test Again
            </button>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Background Design Elements */}
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
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
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

export default DiabetesForm;
