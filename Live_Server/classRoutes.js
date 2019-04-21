'use strict'

let path = require('path')
let express = require('express')
let router = express.Router()
let classList = require('./classList.js')

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'index.html'))
})

router.get('/create', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'create.html'))
})

router.get('/delete', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'delete.html'))
})

router.get('/edit', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'class', 'edit.html'))
})
// RESTful interface
router.get('/api/list', function (req, res) {
  res.json(classList.getList())
})

router.get('/api/get/:id', function (req, res) {
  res.json(classList.get(req.params.id))
})

router.post('/api/create', function (req, res) {
  console.log('creating the following student entry: ', req.body.student)
  let student = { name: req.body.student, studentNumber: req.body.studentNum, Courses: req.body.courses }
  classList.add(student)
  res.redirect(req.baseUrl + '/api/list')
})

router.post('/api/delete', function (req, res) {
  if (req.body.deleteSt < classList.Size()) {
    console.log('deleting the following student: ', req.body.deleteSt)
    classList.delete(req.body.deleteSt, 1)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('The row you entered does not exist!')
    res.redirect(req.baseUrl + '/delete')
  }
})

router.post('/api/edit', function (req, res) {
  let index = req.body.editStudent.split(',')[0]
  let newName = req.body.editStudent.split(',')[1]

  if (index < classList.Size()) {
    classList.edit(newName, index)
    res.redirect(req.baseUrl + '/api/list')
  } else {
    console.log('The row you entered does not exist!')
    res.redirect(req.baseUrl + '/edit')
  }
})

module.exports = router
