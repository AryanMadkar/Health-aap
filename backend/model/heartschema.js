import mongoose from "mongoose";

const heartschema = new mongoose.Schema({
  age: {
    type: Number,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  cp: {
    type: Number,
    required: true,
  },
  trestbps: {
    type: Number,
    required: true,
  },
  chol: {
    type: Number,
    required: true,
  },
  fbs: {
    type: Number,
    required: true,
  },
  restecg: {
    type: Number,
    required: true,
  },
  thalach: {
    type: Number,
    required: true,
  },
  exang: {
    type: Number,
    required: true,
  },
  oldpeak: {
    type: Number,
    required: true,
  },
  slope: {
    type: Number,
    required: true,
  },
  ca: {
    type: Number,
    required: true,
  },
  thal: {
    type: Number,
    required: true,
  },
  target: {
    type: Number,
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

const heartmodel = mongoose.model("Heart", heartschema);

export default heartmodel;
