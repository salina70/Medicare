import jwt from 'jsonwebtoken'
import User from '../models/authUser.js';

export const requiresAuth = (req, res, next) => {
  try {
    const token = req.header("authorization");

    if (!token || !token.includes("Bearer")) {
      return res.status(401).json({ message: "No token provided" });
    }

    const [, key] = token.split(" ");
    const decoded = jwt.verify(key, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    next(error)
  }
};

export const requireAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user || !user.isAdmin) {
      return res.status(403).json({ message: "Admin access required" });
    }

    next();
  } catch (error) {
    next(error);
  }
};
