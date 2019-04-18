'use strict'

let express = require('express')
let app = express()

// loading body parser
let bodyParser = require('body-parser')

// loading routers
let mainRouter = require('./mainRoutes.js')
let todoRouter = require('./classRoutes.js')

// tell express to use body parser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// mouting our routers
app.use('/', mainRouter)
app.use('/todo', todoRouter)

app.listen(3000)
console.log('Express server running on port 3000')
