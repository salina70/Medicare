import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./src/config/db.js";
import authRoutes from "./src/routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.use("/api/auth/", authRoutes);

app.get("/", (req, res) => {
  res.send("API running...");
});


app.get("/doctor", (req, res)=>{
  res.send("doctor req");
})

app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server running on port ${PORT}`);
});