import { Router } from "express";

import { getTransactions, getTransactionWebhook } from "../controller/transaction.controller.js";

const router = Router();

router.post("/transactions", getTransactions);
router.post("/get/transaction/webhook", getTransactionWebhook);

export default router;