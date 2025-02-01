import express from "express";
import dibetiesprocessing from "../controllers/processingcontrollers.js";
import ckeckauth from "../middlewares/authentication.js";
import heartprocessing from "../controllers/heartprocessing.js";
import lungprocessing from "../controllers/lungprocessing.js";
import liverprocessing from "../controllers/Liverprocessing.js";
import brestcancerprocessing from "../controllers/bresestcanceprocessing.js";
const router2 = express.Router();

router2.post("/heart", ckeckauth, heartprocessing);
router2.post("/brestcancer", ckeckauth, brestcancerprocessing);
router2.post("/liver", ckeckauth, liverprocessing);
router2.post("/diabites", ckeckauth, dibetiesprocessing);
router2.post("/lungcancer", ckeckauth, lungprocessing);

export default router2;
