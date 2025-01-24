import axios from "axios";
import heartmodel from "../model/heartschema.js";
import usermodel from "../model/userSchema.js";

const baseurl = "http://127.0.0.1:5000";

const heartprocessing = async (req, res) => {
  try {
    // Validate user
    const user = await usermodel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract and validate fields from the request body
    const {
      age,
      sex,
      cp,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
    } = req.body;

    if (
      [
        age,
        sex,
        cp,
        trestbps,
        chol,
        fbs,
        restecg,
        thalach,
        exang,
        oldpeak,
        slope,
        ca,
        thal,
      ].some((field) => field === undefined)
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Make API call to Flask backend
    const { data } = await axios.post(`${baseurl}/heart`, {
      age,
      sex,
      cp,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
    });

    // Save prediction and user data in MongoDB
    const heartRecord = new heartmodel({
      age,
      sex,
      cp,
      trestbps,
      chol,
      fbs,
      restecg,
      thalach,
      exang,
      oldpeak,
      slope,
      ca,
      thal,
      target: data.prediction,
      user: req.user.id,
    });
    await heartRecord.save();

    // Respond with prediction and saved record
    res.json({ prediction: data.prediction, record: heartRecord });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default heartprocessing;
