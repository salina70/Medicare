import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Doctor name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },

    fee: {
      type: Number,
      required: [true, "Consultation fee is required"],
      min: 0,
    },

    qualification: {
      type: String,
      required: [true, "Qualification is required"],
    },

    speciality: {
      type: String,
      required: [true, "Speciality is required"],
    },

    medicalDocuments: {
      type: [String],
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
  },
  {
    timestamps: true,
  },
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;
