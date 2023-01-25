import mongoose from 'mongoose';

const { Schema } = mongoose;

const flashCardsDeckSchema = new Schema({
  title:  {
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
  noOfCards: {
    type: Number,
    required: true 
  }

});

export default mongoose.model("FlashCardsDeck", flashCardsDeckSchema)