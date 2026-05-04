require("dotenv").config()
const connect=require("./src/config/db")
const app=require("./src/app");

connect()
app.listen(3000, ()=>{
    console.log("server started");
})