import {
  registerUser,
  loginUser,
  doctor,
} from "../controllers/authController.js";
import { Router } from "express";
// import {jwt} from "jsonwebtoken";
// import {bcrypt} from "bcryptjs";

const router = Router();

router.get("/", (_, response) => {
response.send('hi')
});
router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/doctor", doctor);

export default router;
