const express=require("express");

const app = express();
const port = process.env.PORT;

app.get('/', (req, res)=>{
    res.send("connected")
})





app.listen(port, ()=>{
    console.log("listening at port "+port);
})