import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect(
      "mongodb://localhost:27017/health_app_pc",
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
