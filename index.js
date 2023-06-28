const express = require('express')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')
const compression = require('compression')
require('dotenv').config()
const { dbConnection } = require('./database/config')

const router = require('./routes/auth')

const app = express()

// DB
dbConnection()

// global middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(compression())
app.use(helmet())
app.use(cors(
  {
    //   credentials: true,
    //   origin: process.env.FRONTEND_URL,
    //   optionsSuccessStatus: 200,
    //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    //   preflightContinue: false
  }
))
app.use(morgan('dev'))

// routes
app.use('/api/auth', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})