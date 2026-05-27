const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    try{
        res.status(200).json({
            message:"hello form index.js"
        })
    }catch(err){
        console.err(err.message)
        res.status(500).json({
            errMessage:err.message
        })
    }
})

module.exports = router