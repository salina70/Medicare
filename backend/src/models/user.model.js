const mongoose=require("mongoose")


const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:[true, "Email is required for creating a user"],
        trim:true,
        lowercase:true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique:[true, "Email already exist"]
    },
    name:{
        type:String,
        required:[true, "name is required for creating an account"]
    },
     
})