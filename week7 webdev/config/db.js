const mysql2 = require('mysql2')
require('dotenv').config()

// const pool = mysql.createPool(
//     {
//         host: process.env.DB_HOST,
//         user: process.env.DB_USER,
//         password: process.env.DB_PASSWORD,
//         database: process.env.DB_NAME,
//     }
// )
const pool = mysql.createPool({
    host: 'localhost', // Your database host
    user: 'root', // Your database username
    password: 'Samzzyluv1$', // Your database password
    database: 'Telemedicine2_db' // Your database name
});
module.exports = pool.promise()