import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },
rating:{
type:Number,
default:0
},
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    contact: {
      type: String,
      required: true,
      trim: true,
    },

    profile: {
      type: String,
      default: "",
    },

    specialization: {
      type:String,
      required: true,
      trim:true
    },

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    education: {
      type: String,
      required: true,
      trim: true,
    },

    gender: {
      type: String,
      enum: ["Male", "Female", "Other"],
      required: true,
    },

    availability: [
      {
        day: {
          type: String,
          enum: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          required: true,
        },

        isAvailable: {
          type: Boolean,
          default: true,
        },

        slots: [
          {
            startTime: {
              type: String,
              required: true,
            },

            endTime: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model("Doctor", doctorSchema);

export default Doctor;