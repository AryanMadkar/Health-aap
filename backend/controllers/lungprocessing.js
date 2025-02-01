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
      GENDER,
      AGE,
      SMOKING,
      YELLOW_FINGERS,
      ANXIETY,
      PEER_PRESSURE,
      CHRONIC_DISEASE,
      FATIGUE,
      ALLERGY,
      WHEEZING,
      ALCOHOL_CONSUMING,
      COUGHING,
      SHORTNESS_OF_BREATH,
      SWALLOWING_DIFFICULTY,
      CHEST_PAIN,
    } = req.body;
    if (
      !GENDER ||
      !AGE ||
      !SMOKING ||
      !YELLOW_FINGERS ||
      !ANXIETY ||
      !PEER_PRESSURE ||
      !CHRONIC_DISEASE ||
      !FATIGUE ||
      !ALLERGY ||
      !WHEEZING ||
      !ALCOHOL_CONSUMING ||
      !COUGHING ||
      !SHORTNESS_OF_BREATH ||
      !SWALLOWING_DIFFICULTY ||
      !CHEST_PAIN
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const { data } = await axios.post(`${baseurl}/lungcancer`, {
      gende: GENDER,
      age: AGE,
      smoking: SMOKING,
      yellow_fingers: YELLOW_FINGERS,
      anxiety: ANXIETY,
      peer_pressure: PEER_PRESSURE,
      chronic_disease: CHRONIC_DISEASE,
      fatigue: FATIGUE,
      allergy: ALLERGY,
      wheezing: WHEEZING,
      alcohol_consuming: ALCOHOL_CONSUMING,
      coughing: COUGHING,
      shortness_of_breath: SHORTNESS_OF_BREATH,
      swallowing_difficulty: SWALLOWING_DIFFICULTY,
      chest_pain: CHEST_PAIN,
      userId: req.user.id,
    });
    const lungrecord = new lungcancermodel({
      gender: GENDER === 1 ? "Male" : "Female",
      age: AGE,
      smoking: SMOKING === 2 ? True : false,
      yellow_fingers: YELLOW_FINGERS === 2 ? True : false,
      anxiety: ANXIETY === 2 ? True : false,
      peer_pressure: PEER_PRESSURE === 2 ? True : false,
      chronic_disease: CHRONIC_DISEASE === 2 ? True : false,
      fatigue: FATIGUE === 2 ? True : false,
      allergy: ALLERGY === 2 ? True : false,
      wheezing: WHEEZING === 2 ? True : false,
      alcohol_consuming: ALCOHOL_CONSUMING === 2 ? True : false,
      coughing: COUGHING === 2 ? True : false,
      shortness_of_breath: SHORTNESS_OF_BREATH === 2 ? True : false,
      swallowing_difficulty: SWALLOWING_DIFFICULTY === 2 ? True : false,
      chest_pain: CHEST_PAIN === 2 ? True : false,
      lung_cancer: data.prediction,
      user: req.user.id,
    });
    await lungrecord.save().then(() => {
      console.log("User record saved successfully");
      res.json({ prediction: data.prediction, record: lungrecord });
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default lungprocessing;
