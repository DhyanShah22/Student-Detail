const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const StudentRoutes = require('./Routes/studentRoutes')

const app = express()

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.method,req.method)
    next()
})

app.use('/api/studentlist', StudentRoutes)

mongoose.connect(process.env.MONG_URI)
    .then( () => {
        app.listen(process.env.PORT, () =>  {
            console.log('Connected to DB and Listening to port', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
