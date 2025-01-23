import express from "express";
const router = express.Router();

// Sample route

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Health App API!" });
});

export default router;
