import mongoose from "mongoose";

const diabitesSchema = new mongoose.Schema({
  Pregnancies: {
    type: Number,
    required: true,
  },
  Glucose: {
    type: Number,
    required: true,
  },
  BloodPressure: {
    type: Number,
    required: true,
  },
  SkinThickness: {
    type: Number,
    required: true,
  },
  Insulin: {
    type: Number,
    required: true,
  },
  BMI: {
    type: Number,
    required: true,
  },
  DiabetesPedigreeFunction: {
    type: Number,
    required: true,
  },
  Age: {
    type: Number,
    required: true,
  },
  Outcome: {
    type: String, //0 for negative and 1 for positive
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

const dib5etesmodel = mongoose.model("Diabetes", diabitesSchema);

export default dib5etesmodel;
