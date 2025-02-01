import mongoose from "mongoose";

const lungcanceschema = new mongoose.Schema({
  gender: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  smoking: {
    type: Boolean,
    required: true,
  },
  yellow_fingers: {
    type: Boolean,
    required: true,
  },
  anxiety: {
    type: Boolean,
    required: true,
  },
  peer_pressure: {
    type: Boolean,
    required: true,
  },
  chronic_disease: {
    type: Boolean,
    required: true,
  },
  fatigue: {
    type: Boolean,
    required: true,
  },
  allergy: {
    type: Boolean,
    required: true,
  },
  wheezing: {
    type: Boolean,
    required: true,
  },
  alcohol_consuming: {
    type: Boolean,
    required: true,
  },
  coughing: {
    type: Boolean,
    required: true,
  },
  shortness_of_breath: {
    type: Boolean,
    required: true,
  },
  swallowing_difficulty: {
    type: Boolean,
    required: true,
  },
  chest_pain: {
    type: Boolean,
    required: true,
  },
  lung_cancer: {
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

const lungcancermodel = mongoose.model("LungCancer", lungcanceschema);

export default lungcancermodel;
