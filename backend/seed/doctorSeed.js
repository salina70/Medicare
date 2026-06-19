// seed/doctorSeed.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "../models/Doctor.js";

dotenv.config();

const doctors = [
  {
    name: "Dr. Ashma Sharma",
    specialty: "Cardiologist",
    experience: 12,
    fee: 1200,
    rating: 4.8,
    image: "/images/dr1.jpg",
  },
  {
    name: "Dr. Rakesh Verma",
    specialty: "Dermatologist",
    experience: 8,
    fee: 900,
    rating: 4.6,
    image: "/images/dr2.jpg",
  },
  {
    name: "Dr. Rohan Gupta",
    specialty: "Neurologist",
    experience: 15,
    fee: 1500,
    rating: 4.9,
    image: "/images/dr3.jpg",
  },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB Connected");

  

    // insert new data
    await Doctor.insertMany(doctors);

    console.log("Doctors Seeded Successfully");

    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

seedDB();