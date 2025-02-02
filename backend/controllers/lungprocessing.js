import mongoose from "mongoose";
import axios from "axios";
import usermodel from "../model/userSchema.js";
import lungcancermodel from "../model/lungcancer.js";

const baseurl = "http://127.0.0.1:5000";

const lungprocessing = async (req, res) => {
  try {
    // Validate user
    const user = await usermodel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract and validate fields from the request body
    const {
      gender,
      age,
      smoking,
      yellow_fingers,
      anxiety,
      peer_pressure,
      chronic_disease,
      fatigue,
      allergy,
      wheezing,
      alcohol_consuming,
      coughing,
      shortness_of_breath,
      swallowing_difficulty,
      chest_pain,
    } = req.body;

    // Send data to Flask API
    const { data } = await axios.post(`${baseurl}/lungcancer`, {
      gender, // Fixed incorrect key
      age,
      smoking,
      yellow_fingers,
      anxiety,
      peer_pressure,
      chronic_disease,
      fatigue,
      allergy,
      wheezing,
      alcohol: alcohol_consuming, // Match API's expected key
      coughing,
      shortness_of_breath,
      swallowing_difficulty,
      chest_pain,
      userId: req.user.id,
    });

    if (data) {
      const lungrecord = new lungcancermodel({
        gender: gender === 1 ? "male" : "female",
        age,
        smoking: Boolean(smoking),
        yellow_fingers: Boolean(yellow_fingers),
        anxiety: Boolean(anxiety),
        peer_pressure: Boolean(peer_pressure),
        chronic_disease: Boolean(chronic_disease),
        fatigue: Boolean(fatigue),
        allergy: Boolean(allergy),
        wheezing: Boolean(wheezing),
        alcohol_consuming: Boolean(alcohol_consuming),
        coughing: Boolean(coughing),
        shortness_of_breath: Boolean(shortness_of_breath),
        swallowing_difficulty: Boolean(swallowing_difficulty),
        chest_pain: Boolean(chest_pain),
        lung_cancer: data.prediction,
        user: req.user.id,
      });

      await lungrecord.save();
      console.log("User record saved successfully");
      return res.json({ prediction: data.prediction, record: lungrecord });
    } else {
      return res.status(400).json({ message: "Error processing request" });
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export default lungprocessing;
