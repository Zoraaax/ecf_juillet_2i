const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 80
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    progress: {
        currentLevel: {
            type: Number,
            default: 1
        },
        currentScore: {
            type: Number,
            default: 0
        }
    }
})

module.exports = mongoose.model('User', userSchema)