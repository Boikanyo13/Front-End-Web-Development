'use strict'

let express = require('express')
let app = express()

// loading routers
let mainRouter = require('./mainRoutes.js')
let classRouter = require('./classRoutes.js')

// mouting our routers
app.use('/', mainRouter)
app.use('/class', classRouter)

app.listen(3000)
console.log('Express server running on port 3000')
