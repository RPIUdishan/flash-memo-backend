import FlashCardDeck from '../models/flashCardsDeckModel.js'

export const create = async (req, res) => {
    console.log("Working",req)
    const flashCardDeck = new FlashCardDeck(req.body)

    try {
        console.log("its working")
        const savedCardDeck = await flashCardDeck.save()
        res.status(200).json(savedCardDeck)
    } catch (err) {
        console.log(err)
    }
}

export const getAll = async (req, res) => {
    try {
        const savedCardDecks = await FlashCardDeck.find()
        res.status(200).json(savedCardDecks)
    } catch (err) {
        console.log(err)
    }
}

export const getCardsByCardDeckId = async = (req, res) => {
    try{
        
    }
    catch(err){
        console.log(err);
    }
}
