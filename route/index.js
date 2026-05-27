const express = require('express')
const router = express.Router()

router.get('/', (req,res)=>{
    res.json({
        message:"hello form index",
        serverStatus:"server Run Succesfullly"
    })
})

module.exports = router