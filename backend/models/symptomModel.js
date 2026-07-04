import mongoose from "mongoose";


const symptomSchema = mongoose.Schema({
    name:{
        type:String,
        unique:true,
        trim:true,
    }, 
    description:{
        type:String,
        default:null,
    },
    specialization:{
        required:true,
        ref:"doctors"
    },
    emergency:{
        type:Boolean,
        default:false,
    }
})

export const symptomModel = new mongoose.model("symptom", symptomSchema);
