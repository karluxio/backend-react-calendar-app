const express = require('express')
const path = require('path')
require('dotenv').config()

const app = express()

app.get('/api/v1', (req, res) => {
  return res.json({
    ok: true
  })
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})