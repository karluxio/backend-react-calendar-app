const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('dotenv').config()
const { dbConnection } = require('./database/config')

const app = express()

// DB
dbConnection()

// global middlewares
app.use(cors(
  {
    //   credentials: true,
    //   origin: process.env.FRONTEND_URL,
    //   optionsSuccessStatus: 200,
    //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //   preflightContinue: false
  }
))
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/events', require('./routes/events'))

// allow react spa in public folder
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})