import Doctor from "../models/Doctor.js";

export const getAllDoctor = async (req, res, next)=>{
  try{
const data = await Doctor.find()
return res.json({
  status:"success",
  data
})
  }catch(error){
    next(error)
  }
}

export const getDoctorById = async (req, res, next)=>{
  try{
const data = await Doctor.findOne({id})
return res.json({
  status:"success",
  data
})
  }catch(error){
    next(error)
  }
}

