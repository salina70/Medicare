import express from 'express'
import { testMail } from '../controllers/mailController.js';

const router = express.Router();

router.get("/test-mail", testMail)

export default router;