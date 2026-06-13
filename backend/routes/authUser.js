import {loginUser, registerUser } from "../controllers/authController.js";
import express from "express";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
// router.post("/signup", registerUser);
// router.get("/profile", (req, res) => {
//   res.status(400).json({
//     status: "success",
//     message: "successfully oiuaf",
//   });
// });

export default router;
