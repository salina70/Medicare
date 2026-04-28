const mongoose=require("mongoose");


function connectTODB(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("server is connected to DB")
    })
    .catch((e)=>{
        console.log("error"+e)
        process.exit(1);
    })
}

module.exports=connectTODB;