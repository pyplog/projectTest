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

        if(!firstname || !lastname || !email){
            return res.status(400).json({
                errMessage:"firstname, lastname and email are required"
            })
        }

        if(typeof firstname !== 'string' || firstname.trim() === ''){
            return res.status(400).json({
                errMessage:"firstname must be a non-empty string"
            })
        }

        if(typeof lastname !== 'string' || lastname.trim() === ''){
            return res.status(400).json({
                errMessage:"lastname must be a non-empty string"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if(!emailRegex.test(email)){
            return res.status(400).json({
                errMessage:"email is invalid"
            })
        }

        const emailExist = await req.db.query(
            'SELECT id FROM users WHERE email = $1',
            [email.trim()]
        )
        if(emailExist.rows.length > 0){
            return res.status(409).json({
                errMessage:"email already exists"
            })
        }

        const nameExist = await req.db.query(
            'SELECT id FROM users WHERE firstname = $1 AND lastname = $2',
            [firstname.trim(), lastname.trim()]
        )
        if(nameExist.rows.length > 0){
            return res.status(409).json({
                errMessage:"user with this firstname and lastname already exists"
            })
        }

        const result = await req.db.query(
            `INSERT INTO users (firstname,lastname,email,isactived)
             VALUES ($1,$2,$3,$4)
             RETURNING *`,
            [firstname.trim(),lastname.trim(),email.trim(),isactived ?? true]
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