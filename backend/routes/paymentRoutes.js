import { Router } from "express";
import { checkTransactionStatus } from "../controllers/paymentController.js";

const router = Router();

router.get("/status", checkTransactionStatus);

export default router;
