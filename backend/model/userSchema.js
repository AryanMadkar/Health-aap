import mongoose from "mongoose";

const userScheama = new mongoose.Schema({
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
  medical_history: [
    {
      disease: {
        type: String,
      },
      predictionDate: {
        type: Date,
        default: Date.now,
      },
      predictionDetails: {
        type: mongoose.Schema.Types.Mixed, // Allows storing flexible data about predictions
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const usermodel = mongoose.model("User", userScheama);

export default usermodel;
