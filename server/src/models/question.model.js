const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true,
        unique: true
    },
    answers: {
        type: [String],
        required: true
    },
    correctAnswer: {
        type: String,
        required: true
    },
    difficulty: {
        type: String,
        required: true
    },
    level: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Questions', questionSchema)