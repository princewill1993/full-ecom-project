import express from "express";
import { createCustomerOrder } from "../controllers/orderControllers/createCustomerOrder.js";

const router = express.Router();

router.post("/create-order", createCustomerOrder);

export default router;
