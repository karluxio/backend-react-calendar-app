const express = require('express')
const path = require('path')

const app = express()

app.get('/api/v1', (req, res) => {
  return res.json({
    ok: true
  })
})

app.use(express.static(path.join(__dirname, 'public')))

const PORT = 3000

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
})