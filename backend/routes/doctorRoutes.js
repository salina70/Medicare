import express from "express";
import { getAllDoctors, getDoctors } from "../controllers/doctorController.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/specialist/", getDoctors)

export default router;