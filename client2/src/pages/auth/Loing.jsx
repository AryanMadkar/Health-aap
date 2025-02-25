import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import {toast}from "react-toastify"
import { useTheme } from "../../context/Context";
const Loing = () => {
  const {setUserdata,setAuthen} = useTheme()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    try {
      const response = await axios.post(
        "http://localhost:3000/health/v1/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log("Response:", response.data);
      setUserdata(response.data.user)
      navigate('/')
      toast.success("Logged in successfully")
      setAuthen(true)
    } catch (error) {
      toast.error("Invalid email or password")
      console.error("Error:", error);
    }
  };
  return (
    <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex leo2 min-h-fit bird rounded-2xl mt-24 text-white flex-col justify-center px-6 py-12 lg:px-8 w-1/2 border-2 border-white"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-10 text-center text-2xl font-bold tracking-tight text-white"
          >
            Sign in to your account
          </motion.h2>
        </motion.div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-400 hover:text-indigo-300"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="block w-full rounded-md bg-gray-900 px-3 py-1.5 text-white outline-1 -outline-offset-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Submit Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </motion.div>
          </motion.form>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 text-center text-sm text-gray-400"
          >
            Not an member?
            <Link
              to={"/register"}
              href="#"
              className="font-semibold text-indigo-400 hover:text-indigo-300"
            >
              Register
            </Link>
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default Loing;
