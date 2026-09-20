import mongoose from "mongoose";
import z from "zod";

const doctorSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
      required: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other", ""],
      default: "",
    },

    age: {
      type: Number,
      min: 0,
      default: null,
      max: 60,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Department",
      required: true,
    },

    experience: {
      type: Number,
      min: 0,
      required: true,
    },

    qualification: {
      type: String,
      trim: true,
      required: true,
    },

    consultationFee: {
      type: Number,
      min: 0,
      required: true,
      max: 2000,
    },

    address: {
      type: String,
      trim: true,
      required: true,
      default: "kathmandu",
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },
    
    image: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    password: {
      type: String,
      select: false,
      default: "doctor",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  },
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
