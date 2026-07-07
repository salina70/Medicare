import express from "express";
import {
  createAppointment,
  getAppointments,
  updateStatus,
} from "../controllers/appointmentController.js";
import { getAllDoctors } from "../controllers/doctorController.js";

const router = express.Router();

router.post("/", createAppointment);

router.get("/get", getAppointments);

router.get("/doctors/:id", getAllDoctors);

router.patch("/:id/status", updateStatus);

export default router;