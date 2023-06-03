const { default: mongoose } = require('mongoose')
const Student = require('../Models/studentSchema')

//get all students
const getStudentList = async (req,res) => {
    const student = await Student.find({}).sort({createdAt: -1})

    return res.status(200).json(student)
}

// get single student
const getsingleStudent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student.'})
    }
    const student = await Student.findById(id)

    if(!Student) {
        return res.status(404).json({error: 'No such student.'})
    }

    res.status(200).json(student)
}

// Add a student

const addStudentList = async (req,res) => {
    const {Name, RollNumber, Branch} = req.body
    try{
        const student = await Student.create({Name, RollNumber, Branch})
        res.status(200).json(student)
    } catch(error) {
        res.status(404).json({error: error.message})
    }
}

// Edit a Student List

const editStudent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student.'})
    }
    
    const student = await Student.findOneandUpdate({_id: id})

    if(!Student) {
        return res.status(404).json({error: 'No such student.'})
    }

    res.status(200).json(student)
}

const deleteStudent = async (req,res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such student.'})
    }
    
    const student = await Student.findOneAndDelete({_id: id})

    if(!Student) {
        return res.status(404).json({error: 'No such student.'})
    }

    res.status(200).json(student)
}

module.exports = {
    getStudentList,
    getsingleStudent,
    addStudentList,
    editStudent,
    deleteStudent
}