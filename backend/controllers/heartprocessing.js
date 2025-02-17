import axios from "axios";
import heartmodel from "../model/heartschema.js";
import usermodel from "../model/userSchema.js";

const baseurl = "https://health-aap-process.onrender.com";

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
    if (data) {
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
      user.medical_reports.push({
        disease: `Heart problem + ${new Date()}`,
        prediction: data.prediction,
        date: new Date(),
      });
      res.json({ prediction: data.prediction, record: heartRecord });
    } else {
      res.status(500).json({ message: "Error processing request" });
    }

    // Respond with prediction and saved record
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default heartprocessing;
