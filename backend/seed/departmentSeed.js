import department from "../models/departmentmodel.js";
import dotenv from 'dotenv';
import mongoose from "mongoose";

const departmentsData = [
  {
    icon: "❤️",
    name: "Cardiology"
  },
  {
    icon: "🧠",
    name: "Neurology"
  },
  {
    icon: "👶",
    name: "Pediatrics"
  },
  {
    icon: "🩺",
    name: "General Medicine"
  },
  {
    icon: "👩‍⚕️",
    name: "Gynecology"
  },
  {
    icon: "🧴",
    name: "Dermatology"
  },
  {
    icon: "👁️",
    name: "Ophthalmology"
  },
  {
    icon: "🦷",
    name: "Dental"
  }
];

const departmentSeed = async() =>{
  try{
    await mongoose.connect("mongodb+srv://salinamainali_db_user:mern123@cluster0.t0sres5.mongodb.net/mern");
    await department.deleteMany();
let res = await department.create(departmentsData);
  }catch(error){
    console.log(error);
    
  }
}

departmentSeed();

