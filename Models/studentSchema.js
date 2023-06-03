const mongoose = require('mongoose')

const Schema = mongoose.Schema

const studentSchema = new Schema({
    Name: {
        type: String,
        require: true
    },
    RollNumber: {
        type: Number,
        require: true
    },
    Branch: {
        type: String,
        require: true
    }
}, { timestamps: true})

module.exports = mongoose.model('Student',studentSchema)