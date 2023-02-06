import express from "express";
import {
    create,
    getAll,
    getCardsByCardDeckId
} from "../controllers/flashCardDeckController.js";

const router = express.Router()

router.get('/get-cards/:id',getCardsByCardDeckId)

router.post('/create', create)

router.get('/', getAll)

export default router;