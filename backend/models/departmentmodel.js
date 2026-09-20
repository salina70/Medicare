import mongoose from "mongoose";

const departmentSchema = new mongoose.Schema({
  icon:{
    type:String,
    required:true,

  },
  name:{
    type:String,
    required:true,
  }
}, {timestamps:true})

const department = mongoose.model("Department", departmentSchema);

export default department;