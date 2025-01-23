import express from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

const server = async () => {
  // Use the correct key 'port' for specifying the range
  const PORT = 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

server();
