import { Router } from "express";

import { getTransactions } from "../controller/transaction.controller.js";

const router = Router();

router.post("/transactions", getTransactions);

export default router;