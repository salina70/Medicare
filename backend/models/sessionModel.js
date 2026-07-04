import mongoose from "mongoose";

const sessionSchema = mongoose.Schema({
    user_id:{
      type:mongoose.Schema.Types.ObjectId,
    ref:"users",
    required:true,
    },
    token:{
        type:String,
        required:true,
    },
    deleted_at:{
        type:Date,
        default:null,
    }, 

},
{
    timestamps:true
}
)

export default mongoose.model("sessions",sessionSchema);