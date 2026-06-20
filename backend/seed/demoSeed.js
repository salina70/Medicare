import bcrypt from "bcrypt";
import dotenv from "dotenv";
import mongoose from "mongoose";
import Appointment from "../models/appointmentModel.js";
import User from "../models/authUser.js";
import Doctor from "../models/doctorModel.js";

dotenv.config();

const password = "password123";

const daysFromNow = (days, hour, minute = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  date.setHours(hour, minute, 0, 0);
  return date;
};

const patients = [
  { name: "Ram Sharma", email: "ram.sharma@example.com" },
  { name: "Sita Karki", email: "sita.karki@example.com" },
  { name: "Hari Thapa", email: "hari.thapa@example.com" },
  { name: "Anita Gurung", email: "anita.gurung@example.com" },
  { name: "Bikash Rai", email: "bikash.rai@example.com" },
  { name: "Nisha Lama", email: "nisha.lama@example.com" },
  { name: "Prakash Adhikari", email: "prakash.adhikari@example.com" },
];

const doctors = [
  {
    name: "Dr. Ashma Sharma",
    email: "ashma.sharma@example.com",
    phone: "9801000001",
    gender: "Female",
    specialist: "Cardiologist",
    department: "Cardiology",
    experience: 12,
    qualification: "MD Cardiology",
    consultationFee: 1200,
    address: "Kathmandu Heart Clinic",
    description: "Experienced cardiologist focused on preventive heart care.",
    image: "/images/dr1.jpg",
    rating: 4.8,
  },
  {
    name: "Dr. Rakesh Verma",
    email: "rakesh.verma@example.com",
    phone: "9801000002",
    gender: "Male",
    specialist: "Dermatologist",
    department: "Dermatology",
    experience: 8,
    qualification: "MD Dermatology",
    consultationFee: 900,
    address: "Lalitpur Skin Center",
    description: "Dermatologist treating common skin, hair, and nail concerns.",
    image: "/images/dr2.jpg",
    rating: 4.6,
  },
  {
    name: "Dr. Rohan Gupta",
    email: "rohan.gupta@example.com",
    phone: "9801000003",
    gender: "Male",
    specialist: "Neurologist",
    department: "Neurology",
    experience: 15,
    qualification: "DM Neurology",
    consultationFee: 1500,
    address: "Neuro Care Center",
    description: "Neurologist providing diagnosis and follow-up care.",
    image: "/images/dr3.jpg",
    rating: 4.9,
  },
  {
    name: "Dr. Anjali Singh",
    email: "anjali.singh@example.com",
    phone: "9801000004",
    gender: "Female",
    specialist: "Pediatrician",
    department: "Pediatrics",
    experience: 10,
    qualification: "MD Pediatrics",
    consultationFee: 800,
    address: "Child Wellness Clinic",
    description: "Pediatrician for child health, growth, and vaccination care.",
    image: "/images/dr4.jpg",
    rating: 4.7,
  },
];

const upsertUser = async (user, isAdmin = false, hashedPassword) => {
  return User.findOneAndUpdate(
    { email: user.email },
    {
      $set: {
        name: user.name,
        password: hashedPassword,
        isAdmin,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  );
};

const upsertDoctor = async (doctor, hashedPassword) => {
  return Doctor.findOneAndUpdate(
    { email: doctor.email },
    {
      $set: {
        ...doctor,
        password: hashedPassword,
        isActive: true,
      },
    },
    { new: true, upsert: true, setDefaultsOnInsert: true },
  );
};

const seed = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await upsertUser(
      { name: "Medicare Admin", email: "admin@medicare.test" },
      true,
      hashedPassword,
    );

    const seededPatients = [];
    for (const patient of patients) {
      seededPatients.push(await upsertUser(patient, false, hashedPassword));
    }

    const seededDoctors = [];
    for (const doctor of doctors) {
      seededDoctors.push(await upsertDoctor(doctor, hashedPassword));
    }

    await Appointment.deleteMany({ description: /\[seed\]/i });

    const appointments = [
      [0, 0, daysFromNow(0, 9), "Pending", "Chest discomfort follow-up [seed]"],
      [1, 1, daysFromNow(0, 10), "Approved", "Skin allergy consultation [seed]"],
      [2, 2, daysFromNow(0, 11, 30), "Pending", "Migraine and dizziness [seed]"],
      [3, 3, daysFromNow(0, 13), "Approved", "Child fever checkup [seed]"],
      [4, 0, daysFromNow(0, 14), "Pending", "Blood pressure review [seed]"],
      [5, 1, daysFromNow(0, 15, 30), "Pending", "Acne treatment follow-up [seed]"],
      [6, 2, daysFromNow(0, 16), "Approved", "Nerve pain consultation [seed]"],
      [0, 3, daysFromNow(1, 10), "Pending", "Vaccination advice [seed]"],
      [1, 0, daysFromNow(2, 12), "Completed", "Routine heart check [seed]"],
      [2, 1, daysFromNow(-1, 11), "Completed", "Skin rash review [seed]"],
    ].map(([patientIndex, doctorIndex, dateTime, status, description]) => {
      const patient = seededPatients[patientIndex];
      const doctor = seededDoctors[doctorIndex];

      return {
        patient_id: patient._id,
        doctor_id: doctor._id,
        dateTime,
        status,
        description,
        age: 24 + patientIndex * 5,
        gender: patientIndex % 2 === 0 ? "Male" : "Female",
        email: patient.email,
        phone: `98020000${patientIndex + 1}`,
        department: doctor.department,
      };
    });

    await Appointment.insertMany(appointments);

    console.log("Demo seed completed");
    console.log(`Admin login: ${admin.email} / ${password}`);
    console.log(`Patient password for seeded users: ${password}`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();
