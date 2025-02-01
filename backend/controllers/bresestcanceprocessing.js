import axios from "axios";
import usermodel from "../model/userSchema.js";
import brestcancermodel from "../model/brestcancerschema.js";

const baseurl = "http://127.0.0.1:5000";

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
    const brestcancerrecord = new brestcancermodel({
      mean_radius,
      mean_texture,
      mean_perimeter,
      mean_area,
      mean_smoothness,
      diagnosis: data.diagnosis,
      user: req.user.id,
    });
    await brestcancerrecord.save();
    res.json({ prediction: data.prediction, record: brestcancerrecord });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default brestcancerprocessing;