import express from "express";

import {
    addCardToCardDeck
} from '../controllers/flashCardController.js'


const router = express.Router()

router.post('/add-flash-card/:id', addCardToCardDeck)

export default router;