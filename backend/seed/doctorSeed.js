// seed/doctorSeed.js

import mongoose from "mongoose";
import dotenv from "dotenv";
import Doctor from "../models/doctorModel.js";

dotenv.config();

const doctors = [
  {
    name: "Dr. Ashma Sharma",
    email: "ashma.sharma@example.com",
    specialist: "Cardiologist",
    description: "Experienced cardiologist focused on preventive heart care.",
    experience: 12,
    consultationFee: 1200,
    rating: 4.8,
    image: "/images/dr1.jpg",
  },
  {
    name: "Dr. Rakesh Verma",
    email: "rakesh.verma@example.com",
    specialist: "Dermatologist",
    description: "Dermatologist treating common skin, hair, and nail concerns.",
    experience: 8,
    consultationFee: 900,
    rating: 4.6,
    image: "/images/dr2.jpg",
  },
  {
    name: "Dr. Rohan Gupta",
    email: "rohan.gupta@example.com",
    specialist: "Neurologist",
    description: "Neurologist providing diagnosis and follow-up care.",
    experience: 15,
    consultationFee: 1500,
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
