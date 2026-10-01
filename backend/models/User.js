import mongoose from 'mongoose'

const userschema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  email:{
    type:String,
    required:true,
    trim:true,
    unique:true,
  },
  password:{
    type:"String",
    required:"true",
    trim:true,
    min:3,
  },
  role:{
    type:String,
    default:"user",
    enum:["user", "doctor", "admin"]
  },
},
{credentials:true}
)

const User = new mongoose.model("User", userschema);

export default User;