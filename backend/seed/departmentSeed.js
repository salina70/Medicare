import mongoose from "mongoose";
import {
  HeartPulse,
  Brain,
  Stethoscope,
  Eye,
  Tooth,
  ScanFace
} from "lucide-react";
import Department from "../models/Department";

const departmentData = [
  {name:"Cardiologist", icon:HeartPulse},
  {name:"Neurologist", icon:Brain},
  {name:"General Medicine", icon:Stethoscope},
  {name:"Opthalmologist", icon:Eye},
  {name:"Dentist", icon:Tooth},
  {name:"Dermatologist", icon:ScanFace}
]

const seedDepartments = async() =>{
try{
await mongoose.connect(process.env.MONGO_URI);
await Department.deleteMany();
await Department.insertMany(departmentData);
console.log("department seeded");
await mongoose.connection.close();

}catch(error){
console.error("department seed error "+error)
} 
}

seedDepartments();
