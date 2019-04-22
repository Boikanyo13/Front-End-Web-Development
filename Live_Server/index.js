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
app.use('/class', todoRouter)

// serving static files
app.use('/cdn', express.static('public'))

let port = process.env.PORT || 3000

app.listen(port)
console.log('Express server running on port', port)
