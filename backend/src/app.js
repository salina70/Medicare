import express from 'express'
import bodyParser from 'body-parser';
import connectDB from './config/db.js'
import dotenv from "dotenv";

import routes from './routes/index.js'

const app = express();
const port =8000

dotenv.config();

app.use(bodyParser.json({
    limit: '50mb'
}))
app.use(routes)

app.listen(port, ()=>{
    connectDB()
    console.log("listening at port "+port);
})