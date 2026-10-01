import createHttpError from "http-errors"
import jwt from 'jsonwebtoken'
import User from "../models/User.js";
import bcrypt from 'bcryptjs'

export const registerLogic = async (req, res, next)=>{
 try{
   const {name, email, password} = req.body;
  if(!name || !email || !password){
    return res.json({
      status:"failure",
      message:"all fields required"
    })
  }

 const existedUser = await User.findOne({email});
 if(existedUser){
  return res.json({
    status:"failure",
    message:"user already exist"
  })
 }

 const hashed = await bcrypt.hash(password,10);

await User.create({
  name,
  email,
  password:hashed
})

return res.status(200).json({
  status:"success",
  message:"user registered"
})
 }catch(error){
  next(error)
 }
}

export const loginLogic = async(req, res, next)=>{
try{
const {email, password} = req.body;
if(!email || !password){
 return res.json({
    status:"failure",
    message:"user not exists"
  })
}

const existedUser = User.find({email});
if(!existedUser){
  return res.json({
    status:"failure",
    message:"user not existed"
  })
}
const checkPassword = await bcrypt.compare(password, existedUser.password);
if(!checkPassword){
  return res.json({
    status:"failure",
    message:"password dont match"
  })
}

return res.status(200).json({
  status:"success",
  message:"user logged in"
})


}catch(error){
  console.error(error)
}
}