const express = require('express')
const router = express.Router()

router.get('/', async (req,res)=>{
    try{
       const result = await req.db.query('SELECT * FROM users')
         res.json(result.rows)
    }catch(err){
        console.error(err.message)
        res.status(500).json({error:err.message})
    }
    
})

module.exports = router