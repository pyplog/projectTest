require('dotenv').config()

const { Pool } = require('pg')

const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME
})

pool.connect((err,client,release)=>{
    if(err){
        console.log('database connection failed',err.message)
    }else{
        console.log('database connection succesfully')
        release()
    }
})
module.exports = pool