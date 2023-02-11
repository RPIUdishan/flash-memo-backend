import mongoose from 'mongoose';

const { Schema } = mongoose;

const flashCardsDeckSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  cards: {
    type: [String],
    default: []
  },
  noOfCards: {
    type: Number,
    default: function () {
      return this.cards.length;
    }
  },
},
  {
    timestamps: true
  }
);

export default mongoose.model("flash_card_decks", flashCardsDeckSchema)