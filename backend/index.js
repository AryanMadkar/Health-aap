import express from "express";
import cors from "cors";
import connect from "./db/dbconnect.js";
import router from "./routes/userroutes.js";
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/health/v1", router);

// Start server function
const server = async () => {
  try {
    // Connect to the database before starting the server
    await connect();

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting the server:", error.message);
    process.exit(1); // Exit the process if the server fails to start
  }
};

server();
