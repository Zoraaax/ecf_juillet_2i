const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://valentinthlt:quizaventure@quiz-aventure.qkkdxyv.mongodb.net/')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
    console.log('Connected to MongoDB')
})

module.exports = db