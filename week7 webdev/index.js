//connect packages
const express = require('express')
const session = require('express-session')
const mysqlStore = require('connect-mysql2')(session)
 const path = require('path')
require ('dotenv').config()
 
const db = require('./config/db')
const authRoutes = require('./routes/auth')

//initiative server
const app = express()

//set-up middleware
app.use(express.json)

//set-up session
app.use(
    session(
        {
            key: 'user_sid', 
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            // store: new mysqlStore({}, db)
        }
    )
)

//routes
app.get('/', (reg, res) => {
    res.sendFile(path.join(__dirname, 'index.hyml'))
})
app.use('/auth', authRoutes)

//start server
const port = 3000

app.listen(port, () => (
    console.log(`server is running on http://localhost:${port}`
)))