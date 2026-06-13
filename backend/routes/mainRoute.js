import {Router} from 'express'

import studentSchema from '../models/authStudent';

const router = Router();



router.use('/students', studentSchema)


router.use((req, res)=>{
    res.status(400).json({
        status:false,
        message:"route not found"
    })
})



