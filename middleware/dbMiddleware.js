<<<<<<< HEAD
const pool = require('../config/db')

const dbMiddleware = (req,res,next)=>{
    req.db=pool
    next()
}

=======
const db = require('../config/db')

const dbMiddleware = (req,res,next)=>{
    req.db = db
    next()
}
>>>>>>> main
module.exports = dbMiddleware