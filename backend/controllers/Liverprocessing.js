import axios from "axios";
import usermodel from "../model/userSchema.js";
import livermodel from "../model/liverschema.js";

const baseurl = "http://127.0.0.1:5000";

const liverprocessing = async (req, res) => {
  try {
    // Validate user
    const user = await usermodel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Extract and validate fields from the request body
    const {
      Age,
      Gender,
      BMI,
      AlcoholConsumption,
      Smoking,
      GeneticRisk,
      PhysicalActivity,
      Diabetes,
      Hypertension,
      LiverFunctionTest,
    } = req.body;
    if (
      !Age ||
      !Gender ||
      !BMI ||
      !AlcoholConsumption ||
      !Smoking ||
      !GeneticRisk ||
      !PhysicalActivity ||
      !Diabetes ||
      !Hypertension ||
      !LiverFunctionTest
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const data = await axios.post(`${baseurl}/liver`, {
      Age,
      Gender,
      BMI,
      AlcoholConsumption,
      Smoking,
      GeneticRisk,
      PhysicalActivity,
      Diabetes,
      Hypertension,
      LiverFunctionTest,
    });
    if (!data.data.prediction) {
      return res
        .status(500)
        .json({ message: "Failed to predict liver function test" });
    }

    const liverrecord = new livermodel({
      user: user._id,
      Age,
      Gender,
      BMI,
      AlcoholConsumption,
      Smoking,
      GeneticRisk,
      PhysicalActivity,
      Diabetes,
      Hypertension,
      LiverFunctionTest,
      prediction: data.prediction,
    });
    await liverrecord.save();
    // Send back prediction and saved record
    res.json({ prediction: data.prediction, record: liverrecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default liverprocessing;