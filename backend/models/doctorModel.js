import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
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
    },

    specialist: {
      type: String,
      required: true,
      trim: true,
    },

    department: {
      type: String,
      trim: true,
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
    },

    address: {
      type: String,
      trim: true,
      required: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      default: "/images/doctor.png",
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
            required:true,

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
