import express from 'express';
import mongoose from 'mongoose';

const departmentSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    trim:true,
  },
  icon:{
    type:String,
    required:true,

  }
})

const Specialization = new mongoose.model("Specialization", departmentSchema);

export default Specialization;