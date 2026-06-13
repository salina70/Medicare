import mongoose from "mongoose";
import { z } from "zod";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/authUser.js";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!email || !password || !name) {
      return res.status(400).json({
        status: "failure",
        message: "all fields required",
      });
    }

    const existedUser = await User.findOne({ email });

    if (existedUser)
      return res.status(400).json({
        staus: "failure",
        message: "user already existed",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const loginUser = async (req, res, next) => {
  try {
    console.log(req.body)
    const { email, password } = req.body;
    if (!email || !password)
      return res.status(400).json({
        status: "failure",
        message: "all fields required",
      });

    const existedUser = await User.findOne({ email });

    if (!existedUser)
      return res.json({
        status: false,
        message: "user not existed",
      });

    const checkPassword = await bcrypt.compare(password, existedUser.password);

    if (!checkPassword)
      return res.json({
        status: "failure",
        message: "password donot match",
      });

    const token = await jwt.sign(
      { id: existedUser._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" },
    );

    return res.status(200).json({
      status: "success",
      message: "user logged in",
      token,
      user: {
        id: existedUser._id,
        name: existedUser.name,
        email: existedUser.email,
      },
    });
  } catch (error) {
    next(error);
  }
};
