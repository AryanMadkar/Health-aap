import mongoose from "mongoose";

const brestcancerschema = new mongoose.Schema({
  mean_radius: {
    type: Number,
    required: true,
  },
  mean_texture: {
    type: Number,
    required: true,
  },
  mean_perimeter: {
    type: Number,
    required: true,
  },
  mean_area: {
    type: Number,
    required: true,
  },
  mean_smoothness: {
    type: Number,
    required: true,
  },
  diagnosis: {
    type: String,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  predictiondate: {
    type: Date,
    default: Date.now,
  },
});

const brestcancermodel = mongoose.model("BrestCancer", brestcancerschema);

export default brestcancermodel;
