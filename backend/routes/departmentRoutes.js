// import express from "express";

// import {
//   addDepartment,
//   getDepartments,
//   getDoctorsByDepartment,
// } from "../controllers/departmentController.js";

// const router = express.Router();

// // Add department
// router.post("/add", addDepartment);

// // Get all departments
// router.get("/", getDepartments);

// // Get all doctors for a department
// router.get("/:id/doctors", getDoctorsByDepartment);

// export default router;


import express from 'express'
import { getAllDepartments, getEachDepartment } from '../controllers/departmentController.js';


const router = express.Router();

router.get("/", getAllDepartments)
router.get("/:id", getEachDepartment)

export default router;


