import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/authRoute.js";

dotenv.config();

const app = express();

app.use(cors("http://localhost:5173/"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
console.log("MongoDB connected successfully");
})
.catch((error) => {
console.log("MongoDB connection error:", error);
});

app.get("/", (req, res) => {
res.json({
success: true,
message: "Medicare API is running",
});
});

app.use("/api/", router)

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});