import express from "express";
import { getDashboard } from "../controllers/adminController.js";
import { requireAdmin, requiresAuth } from "../middlewares/requiresAuth.js";

const router = express.Router();

router.get("/dashboard", requiresAuth, requireAdmin, getDashboard);

export default router;
