const express = require('express')
const app = express()

app.use(express.json())
const dbMiddleware = require('./middleware/dbMiddleware')
const routerIndex = require('./routes/index')
const routerUsers = require('./routes/users')

app.use(dbMiddleware)
app.use('/',routerIndex)
app.use('/users',routerUsers)
module.exports = app
