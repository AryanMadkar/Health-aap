import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    minlength: 5,
    maxlength: 255,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 100,
  },
  medical_reports: [
    {
      disease: { type: String }, // e.g., "Lung Cancer"
      prediction: { type: String }, // Prediction result
      date: { type: Date }, // When the prediction was made
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const usermodel = mongoose.model("User", userSchema);
export default usermodel;
