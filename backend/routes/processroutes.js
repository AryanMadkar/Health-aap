import express from "express";
import dibetiesprocessing from "../controllers/processingcontrollers.js";
import ckeckauth from "../middlewares/authentication.js";
import heartprocessing from "../controllers/heartprocessing.js";
const router2 = express.Router();

router2.post("/brestcancer");
router2.post("/heart", ckeckauth, heartprocessing);
router2.post("/liver");
router2.post("/diabites", ckeckauth, dibetiesprocessing);
router2.post("/lungcancer");
router2.post("/multiplediseas");

export default router2;
