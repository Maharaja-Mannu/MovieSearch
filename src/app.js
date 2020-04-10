const path = require('path')
const express = require('express')
const cors = require('cors')

// load files
require('./db/mongoose')
const userRouter = require('./routers/user')
const movieRouter = require('./routers/movie')


const app = express()

// Define paths for Express config
const publicDirPath = path.join(__dirname, '../build')


// Setup static directory to serve
app.use(express.static(publicDirPath))

app.use(cors())
app.use(express.json())

app.use(userRouter)
app.use(movieRouter)
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

module.exports = app