import { Router } from "express";

import authRoute from "./authRoutes.js";
import createHttpError from "http-errors";

const router = Router();
router.use("/api/auth", authRoute);

router.use((_, __, next) => {
  next(createHttpError.NotFound());
});

router.use((error, req, res, next) => {
  let status = error.status || 500;

  const newError = {
    status,
    message: error.message,
  };

  console.log(error);

  if (error.errors && error.errors.length > 0) {
    status = 422;
    newError.errors = error.errors;
  }

  res.status(status).send({ error: newError });
});

export default router;
