import dotenv from 'dotenv/config';
import express from 'express';
import connectDB from './config/db.js'

const port = process.env.PORT;
const app = express();

app.get('/', (req, res)=>{
    res.send("server started")
})

app.listen(port, ()=>{
    connectDB();
    console.log("server started on port "+port)
})

