const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()
const { dbConnection } = require('./database/config')

const router = require('./routes/auth')

const app = express()

// DB
dbConnection()

// global middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(morgan('dev'))

// routes
app.use('/api/auth', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})