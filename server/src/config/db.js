const mongoose = require('mongoose')
const { db } = require('../models/user.model')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://valentinthlt:quizaventure@quiz-aventure.qkkdxyv.mongodb.net/quizaventure')
        console.log('Connecté à la base de donnée')
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

module.exports = connectDB