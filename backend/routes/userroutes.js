import express from "express";
const router = express.Router();
import { userLogin, userRegister, getuser } from "../controllers/userauth.js";
import ckeckauth from "../middlewares/authentication.js";
// Sample route

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Health App API!" });
});
router.post("/register", userRegister);
router.post("/login", userLogin);
router.post("/dibeties", (req, res) => {
  res.json({ message: "Welcome to the Health App API!" });
});
router.get("/getuser",ckeckauth ,getuser);

export default router;
