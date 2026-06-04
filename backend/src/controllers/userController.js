import mongoose from "mongoose";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import user from "../models/userModel.js"

const registerUser = async (req, res, next)=>{
   try{
     const {email, password} = req.body;

    if(!email || !password){
      return res.status(400).json({
        success:true,
        message:"all field required"
      })
    }

const existingUser = await user.findOne({email});

if(existingUser){
    return res.status(400).json({
        success:false,
        message:"user already exixts"
    })
}

const hashedPassword = await bcrypt.hash(password, 10);

const newUser= await user.create({
    email,
    password:hashedPassword
})

const token = jwt.sign(
    {userId : user._id},
    
)


   }catch(error){
    next(error);
   }


  
}