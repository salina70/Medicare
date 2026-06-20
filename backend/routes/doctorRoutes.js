import express from "express";
import {
  createDoctor,
  deleteDoctor,
  getAllDoctors,
  getDoctorById,
  getDoctors,
  updateDoctor,
} from "../controllers/doctorController.js";
import { requireAdmin, requiresAuth } from "../middlewares/requiresAuth.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/specialist/", getDoctors)
router.get("/:id", getDoctorById);
router.post("/", requiresAuth, requireAdmin, createDoctor);
router.patch("/:id", requiresAuth, requireAdmin, updateDoctor);
router.delete("/:id", requiresAuth, requireAdmin, deleteDoctor);

export default router;
