import express from "express";
// import { RegisterUser } from "../models/authUser";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    // const users = await RegisterUser.find({})
    res.send('users');
  } catch (error) {
    console.log(error)
    next(error);
  }
});



export default router;
