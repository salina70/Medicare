import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  email:{
    type:String,
    required: [true, "username is required"],
    unique:[true, "email must be unique"]
  },
  password:{
    type:String,
    required:[true, "password is required"]

  }

})

const userModel = mongoose.model("users", userShema);
