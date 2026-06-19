import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
      minlength: 6,
    },
   isAdmin:{
    type:Boolean,
    default:false
   }
  },
  {
    timestamps: true,
  },
);

const newUser = mongoose.model("user", userSchema);

export default newUser;
