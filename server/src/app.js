const express = require('express')
const connectDB = require('./config/db.js')
const UserRouter = require('./routes/user.route.js')
const QuestionRouter = require('./routes/question.route.js')
const ScoreRouter = require('./routes/score.route.js')


const app = express()
const port = 3001

connectDB()
app.use(express.json({ extended: false }))

const userRouter = new UserRouter()
const questionRouter = new QuestionRouter()
const scoreRouter = new ScoreRouter()
app.use(userRouter.basePath, userRouter.getRouter())
app.use(questionRouter.basePath, questionRouter.getRouter())
app.use(scoreRouter.basePath, scoreRouter.getRouter())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})