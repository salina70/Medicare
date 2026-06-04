import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        unique:[true, 'email should be uniue']
    },
    password:{
        type:String, 
        min:4,
        max:8,
        required:[true, 'password is required']
    }
})

const user = mongoose.model("user", userSchema);

export default user;