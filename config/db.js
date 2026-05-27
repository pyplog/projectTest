<<<<<<< HEAD
require('dotenv').config()

=======
>>>>>>> main
const { Pool } = require('pg')

const pool = new Pool({
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
<<<<<<< HEAD
    port:process.env.DB_PORT,
    host:process.env.DB_HOST,
    database:process.env.DB_NAME
})

pool.connect((err,client,release)=>{
    if(err){
        console.log('database connection failed',err.message)
    }else{
        console.log('database connection succesfully')
=======
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
})

pool.connect((err, client, release) => {
    if (err) {
        console.error('Database connection failed:', err.message)
    } else {
        console.log('Database connected successfully')
>>>>>>> main
        release()
    }
})
module.exports = pool