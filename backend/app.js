import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authUser from "./routes/authUser.js";
import userRouter from "./routes/userRoutes.js";
import RegisterUser from "./models/authUser.js";
import cookieParser from "cookie-parser";
import { requiresAuth } from "./middlewares/requiresAuth.js";
import appointmentRouter from "./routes/appointmentRoutes.js";
import doctorRoutes from "./routes/doctorRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();

const app = express();
app.use("/uploads", express.static("uploads"));

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
];

// ✅ FIRST middleware
app.use(
  cors({
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  }),
);
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

// routes

//app.use("/api/doctor",  )


// app.use("/api/admin", adminRoutes)

app.use("/api/auth", authUser);
app.use("/api/appointment", appointmentRouter )


app.use("/api/users", [requiresAuth], async (req, res, next) => {
  try {
    const users = await RegisterUser.find({}).select("-password");
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    next(error);
  }
});
app.use("/api/doctors", doctorRoutes);

// app.use("/api/departments", )

// test routes
app.get("/", (req, res) => {
  res.send("server running");
});

app.listen(8000, () => {
  connectDB();
  console.log("connected port 8000");
});
