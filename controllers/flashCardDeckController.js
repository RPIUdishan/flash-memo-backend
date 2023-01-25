import FlashCardDeck from '../models/flashCardsDeckModel.js'

export const create = async (req, res) => {
    const flashCardDeck =  new FlashCardDeck(req.body)

    try{
        const savedCardDeck = await flashCardDeck.save()
        res.status(200).json(savedCardDeck)
    }catch(err){
        console.log(err)
    }
}

