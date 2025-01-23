import mongoose from "mongoose";

const diseasesschema = new mongoose.Schema({
  diabites: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Diabetes",
  },
  heart: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Heart",
  },
  liver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Liver",
  },
  brestcancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "BrestCancer",
  },
  lungcancer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "LungCancer",
  },
});

const diseasemodel = mongoose.model("Diseases", diseasesschema);

export default diseasemodel;
