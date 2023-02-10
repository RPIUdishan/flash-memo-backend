import mongoose from 'mongoose';

const { Schema } = mongoose;

const flashCardSchema = new Schema({
    question: {
        type: String,
        required: true
    },
    answer1: {
        type: String,
        required: true
    },
    answer2: {
        type: String,
        required: true
    },
    answer3: {
        type: String,
        required: true
    },
    answer4: {
        type: String,
        required: true
    },
    correctAnswer: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    }
);

export default mongoose.model("flash_cards", flashCardsDeckSchema)