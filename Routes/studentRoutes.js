const express = require('express')
const {
    getStudentList,
    getsingleStudent,
    addStudentList,
    editStudent,
    deleteStudent
} = require('../Controllers/controllersStudent')

const router = express.Router()

router.get('/', getStudentList)

router.get('/:id', getsingleStudent)

router.post('/', addStudentList)

router.patch('/:id', editStudent)

router.delete('/:id', deleteStudent)

module.exports = router