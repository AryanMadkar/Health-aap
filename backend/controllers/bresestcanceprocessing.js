import axios from "axios";
import usermodel from "../model/userSchema.js";
import brestcancermodel from "../model/brestcancerschema.js";

const baseurl = "http://127.0.0.1:5000/";

const brestcancerprocessing = async (req, res) => {
  try {
    // Validate user
    const user = await usermodel.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    // Extract and validate fields from the request body
    const {
      mean_radius,
      mean_texture,
      mean_perimeter,
      mean_area,
      mean_smoothness,
    } = req.body;
    if (
      !mean_radius ||
      !mean_texture ||
      !mean_perimeter ||
      !mean_area ||
      !mean_smoothness
    ) {
      return res.status(400).json({ message: "Missing required fields" });
    }
    const { data } = await axios.post(`${baseurl}/breastcancer`, {
      mean_radius,
      mean_texture,
      mean_perimeter,
      mean_area,
      mean_smoothness,
    });
    if (data) {
      const brestcancerrecord = new brestcancermodel({
        mean_radius,
        mean_texture,
        mean_perimeter,
        mean_area,
        mean_smoothness,
        diagnosis: data.prediction,
        user: req.user.id,
      });
      await brestcancerrecord.save();
      user.medical_reports.push({
        disease: `Brest cance problem + ${new Date()}`,
        prediction: data.prediction,
        date: new Date(),
      });
      res.json({
        message: "data saved",
        prediction: data.prediction,
        record: brestcancerrecord,
      });
    } else {
      res.status(400).json({ message: "Error processing request" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default brestcancerprocessing;
