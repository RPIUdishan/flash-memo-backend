import express from "express";
import { create, getAll } from "../controllers/flashCardDeckController.js";

const router = express.Router()

router.post('/create', create)

router.get('/', getAll)

export default router;