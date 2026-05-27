const express = require('express')

const router = express.Router()

router.get('/',async (req,res)=>{
    try{
        const result = await req.db.query('SELECT * FROM users')
        res.status(200).json({
            message:"hello form users.js",
            users:result.rows
        })
    }catch(err){
        console.error(err.message)
        res.status(500).json({
            errMessage:err.message
        })
    }
})
router.post('/',async(req,res)=>{
    try{
        const {firstname,lastname,email,isactived} = req.body

        const result =await req.db.query(
            `
            INSERT INTO users (firstname,lastname,email,isactived)
            VALUE ($1,$2,$3,$4)
            `,
            [firstname,lastname,email,isactived]
        )

        res.status(201).json({
            message:"create user successfully",
            user: result.rows[0]
        })
    }catch(err){
        console.error(err.message)
        res.status(500).json({
            errMessage:err.message
        })
    }
})
module.exports = router