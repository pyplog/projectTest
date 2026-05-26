const express = require('express')
const app = express()
const dbMiddleware = require('./middleware/dbMiddleware')
const indexRouter = require('./route/index')
const userRouter = require('./route/users')
app.use(express.json())

app.use(dbMiddleware)
app.use('/',indexRouter)
app.use('/users',userRouter)
module.exports = app