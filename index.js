const express = require('express')
const path = require('path')
const router = require('./routes/auth')
require('dotenv').config()

const app = express()


app.use(express.static(path.join(__dirname, 'public')))

app.use(express.urlencoded({ extended: true }));
app.use('/api/users', router)

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})