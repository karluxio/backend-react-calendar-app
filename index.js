const express = require('express')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config()

const router = require('./routes/auth')

const app = express()


app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))

app.use(express.urlencoded({ extended: true }));
app.use('/api/users', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})