import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const paymentSchema = mongoose.Schema({
  appointment_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Appointment",
  },
  patient_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "newUser",
  },
  status:{
    type:String,
    enum:["paid", "pending", "cancelled", "refunded" ],
    default:"pending",
    required:true,
  },
  cancellation_reason:{
    type:String,
    default:"",
  },

},
{TimestampS:{
    created_at:"created_at",
    updated_at:"updated_at",
}}
);
