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

export const getAll = async (req, res) => {
    console.log("Worked")
    try{
        const savedCardDecks = await FlashCardDeck.find()
        res.status(200).json(savedCardDecks)
        // JSON.stringify(responseData)
        // res.status(200).json(savedCardDecks)
    }catch(err){
        console.log(err)
    }
}
