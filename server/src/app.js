const express = require('express')
const connectDB = require('./config/db.js')
const UserRouter = require('./routes/user.route.js')


const app = express()
const port = 3001

connectDB()
app.use(express.json({ extended: false }))

const userRouter = new UserRouter()
app.use(userRouter.basePath, userRouter.getRouter())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})