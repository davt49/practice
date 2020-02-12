const express = require('express')
const mongoose = require('mongoose')
const app = express()


// const PORT = process.env.PORT || 8000
// const dbURI = process.envMONGODB_URI || 'mongodb://localhost:27017/artist-resume'
const router = require('./config/router')
const {PORT, dbURI} = require('./config/environment')

mongoose.connect(dbURI)

app.use('/api', router)

app.listen(PORT, ()=>console.log(`up and running on Port ${PORT}`))