import * as dotenv from "dotenv";

dotenv.config();
import express from "express";
import cors from "cors";
import connect from "./db/dbconnect.js";
import router from "./routes/userroutes.js";
import cookieparser from "cookie-parser";
import router2 from "./routes/processroutes.js";

const app = express();

// Middleware
app.use(cookieparser());
app.use(
  express.json({
    extended: true,
  })
);
app.use(
  cors({
    origin: "https://health-aap.onrender.com", // Corrected: No trailing slash
    credentials: true, // Allows cookies and authentication headers
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Cookie Parser middleware

// Routes
app.use("/health/v1", router);
app.use("/health/v1", router2);

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
