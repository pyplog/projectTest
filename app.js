const express = require('express')
const app = express()
const indexRouter = require('./route/index')
const userRouter = require('./route/users')
app.use(express.json())

app.use('/',indexRouter)
app.use('/users',userRouter)
module.exports = app