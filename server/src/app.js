const express = require('express')
const cors = require('cors')
const db = require('./config/db.js')

const app = express()
const port = 3001

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})