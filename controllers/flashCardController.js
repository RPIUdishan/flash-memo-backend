import FlashCard from '../models/flashCardModel.js'
import FlashCardDeck from '../models/flashCardsDeckModel.js'

export const addCardToCardDeck = async (req, res) => {
    console.log("REQUEST", req)

    const flashCard = new FlashCard(req.body)
    const flashCardDeckID = req.params.id

    console.log("crd-id", flashCardDeckID)
    try {
        const savedCardDeck = await flashCard.save()
        console.log("card", savedCardDeck)
        try {
            await FlashCardDeck.findByIdAndUpdate(flashCardDeckID, {
                $push: {
                    cards: savedCardDeck._id
                }
            })
        } catch (err) {
            console.log(err)
        }
        res.status(200).json(savedCardDeck)
    } catch (err) {
        console.log(err)
    }
}