import express from "express";
const router = express.Router();
import {
  userLogin,
  userRegister,
  getuser,
  logout,
} from "../controllers/userauth.js";
import ckeckauth from "../middlewares/authentication.js";
// Sample route

router.get("/", (req, res) => {
  res.json({ message: "Welcome to the Health App API!" });
});
router.post("/register", userRegister);
router.post("/login", userLogin);
router.get("/getuser", ckeckauth, getuser);
router.get("/logout", logout);

export default router;
