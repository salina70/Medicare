import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true, 'email should be unique']
    },
   password:{
    required:[true, 'password is required'],
    maxlength:6,
    type:String
   }
})

const doctor = mongoose.model("doctor", doctorSchema);

const dr1 = new doctor({
    email:"salina@gmail.com",
    password:"123456"
});

await dr1.save();

const doctors = await doctor.find();
console.log(doctors);

export default doctor;