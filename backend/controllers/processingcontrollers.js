import axios from "axios";
import dib5etesmodel from "../model/diabitesmodel.js";
import usermodel from "../model/userSchema.js";

const baseurl = "http://127.0.0.1:5000";

const dibetiesprocessing = async (req, res) => {
  try {
    // Validate user
    const user = await usermodel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract fields from request body
    const {
      Pregnancies,
      Glucose,
      BloodPressure,
      SkinThickness,
      Insulin,
      BMI,
      DiabetesPedigreeFunction,
      Age,
    } = req.body;

    // Validate fields
    if (
      !Pregnancies ||
      !Glucose ||
      !BloodPressure ||
      !BMI ||
      !DiabetesPedigreeFunction ||
      !Age
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Make API call to Flask
    const { data } = await axios.post(`${baseurl}/diabetes`, {
      pregnancies: Pregnancies,
      glucose: Glucose,
      bp: BloodPressure,
      skin_thickness: SkinThickness,
      insulin: Insulin,
      bmi: BMI,
      dpf: DiabetesPedigreeFunction,
      age: Age,
    });

    // Save data to the database
    const diabetesRecord = new dib5etesmodel({
      Pregnancies,
      Glucose,
      BloodPressure,
      SkinThickness,
      Insulin,
      BMI,
      DiabetesPedigreeFunction,
      Age,
      Outcome: data.prediction,
      user: req.user.id,
    });
    await diabetesRecord.save().then(() => {
      console.log("User record saved successfully");
    });
    // Respond with the prediction and updated user data

    // Respond with prediction and saved record
    res.json({ prediction: data.prediction, record: diabetesRecord });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default dibetiesprocessing;
