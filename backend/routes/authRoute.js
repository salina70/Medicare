import express from 'express';
import { loginLogic, registerLogic } from '../controllers/authController.js';
import { getAllDoctor } from '../controllers/doctorController.js';

const router=express.Router();



router.post("/login", loginLogic )
router.post("/register", registerLogic )


//doctor route 
router.get("/getdoctor", getAllDoctor)
export default router;