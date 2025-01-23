import mongoose from "mongoose";

const liverSchema = mongoose.Schema({
  Age: {
    type: Number,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  BMI: {
    type: Number,
    required: true,
  },
  AlcoholConsumption: {
    type: Number,
    required: true,
  },
  Smoking: {
    type: Number,
    required: true,
  },
  GeneticRisk: {
    type: Number,
    required: true,
  },
  PhysicalActivity: {
    type: Number,
    required: true,
  },
  Diabetes: {
    type: Number,
    required: true,
  },
  Hypertension: {
    type: Number,
    required: true,
  },
  LiverFunctionTest: {
    type: Number,
    required: true,
  },
  Diagnosis: {
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

const livermodel = mongoose.model("Liver", liverSchema);

export default livermodel;
