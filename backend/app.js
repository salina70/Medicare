import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authUser from "./routes/authUser.js";
import userRouter from "./routes/userRoutes.js";
// import { RegisterUser } from "./models/authUser.js";
import cookieParser from "cookie-parser";
import { requiresAuth } from "./middlewares/requiresAuth.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";

dotenv.config();

const app = express();

// ✅ FIRST middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use(cookieParser());

app.use(express.json());

// routes

app.use("/api/appointment", appointmentRouter )
app.use("/api/auth", authUser);
app.use("/api/users", [requiresAuth], async (req, res, next) => {
  try {
    const users = await (await RegisterUser.find({}))
    res.status(300).send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
app.use("/api/doctors", doctorRoutes);



// test routes
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(8000, () => {
  connectDB();
  console.log("connected port 8000");
});
