import axios from "axios";
import usermodel from "../model/userSchema.js";
import livermodel from "../model/liverschema.js";

const baseurl = "https://health-aap-process.onrender.com";

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

    const { data } = await axios.post(`${baseurl}/liver`, {
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
    if (!data.prediction) {
      return res
        .status(500)
        .json({ message: "Failed to predict liver function test" });
    }
    if (data) {
      const liverrecord = new livermodel({
        user: user._id,
        Age,
        Gender: Gender === 1 ? "male" : "female",
        BMI,
        AlcoholConsumption,
        Smoking,
        GeneticRisk,
        PhysicalActivity,
        Diabetes,
        Hypertension,
        LiverFunctionTest,
        Diagnosis: data.prediction,
      });
      await liverrecord.save();
      user.medical_reports.push({
        disease: `Liver problem + ${new Date()}`,
        prediction: data.prediction,
        date: new Date(),
      });
      // Send back prediction and saved record
      res.json({ prediction: data.prediction, record: liverrecord });
    } else {
      res.status(500).json({ message: "Failed to process liver data" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default liverprocessing;
