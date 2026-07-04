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
import upload from "../middlewares/multer.js";

const router = express.Router();

router.get("/", getAllDoctors);
router.get("/specialist/", getDoctors)
router.get("/:id", getDoctorById);
router.post("/create",requiresAuth,requireAdmin,upload.single("image"), createDoctor);
router.patch("/:id", requiresAuth, requireAdmin, updateDoctor);
router.delete("/:id", requiresAuth, requireAdmin, deleteDoctor);


router.post(
  "/create",
  upload.single("image"),
  createDoctor
);
export default router;
