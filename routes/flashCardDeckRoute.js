import express from "express";
import {
    create,
    getAll,
    getCardsByCardDeckId
} from "../controllers/flashCardDeckController.js";
import {
    addCardToCardDeck
} from '../controllers/flashCardController.js'

const router = express.Router()

router.get('/', getAll)

router.post('/create', create)

router.get('/get-cards/:id', getCardsByCardDeckId)

router.post('/add-flash-card/:id', addCardToCardDeck)

export default router;