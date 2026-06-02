// import usermodel from "../models/user";

import createHttpError from "http-errors";
import { loginSchema } from "../utils/schema/auth.schema.js";
import  { db } from "../config/db.js";

export async function registerUser(req, res) {
  const { email, password } = req.body;

  res.send({ email, password });
}
export async function loginUser(req, res, next) {
  try {
    const validationData = await loginSchema.validate(req.body, {
      abortEarly: false,
    });

    const users = await db.collection('users')

    res.send(users);
  } catch (error) {
    next(error);
  }
}

export async function doctor(req, ress) {
  res.send("doctor");
}
