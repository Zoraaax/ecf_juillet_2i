const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 80
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 256
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