const db = require('../config/db')
const bcrypt = require('bcryptjs')

//user registration function/login
exports.registerUser = async (req, res) => {
const { name, email, password} = req.body;

//checking error
try{
    //check if the user exist in the database
    const [rows] = await db.execute('SELECT *  FROM users WHERE email = ?', [email])
if(rows.length > 0){
    return res.status(400).json({message: 'user already exists'})
}
//hash the password
const hashedPassword = await bcrypt.hash(password, 10)

//insert the record to db
await db.execute('INSERT INTO users (name, email, password) VALUES (?, ?, ?', [
    name,
    email,
    hashedPassword
])
res.status(201).json({ message: 'user registered successfully.'})
} catch(error) {
    res.status(500).json({ message: 'An error occured.', error})
}
}

exports.loginUser

exports.logoutUser