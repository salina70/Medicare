import createHttpError from "http-errors";
import jwt from "jsonwebtoken";

export const requiresAuth = (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token && !token.includes("Bearer ")) {
      res.status(401).send("No token");
    }

    const [_, key] = token.split(" ");
    const decoded = jwt.decode(key, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).send("Invalid token");
  }
};


