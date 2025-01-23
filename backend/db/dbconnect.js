import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://Aryan:Aradhya%403462@health.8hipr.mongodb.net/",
      {
        useNewUrlParser: true, // Ensures proper URL parsing
        useUnifiedTopology: true, // Enables the new MongoDB driver topology
      }
    );
    console.log("MongoDB connected!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connect;
